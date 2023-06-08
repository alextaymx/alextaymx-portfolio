import { Metadata } from "next"
import GreetingHero from "@/components/Hero/GreetingHero"

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

const HomePage = () => {
  return (
    <>
      <GreetingHero />
    </>
  )
}

export default HomePage
