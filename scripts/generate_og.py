"""Generate per-page OG images by screenshotting the /og/... routes.

Usage:
  1. npm run dev (in another terminal — vite on :5173 by default)
  2. /home/sgibson/dev/minutezero/.venv/bin/python scripts/generate_og.py

Writes 1200x630 PNGs to static/images/og/.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright

BASE = "http://localhost:5173"
OUT_DIR = Path(__file__).resolve().parents[1] / "static" / "images" / "og"

# (route, output filename)
PAGES = [
    ("/og", "home.png"),
    ("/og/dev", "dev.png"),
    ("/og/dev/ai-native", "dev-ai-native.png"),
    ("/og/dev/languages", "dev-languages.png"),
    ("/og/dev/databases", "dev-databases.png"),
    ("/og/dev/qa-test-automation", "dev-qa-test-automation.png"),
    ("/og/dev/devops-sysadmin", "dev-devops-sysadmin.png"),
    ("/og/grow", "grow.png"),
    ("/og/grow/content-seo", "grow-content-seo.png"),
    ("/og/grow/pr-media-relations", "grow-pr-media-relations.png"),
    ("/og/grow/influencer-endorsement", "grow-influencer-endorsement.png"),
    ("/og/grow/email-performance", "grow-email-performance.png"),
    ("/og/startups", "startups.png"),
    ("/og/startups/gold-lapel", "startups-gold-lapel.png"),
    ("/og/startups/minutezero", "startups-minutezero.png"),
    ("/og/events", "events.png"),
    ("/og/events/mission-creatives", "events-mission-creatives.png"),
    ("/og/events/bayareasearch", "events-bayareasearch.png"),
    ("/og/events/open-future-forum", "events-open-future-forum.png"),
    ("/og/music", "music.png"),
    ("/og/music/brick-and-mortar", "music-brick-and-mortar.png"),
    ("/og/music/cherry-blossom-festival", "music-cherry-blossom-festival.png"),
    ("/og/music/original-works", "music-original-works.png"),
    ("/og/music/anything-goes-chorus", "music-anything-goes-chorus.png"),
]


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(
            viewport={"width": 1200, "height": 630},
            device_scale_factor=1,
        )
        page = context.new_page()

        for route, filename in PAGES:
            url = f"{BASE}{route}"
            out = OUT_DIR / filename
            print(f"[{route}] -> {out.name}")
            page.goto(url, wait_until="networkidle")
            # Brief settle so web fonts apply
            page.wait_for_timeout(400)
            # Screenshot just the og-canvas wrapper (1200x630, no scroll bars)
            canvas = page.locator(".og-canvas")
            canvas.screenshot(path=str(out), omit_background=False)

        browser.close()
    print(f"Done. {len(PAGES)} images written to {OUT_DIR}")


if __name__ == "__main__":
    main()
