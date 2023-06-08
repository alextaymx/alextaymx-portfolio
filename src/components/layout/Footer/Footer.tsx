import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { SocialIcons } from "@/components/Icon/SocialIcons"
import { personJsonLd } from "@/lib/config/jsonLd"

const Footer = () => {
  return (
    <footer className="relative mx-auto mt-8 max-w-4xl px-8 py-6 md:mt-20">
      <div className="flex justify-between">
        <span>
          &copy; {new Date().getFullYear()} {personJsonLd.name}
        </span>
        <SocialIcons
          profiles={[
            {
              name: "Github",
              url: "https://www.github.com/alextaymx",
              icon: <FaGithub />,
            },
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/alextaymx",
              icon: <FaLinkedin />,
            },
            {
              name: "Facebook",
              url: "https://facebook.com/alextaymx",
              icon: <FaFacebook />,
            },
            {
              name: "Instagram",
              url: "https://www.instagram.com/a.lex.jpg",
              icon: <FaInstagram />,
            },
          ]}
        />
      </div>
    </footer>
  )
}

export { Footer }
