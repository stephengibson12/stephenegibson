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
      projects: [],
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
