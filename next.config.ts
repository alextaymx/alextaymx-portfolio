import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"

const ANALYZE = process.env.ANALYZE === "true"

const config: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["cdn.sanity.io"],
  },
  rewrites: async () => [
    { source: "/healthz", destination: "/api/health" },
    { source: "/api/healthz", destination: "/api/health" },
    { source: "/health", destination: "/api/health" },
    { source: "/ping", destination: "/api/health" },
  ],
}

export default ANALYZE ? withBundleAnalyzer({ enabled: ANALYZE })(config) : config
