"use client"

import Link from "@/components/link"
import { buttonVariants } from "@/components/ui/button"
import { useTranslations } from "@/i18n/client"

const GoToHomepage = () => {
  const t = useTranslations()

  return (
    <Link href='/' className={buttonVariants()}>
      {t("component.go-to-homepage")}
    </Link>
  )
}

export default GoToHomepage
