import { Metadata } from "next"

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

const HomePage = async () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto grid max-w-screen-xl px-4 py-8 text-center lg:py-16">
        <div className="mx-auto place-self-center">
          <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
            Next.js Portfolio
          </h1>
          <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
            Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate! Experience
            rapid UI development, AI-powered code reviews, and an extensive suite of tools for a smooth and enjoyable
            development process.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomePage
