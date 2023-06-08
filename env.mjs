import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  server: {
    ANALYZE: z
      .enum(["true", "false"])
      .optional()
      .transform((value) => value === "true"),
    OPENAI_API_KEY: z.string().optional(),
  },
  client: {
    NEXT_PUBLIC_DEPLOY_TO_VERCEL_SHORTCUT: z.string().optional(),
  },
  runtimeEnv: {
    ANALYZE: process.env.ANALYZE,
    NEXT_PUBLIC_DEPLOY_TO_VERCEL_SHORTCUT: process.env.NEXT_PUBLIC_DEPLOY_TO_VERCEL_SHORTCUT,
  },
})
