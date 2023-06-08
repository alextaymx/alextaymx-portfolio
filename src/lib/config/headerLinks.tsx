import { FaChartBar, FaDesktop, FaFacebookMessenger, FaFire, FaPencilAlt, FaUser } from "react-icons/fa"
import { HeaderLinks } from "@/lib/types/headerLinks"

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <FaPencilAlt size={14} />,
    href: "/blog",
    text: "Blog",
  },
  {
    icon: <FaFacebookMessenger size={14} />,
    href: "/guestbook",
    text: "Guestbook",
  },
  {
    icon: <FaChartBar size={14} />,
    href: "/dashboard",
    text: "Dashboard",
  },
  {
    icon: <FaFire size={14} />,
    href: "/projects",
    text: "Projects",
  },
  {
    icon: <FaUser size={14} />,
    href: "/about",
    text: "About",
  },
  {
    icon: <FaDesktop size={14} />,
    href: "/uses",
    text: "Uses",
  },
]
