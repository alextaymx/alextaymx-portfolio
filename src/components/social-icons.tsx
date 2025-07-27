import type { ReactNode } from "react"

export type SocialIconsProps = {
  profiles: Array<{
    url: string
    name: string
    icon: ReactNode
  }>
}

const SocialIcons = (props: SocialIconsProps) => {
  const { profiles } = props

  return (
    <ul className="flex gap-6">
      {profiles.map(({ url, name, icon }) => (
        <li className="text-2xl opacity-70 transition hover:opacity-100" key={name}>
          <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  )
}

export { SocialIcons }
