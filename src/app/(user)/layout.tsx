import "@styles/globals.css"

import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { personJsonLd, websiteJsonLd } from "@/lib/config/jsonLd"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.svg" />
      </head>
      <body className={`bg-white dark:bg-slate-950`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  title: "Alex Tay's Personal Website",
  description:
    "A Front-End Software Engineer with a focus on JavaScript and React. I have more than 3 years of experience in building web applications and websites.",

  icons: "/favicon.ico",
  keywords: [
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
    // "Node.js",
    // "Express",
    // "MongoDB",
    // "PostgreSQL",
    // "MySQL",
    // "Firebase",
    // "AWS",
    // "GCP",
    // "Google Cloud Platform",
    // "Docker",
    // "Kubernetes",
  ],
}
