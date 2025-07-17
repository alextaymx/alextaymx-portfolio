import Link from "next/link"
import "@/styles/not-found.css"

export const metadata = {
  title: "404",
}

const NotFound = () => {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>Oops!</h1>
        </div>
        <h2>404 - Page not found</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
        <Link href="/">Go To Homepage</Link>
      </div>
    </div>
  )
  return (
    <div className="mt-52 mb-40 flex flex-col items-center justify-center gap-12">
      <h1 className="text-center text-6xl font-bold">Oops! Not Found</h1>
      <Link
        href="/"
        className="border-accent hover:bg-accent rounded-lg border px-3 py-2 transition-colors duration-150 hover:text-white"
      >
        Go homepage
      </Link>
    </div>
  )
}

export default NotFound
