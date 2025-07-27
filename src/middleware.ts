import type { NextRequest } from "next/server"

import { i18nMiddleware } from "@/i18n/middleware"

export const config = {
  /*
   * Match all request paths except for the ones starting with:
   * - api (API routes)
   * - rpc (oRPC routes)
   * - _next/static (static files)
   * - _next/image (image optimization files)
   * - _vercel (Vercel internal)
   * - favicon.ico (favicon file)
   * - folders in public (which resolve to /foldername)
   * - sitemap.xml
   * - robots.txt
   * - rss.xml
   */
  // matcher: [
  //   "/((?!api|rpc|_next/static|_next/image|_vercel|og|favicon|fonts|images|videos|favicon.ico|sitemap.xml|robots.txt|rss.xml).*)",
  // ],
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",

}

const middleware = (request: NextRequest) => {
  const response = i18nMiddleware(request)
  return response
}

export default middleware
