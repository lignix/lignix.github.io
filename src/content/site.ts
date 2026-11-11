// Non-translatable data. All visible text lives in /messages/<locale>.json.

export const SITE_URL = "https://charlesbouvier.dev";

export const contact = {
  email: "charlesbouvier832@hotmail.com",
  github: "https://github.com/lignix",
  linkedin: "https://linkedin.com/in/charles-bouvier/",
};

export const cv: Record<string, string | null> = {
  en: "/cv_en.pdf",
  fr: "/cv_fr.pdf",
};

export type ProjectLink = {
  kind: "steam" | "repo" | "demo";
  href: string;
};

export type ProjectImage = {
  src: string; // file in /public, e.g. "/projects/readability-radar.webp"
  width: number;
  height: number;
};

export type ProjectId = "marketplace" | "yatai8" | "readabilityRadar" | "lightsRemnants";

// around 16:10.
export const projects: {
  id: ProjectId;
  stack: string[];
  links: ProjectLink[];
  image: ProjectImage | null;
}[] = [
  {
    id: "yatai8",
    stack: ["Unity", "C#"],
    links: [{ kind: "steam", href: "https://store.steampowered.com/app/5080810/Yatai_8/" }],
    image: { src: "/projects/yatai8.webp", width: 740, height: 416 },
  },
  {
    id: "readabilityRadar",
    stack: ["TypeScript"],
    links: [
      { kind: "demo", href: "https://radar.charlesbouvier.dev/" },
      { kind: "repo", href: "https://github.com/lignix/readability-radar" },
    ],
    image: { src: "/projects/readability-radar.webp", width: 1600, height: 1010 },
  },
  {
    id: "lightsRemnants",
    stack: ["Unity", "C#"],
    links: [{ kind: "repo", href: "https://github.com/lignix/lights-remnants" }],
    image: { src: "/projects/lights-remnants.webp", width: 800, height: 447 },
  },
  {
    id: "marketplace",
    stack: ["Spring Boot", "React", "Microservices"],
    links: [{ kind: "repo", href: "https://github.com/lignix/amazing-site-vente" }],
    image: null,
  },
];

export const experience = {
  dev: ["wolters", "phraser"],
  other: ["sncf", "leroy"],
} as const;

export const skills = {
  frontend: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "HTML/CSS"],
  backend: ["Java", "C#", "Node.js", "PHP", "SQL"],
  methods: ["OOP", "MVC", "Agile (Scrum)"],
  tools: ["Git", "VS Code", "IntelliJ", "Figma", "Notion", "Linear"],
} as const;
