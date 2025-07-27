"use client"

import { LanguagesIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { routing } from "@/i18n/routing"

const LocaleSwitcher = () => {
  const t = useTranslations()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='size-9 p-0' aria-label={t("layout.change-language")}>
          <LanguagesIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        {routing.locales.map((locale) => (
          <Item key={locale} locale={locale} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type ItemProps = {
  locale: string
}

const Item = (props: ItemProps) => {
  const { locale } = props
  const [isPending, startTransition] = useTransition()

  const switchLanguage = () => {
    startTransition(() => {
      // For now, we'll just navigate to the same path with the new locale
      // You might need to implement proper locale switching based on your setup
      window.location.href = `/${locale}`
    })
  }

  return (
    <DropdownMenuItem key={locale} disabled={isPending} onClick={switchLanguage}>
      {locale === "en" ? "English" : locale === "zh-CN" ? "简体中文" : "繁體中文"}
    </DropdownMenuItem>
  )
}

export default LocaleSwitcher
