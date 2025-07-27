export const isProduction = process.env.NODE_ENV === "production"
export const isServer = typeof window === "undefined"
export const hasAnalytics = process.env.NEXT_PUBLIC_FLAG_ANALYTICS === "true"

export const hasSpotify = process.env.NEXT_PUBLIC_FLAG_SPOTIFY === "true"

export const SITE_URL = isProduction ? "https://alextaymx.vercel.app" : "http://localhost:3000"

export const GITHUB_USERNAME = "alextaymx"

export const SITE_NAME = "Alex Tay"
export const SITE_KEYWORDS = [
  "Software Engineer",
  "Alex Tay",
  "Alex Tay Mao Xiang",
  "AlexTayMX",
  "Front-End",
  "Full-Stack",
  "React",
  "TypeScript",
  "JavaScript",
  "GraphQL",
  "CSS",
  "Tailwind",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "MySQL",
  "Firebase",
  "AWS",
  "GCP",
  "Google Cloud Platform",
  "Docker",
  "Kubernetes",
]

export const SITE_GITHUB_URL = "https://github.com/alextaymx"
export const SITE_FACEBOOK_URL = "https://www.facebook.com/alextaymx"
export const SITE_INSTAGRAM_URL = "https://www.instagram.com/a.lex.jpg"
export const SITE_X_URL = "https://x.com/alextaymx"
export const SITE_YOUTUBE_URL = "https://www.youtube.com/"

export const COMMENT_TYPES = ["comment", "reply"] as const
export const USER_ROLES = ["user", "admin"] as const

export const FOOTER_LINKS = [
  {
    id: 1,
    links: [
      { href: "/", key: "home" },
      { href: "/blog", key: "blog" },
      { href: "/about", key: "about" },
      { href: "/dashboard", key: "dashboard" },
    ],
  },
  {
    id: 2,
    links: [
      { href: "/guestbook", key: "guestbook" },
      { href: "/uses", key: "uses" },
      { href: "/projects", key: "projects" },
      { href: "https://links.alextaymx.vercep.app", key: "links" },
    ],
  },
  {
    id: 3,
    links: [
      { href: SITE_FACEBOOK_URL, key: "facebook" },
      { href: SITE_INSTAGRAM_URL, key: "instagram" },
      { href: SITE_GITHUB_URL, key: "github" },
      { href: SITE_YOUTUBE_URL, key: "youtube" },
    ],
  },
] as const
