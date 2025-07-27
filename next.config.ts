import withBundleAnalyzer from "@next/bundle-analyzer"
import { type NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const ANALYZE = process.env.ANALYZE === "true"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  reactStrictMode: true,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: [],
  },
}

const withLocaleConfig = withNextIntl(nextConfig)

const withBundleAnalyzerConfig = withBundleAnalyzer({ enabled: ANALYZE })(withLocaleConfig)

export default withBundleAnalyzerConfig
