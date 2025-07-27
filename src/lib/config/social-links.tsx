import {
  type IconType,
  SiGithub,
  SiInstagram,
  SiX,
  SiYoutube,
} from "@icons-pack/react-simple-icons"

type SocialLinks = Array<{
  href: string
  title: string
  icon: IconType
}>

export const SOCIAL_LINKS: SocialLinks = [
  {
    href: "https://github.com/alextaymx",
    title: "GitHub",
    icon: SiGithub,
  },

  {
    href: "https://x.com/alextaymx",
    title: "X",
    icon: SiX,
  },
  {
    href: "https://instagram.com/alextaymx",
    title: "Instagram",
    icon: SiInstagram,
  },
  {
    href: "https://youtube.com/@alextaymx",
    title: "YouTube",
    icon: SiYoutube,
  },
]
