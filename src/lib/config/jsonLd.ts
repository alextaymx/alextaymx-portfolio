export const websiteJsonLd = {
  "@context": "http://schema.org",
  "@type": "WebSite",
  name: "Alex Tay",
  alternateName: "Alex Tay Mao Xiang",
  url: "https://alextay.vercel.app/",
  description:
    "A Front-End Software Engineer with a focus on JavaScript and React. I have more than 3 years of experience in building web applications and websites.",
  image: "https://alextaymx.netlify.app/images/profile.jpg",
}

export const personJsonLd = {
  "@context": "http://schema.org",
  "@type": "Person",
  image: "https://alextaymx.netlify.app/images/profile.jpg",
  name: "Alex Tay",
  alternateName: "Alex Tay Mao Xiang",
  url: "https://alextay.vercel.app/",
  jobTitle: [
    "Full-Stack",
    "Software Engineer",
    "Intermediate Software Engineer",
    "Frontend Engineer",
    "Front-End Developer",
    "Fullstack Engineer",
    "Web Developer",
  ],
  bio: `Hi there! I am Alex! I've been coding for over 4 years now. As a Full Stack developer I've worked both with
  startups and medium corporations to help build & scale their projects. I am eager to be challenged in order
  to grow and further improve my skills.`,
  hasOccupation: {
    "@type": "Occupation",
    name: "Software Engineer",
    occupationLocation: { "@type": "City", name: "Kuala Lumpur" },
    estimatedSalary: [
      {
        "@type": "MonetaryAmountDistribution",
        name: "base",
        currency: "MYR",
        // duration: "P1H",
        // percentile10: "74",
        // percentile25: "80",
        // median: "90",
        // percentile75: "100",
        // percentile90: "106",
      },
    ],

    description: "Develops web applications and websites using TypeScript, React and HTML5.",
    skills:
      "HTML5, CSS, JavaScript, React, Sass, Less, Node.js, Express.js, Vue.js, Next.js, JavaScript Frameworks, Git, Github, NPM, SEO, CMS, WordPress, E-Commerce",
    alternateName: ["Frontend Developer", "Full Stack Developer", "Frontend Engineer"],
    responsibilities: [
      "App Development",
      "Web Design",
      "Website Development",
      "JavaScript Development",
      "WordPress Development",
      "CMS Development",
      "Frontend Development",
      "Full Stack Development",
      "Online Marketing",
      "SEO Services",
      "Web Developer",
      "Website Maintenance",
    ],
  },
  sameAs: [
    "http://linkedin.com/in/alextaymx",
    "http://twitter.com/alextaymx",
    "https://github.com/alextaymx",
    "https://www.facebook.com/alextaymx",
    "https://www.instagram.com/a.lex.jpg",
  ],
  brand: [
    {
      "@type": "Brand",
      name: "Software Engineer",
      alternateName: "Front-End Engineer",
    },
    { "@type": "Brand", name: "AlexTay", alternateName: "Alex Tay Mao Xiang" },
  ],
  //   memberOf: [
  //     {
  //       "@type": "Organization",
  //       url: "https://herper.io/",
  //       name: "Herper Ltd",
  //       alternateName: "Herper Consulting",
  //     },
  //     {
  //       "@type": "Organization",
  //       url: "https://www.hollandandbarrett.com/",
  //       name: "Holland & Barrett",
  //       alternateName: "Holland and Barrett International",
  //     },
  //   ],
  homeLocation: { "@type": "City", name: "Kuala Lumpur" },
  //   owns: {
  //     "@type": "Organization",
  //     url: "https://herper.io/",
  //     name: "Herper Ltd",
  //     alternateName: "Herper Consulting",
  //   },
  //   alumniOf: {
  //     "@type": "Organization",
  //     url: "https://www.thespecialistworks.com/",
  //     name: "The Specialist Works",
  //   },
  nationality: { "@type": "Country", name: "Malaysia" },
  birthDate: "1999-03-09",
  birthPlace: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Melaka",
      postalCode: "75450",
      addressCountry: "Malaysia",
    },
  },
  //   parent: [
  //     { name: "Norbert Herper", jobTitle: "Chef", birthDate: "1967-08-22" },
  //     { name: "Anne-Kristin Herper", birthDate: "1968-02-26" },
  //   ],
}
