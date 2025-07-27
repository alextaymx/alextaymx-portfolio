type LogoProps = {
  width?: number
  height?: number
  className?: string
}

const Logo = (props: LogoProps) => {
  const { width = 28, height = 28, className } = props

  return (
    <div
      className={className}
      style={{ width, height }}
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect x="20" y="20" width="60" height="8" rx="4" />
        <rect x="20" y="46" width="40" height="8" rx="4" />
        <rect x="20" y="72" width="60" height="8" rx="4" />
        <polygon points="75,35 85,50 75,65" />
      </svg>
    </div>
  )
}

export { Logo }
