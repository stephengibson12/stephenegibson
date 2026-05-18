"""One-time OAuth grant for reading the SEG outreach inbox.

Runs the InstalledAppFlow against the Desktop OAuth client whose JSON
lives at SEG_OAUTH_CLIENT_JSON. Opens your default browser for the
one-time consent screen, captures the auth code, exchanges it for a
refresh token, and saves the token to SEG_GMAIL_TOKEN_JSON.

After this runs once, future scripts can read your Gmail inbox by
loading that token file. The refresh token is long-lived and survives
restarts; you only re-run this script if you revoke the grant in
your Google account or change scopes.

Usage:
  cd ~/dev/stephenegibson
  .venv/bin/python scripts/seg_oauth_bootstrap.py

Prerequisites:
  - OAuth consent screen configured in Google Cloud Console for
    project=stephenegibson, with steve.gibson.vyteo@gmail.com added
    as a Test User on the Audience tab.
  - Desktop OAuth client created; JSON saved to the path in
    SEG_OAUTH_CLIENT_JSON (default ~/.config/seg-outreach/oauth_client.json).
"""
import os
import sys
from pathlib import Path

# Load .env from project root (one level up from this script).
ENV_FILE = Path(__file__).resolve().parents[1] / ".env"
if ENV_FILE.exists():
    for line in ENV_FILE.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip())

from google_auth_oauthlib.flow import InstalledAppFlow
from google.oauth2.credentials import Credentials
from googleapiclient.discovery import build

SCOPES = [
    "https://www.googleapis.com/auth/gmail.readonly",
]

CLIENT_JSON = Path(os.path.expanduser(
    os.environ.get("SEG_OAUTH_CLIENT_JSON", "~/.config/seg-outreach/oauth_client.json")
))
TOKEN_JSON = Path(os.path.expanduser(
    os.environ.get("SEG_GMAIL_TOKEN_JSON", "~/.config/seg-outreach/gmail_token.json")
))


def run():
    if not CLIENT_JSON.exists():
        print(f"ERROR: OAuth client JSON not found at {CLIENT_JSON}", file=sys.stderr)
        print("Download it from Google Cloud Console (Credentials → OAuth client → Desktop app)", file=sys.stderr)
        sys.exit(1)

    TOKEN_JSON.parent.mkdir(parents=True, exist_ok=True)

    if TOKEN_JSON.exists():
        print(f"Existing token found at {TOKEN_JSON}.")
        print("Re-running will overwrite it. Press Ctrl+C now to abort, or Enter to continue.")
        try:
            input()
        except KeyboardInterrupt:
            print("\nAborted.")
            sys.exit(0)

    print(f"Loading OAuth client from {CLIENT_JSON}")
    flow = InstalledAppFlow.from_client_secrets_file(str(CLIENT_JSON), SCOPES)

    print("Opening browser for one-time grant. Sign in as the account whose")
    print("inbox you want to read (typically steve.gibson.vyteo@gmail.com).")
    creds = flow.run_local_server(port=0, open_browser=True, prompt="consent")

    TOKEN_JSON.write_text(creds.to_json())
    os.chmod(TOKEN_JSON, 0o600)
    print(f"\nRefresh token saved to {TOKEN_JSON} (perms 600).")

    # Smoke test: list 5 most recent inbox messages.
    print("\nSmoke test — your 5 most recent inbox messages:")
    service = build("gmail", "v1", credentials=creds)
    resp = service.users().messages().list(userId="me", labelIds=["INBOX"], maxResults=5).execute()
    msgs = resp.get("messages", [])
    if not msgs:
        print("  (inbox empty?)")
        return
    for m in msgs:
        full = service.users().messages().get(userId="me", id=m["id"], format="metadata",
                                              metadataHeaders=["From", "Subject", "Date"]).execute()
        headers = {h["name"]: h["value"] for h in full.get("payload", {}).get("headers", [])}
        date = headers.get("Date", "?")
        sender = headers.get("From", "?")
        subj = headers.get("Subject", "(no subject)")
        print(f"  - [{date[:25]}] {sender[:40]}  |  {subj[:60]}")


if __name__ == "__main__":
    run()
