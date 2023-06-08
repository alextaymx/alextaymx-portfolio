import "@/styles/tailwind.css"

import { Analytics } from "@vercel/analytics/react"
import { Metadata } from "next"
import localFont from "next/font/local"

import type { PropsWithChildren } from "react"
import { BackgroundBlob } from "@/components/layout/Background"
import { Footer } from "@/components/layout/Footer/Footer"
import Header from "@/components/layout/Header/Header"
import { SkipToContent } from "@/components/ScreenReader/SkipToContent"
import { personJsonLd, websiteJsonLd } from "@/lib/config/jsonLd"

const agustina = localFont({
  src: "../../public/assets/fonts/Agustina.woff",
  // src: [{ path: "../../public/assets/fonts/Agustina.woff" }],
  variable: "--font-agustina", // https://stackoverflow.com/questions/74607996/how-to-add-custom-local-fonts-to-a-nextjs-13-tailwind-project
})

const montserratRegular = localFont({
  src: "../../public/assets/fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat-regular",
})

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${agustina.variable} ${montserratRegular.variable}`}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon.svg" />
      </head>
      <body className={`bg-white dark:bg-slate-950`}>
        {/* content */}

        <div className="pointer-events-none absolute my-auto w-full max-w-[1920px] overflow-hidden md:top-[-90%]">
          <BackgroundBlob />
        </div>
        <SkipToContent />

        <Header />
        <main id="content" className="relative mx-auto mb-16 max-w-4xl px-8 py-24">
          {children}
        </main>
        <Footer />

        {/* extras */}
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
