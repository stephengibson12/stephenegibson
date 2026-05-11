export interface ProjectLink {
  demo?: string;
  repo?: string;
}

export interface Project {
  id: string;
  title: string;
  path: string;
  description: string;
  image?: string;
  action?: string;
  links?: ProjectLink;
}

export interface SectionTheme {
  header: string;
  title: string;
}

export interface Section {
  id: string;
  title: string;
  path: string;
  description: string;
  theme: SectionTheme;
  projects: Project[];
}

export interface SocialLinks {
  email?: string;
  github?: string;
  linkedin?: string;
}

export interface Hero {
  title: string;
  description: string;
}

export interface SiteData {
  title: string;
  hero: Hero;
  social: SocialLinks;
  sections: Section[];
}

export const siteData: SiteData = {
  title: "Stephen's Portfolio",
  hero: {
    title: "Stephen Gibson",
    description: "Builder. Operator. Marketer.",
  },
  social: {
    email: "hello@stephenegibson.com",
    github: "https://github.com/stephengibson12",
    linkedin: "https://linkedin.com/in/stephenegibson",
  },
  sections: [
    {
      id: "dev",
      title: "Dev",
      path: "/dev",
      description: "Software development — full-stack, AI-assisted, shipped.",
      theme: {
        header: "#00b0ff",
        title: "#00e5ff",
      },
      projects: [
        {
          id: "ai-native",
          title: "AI-Native Development",
          path: "/dev/ai-native",
          description: "Building production software with AI code-generation tools. Multi-agent Claude Code workflows. Shipping at speeds previously impossible solo — full stack, in any language, end-to-end.",
          image: "/images/dev-01.webp",
          action: "AUGMENT",
          links: {},
        },
        {
          id: "languages",
          title: "Languages",
          path: "/dev/languages",
          description: "Rust, Python, JavaScript, Ruby, Java, Go, PHP, C#. Depth in async Rust — connection pooling, transparent proxies, P2P networking via QUIC. Production breadth across the rest.",
          image: "/images/dev-02.webp",
          action: "BUILD",
          links: {},
        },
        {
          id: "databases",
          title: "Database & Backend",
          path: "/dev/databases",
          description: "PostgreSQL deep-dive — JSONB document stores, aggregation pipelines, materialized views, advisor-grade tuning. History with Redis, Elasticsearch, MongoDB, Oracle, DB2, Informix, Sybase.",
          image: "/images/dev-03.webp",
          action: "QUERY",
          links: {},
        },
        {
          id: "qa-test-automation",
          title: "QA & Test Automation",
          path: "/dev/qa-test-automation",
          description: "20+ years of enterprise QA — Oracle/PeopleSoft, JotForm, McKinsey (via Lion Interactive). Selenium and Jest automation, Pandas-based data validation, 500+ root-caused bug reports with annotated repros.",
          image: "/images/dev-04.webp",
          action: "TEST",
          links: {},
        },
        {
          id: "devops-sysadmin",
          title: "DevOps & SysAdmin",
          path: "/dev/devops-sysadmin",
          description: "CI/CD releasing to 12+ registries from a single git tag — PyPI, npm, RubyGems, Maven, NuGet, Homebrew, Docker, etc. Multi-platform certification across AIX, Solaris, Tru64, HP-UX. Serverless tuning + SSO.",
          image: "/images/dev-05.webp",
          action: "DEPLOY",
          links: {},
        },
      ],
    },
    {
      id: "grow",
      title: "Grow",
      path: "/grow",
      description: "Marketing — PR, email, growth, and content.",
      theme: {
        header: "#00e676",
        title: "#76ff03",
      },
      projects: [
        {
          id: "content-seo",
          title: "Content & SEO",
          path: "/grow/content-seo",
          description: "Content strategy across blog, landing pages, and email. Built a blog to 350+ views/day through SEO and backlink work. On-page and technical SEO; content cluster planning; editorial calendar ops. 1.5x peak traffic via GA-informed iteration.",
          image: "/images/grow-04.webp",
          action: "RANK",
          links: {},
        },
        {
          id: "pr-media-relations",
          title: "PR & Media Relations",
          path: "/grow/pr-media-relations",
          description: "Tier-1 press placements: WSJ, WIRED, TechCrunch, Fast Company, Forbes, Bloomberg, Fox News, BBC, AP, NBC. Live TV and prerecorded broadcast appearances. Generated inbound press momentum from earned coverage.",
          image: "/images/grow-01.webp",
          action: "PITCH",
          links: {},
        },
        {
          id: "influencer-endorsement",
          title: "Influencer & Endorsement",
          path: "/grow/influencer-endorsement",
          description: "Influencer campaigns across YouTube, Instagram, TikTok, Facebook, Twitch. Recruited a pro athlete to headline a product launch. Built engagement-led communities on Discord and beyond.",
          image: "/images/grow-02.webp",
          action: "AMPLIFY",
          links: {},
        },
        {
          id: "email-performance",
          title: "Email & Performance Marketing",
          path: "/grow/email-performance",
          description: "$225K+ in attributed revenue through email. 3x improvement in open / click / conversion via personalization and segmentation. 10x PPC rate reduction. 25% YoY ecommerce revenue lift. Browse-abandonment automations and lifecycle flows.",
          image: "/images/grow-03.webp",
          action: "CONVERT",
          links: {},
        },
      ],
    },
    {
      id: "startups",
      title: "Startups",
      path: "/startups",
      description: "Companies built, operated, and shipped.",
      theme: {
        header: "#ff3d00",
        title: "#ff9100",
      },
      projects: [
        {
          id: "gold-lapel",
          title: "Gold Lapel",
          path: "/startups/gold-lapel",
          description: "Self-optimizing PostgreSQL proxy that replaces Redis, Elasticsearch, and MongoDB with a single database. 45,000+ lines of async Rust + SDKs in 7 languages (Python, JS, Ruby, Go, Java, PHP, .NET). MongoDB-style aggregation pipeline (85x faster than Mongo via materialized-view caching), JSONB document store, P2P QUIC mesh for cross-instance cache invalidation. Built solo using AI code-generation tools (Claude Code with multi-agent workflows). Shipping to 12+ package registries from a single git tag. Founder & principal engineer.",
          image: "/images/dev-05.webp",
          action: "VISIT",
          links: { demo: "https://goldlapel.com" },
        },
        {
          id: "minutezero",
          title: "MinuteZero",
          path: "/startups/minutezero",
          description: "AI Marketing Engineer service. Custom prospect audits with six-axis topic-strength grading, AI-search-readiness checklist, and series-scale content production. Built the audit pipeline, content engine, and CRM as one platform. Founder & principal engineer; running since 2016.",
          image: "/images/dev-01.webp",
          action: "VISIT",
          links: { demo: "https://minutezero.com" },
        },
      ],
    },
    {
      id: "events",
      title: "Events",
      path: "/events",
      description: "Communities built, hosted, and amplified.",
      theme: {
        header: "#ffab00",
        title: "#ffea00",
      },
      projects: [
        {
          id: "mission-creatives",
          title: "Mission Creatives Meetup",
          path: "/events/mission-creatives",
          description: "Founded and organized a weekly SF meetup for creatives — artists, designers, and engineers working on personal projects. Handled scheduling, planning, invites, sponsors, and hosting across separate Engineers / Designers / Artists tracks.",
          image: "/images/grow-01.webp",
          action: "HOST",
          links: { demo: "https://www.meetup.com/mission-creatives-engineers/" },
        },
        {
          id: "bayareasearch",
          title: "BayAreaSearch",
          path: "/events/bayareasearch",
          description: "Communications Manager for a 50-100+ person Bay Area SEO meetup. Drove email communications, online invites, event planning, and helped host live events focused on SEO trend-sharing.",
          image: "/images/dev-02.webp",
          action: "VISIT",
          links: { demo: "https://bayareasearch.org/" },
        },
        {
          id: "open-future-forum",
          title: "Open Future Forum",
          path: "/events/open-future-forum",
          description: "Event Director for monthly 200-300 person networking events bringing together Founders and VCs. Owned scheduling, planning, and cohost recruitment across the event series.",
          image: "/images/dev-04.webp",
          action: "CONVENE",
          links: {},
        },
      ],
    },
    {
      id: "music",
      title: "Music",
      path: "/music",
      description: "Singer-songwriter — guitar, piano, original works.",
      theme: {
        header: "#d500f9",
        title: "#ff4081",
      },
      projects: [
        {
          id: "brick-and-mortar",
          title: "Brick & Mortar — opening for Marie Digby",
          path: "/music/brick-and-mortar",
          description: "Opened for Marie Digby at Brick & Mortar Music Hall, San Francisco. Set on piano and guitar, with cello and vocal accompaniment.",
          image: "/images/music-01.jpg",
          action: "PLAY",
          links: {},
        },
        {
          id: "cherry-blossom-festival",
          title: "Cherry Blossom Festival, SF",
          path: "/music/cherry-blossom-festival",
          description: "Performed at the San Francisco Cherry Blossom Festival in Japantown — one of the largest cultural celebrations on the West Coast. Piano and guitar with cello and vocal accompaniment.",
          image: "/images/music-03.png",
          action: "PERFORM",
          links: {},
        },
        {
          id: "original-works",
          title: "Original Works",
          path: "/music/original-works",
          description: "Piano- and guitar-based original songs. Writing and performing under my own name across SF venues and festivals.",
          image: "/images/music-02.jpg",
          action: "COMPOSE",
          links: {},
        },
        {
          id: "anything-goes-chorus",
          title: "Anything Goes Chorus",
          path: "/music/anything-goes-chorus",
          description: "Singing with Anything Goes Chorus — a Bay Area community chorus directed by jazz vocalist Ellen Robinson since 1980. Three-part harmony work across jazz, pop, Broadway, R&B, and folk. Regular in-house concerts plus outreach performances at retirement communities and shelters.",
          image: "/images/grow-04.webp",
          action: "SING",
          links: { demo: "https://www.sfcv.org/community-music-center-anything-goes-chorus-i-ii" },
        },
      ],
    },
  ],
};

export function getSectionById(id: string): Section | undefined {
  return siteData.sections.find((s) => s.id === id);
}

export function getProjectById(sectionId: string, projectId: string): Project | undefined {
  const section = getSectionById(sectionId);
  return section?.projects.find((p) => p.id === projectId);
}
