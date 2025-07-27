import { ClockIcon } from "lucide-react"
import { useTranslations } from "next-intl"

const CodingHours = () => {
  const t = useTranslations()

  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm">{t("homepage.about-me.coding-hours")}</h2>
      </div>
      <div className="flex grow items-center justify-center text-4xl font-semibold">
        4524 hrs
      </div>
    </div>
  )
}

export default CodingHours
