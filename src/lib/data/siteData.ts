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
      description: "Marketing — content, SEO, email, and growth.",
      theme: {
        header: "#00e676",
        title: "#76ff03",
      },
      projects: [],
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
      projects: [],
    },
    {
      id: "events",
      title: "Events",
      path: "/events",
      description: "Talks, gatherings, and live moments.",
      theme: {
        header: "#ffab00",
        title: "#ffea00",
      },
      projects: [],
    },
    {
      id: "music",
      title: "Music",
      path: "/music",
      description: "Sonic experiments and synthesizers.",
      theme: {
        header: "#d500f9",
        title: "#ff4081",
      },
      projects: [],
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
