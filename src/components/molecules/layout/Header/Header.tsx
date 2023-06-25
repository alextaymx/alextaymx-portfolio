import HeaderLogo from "@/components/atoms/Icon/HeaderLogo"
import Navbar from "@/components/molecules/Nav/Navbar"
// import CommandMenu from "@/components/command-menu"
// import MobileNav from "@/components/mobile-nav"

const Header = () => {
  return (
    <header className="header">
      <div className="mx-auto flex h-[60px] max-w-4xl items-center justify-between px-8">
        <HeaderLogo />
        <div className="flex items-center gap-2">
          <Navbar />
          {/* <CommandMenu /> */}
          {/* <MobileNav /> */}
        </div>
      </div>
    </header>
  )
}

export default Header
