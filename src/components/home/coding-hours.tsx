import { ClockIcon } from "lucide-react"
import { useTranslations } from "next-intl"
import { HyperText } from "@/components/magicui/hyper-text"

const CodingHours = () => {
  const t = useTranslations()
  const startedCoding = new Date("2020-01-01")
  const timeUnit = "days"
  const codingDays = Math.floor(
    (Date.now() - startedCoding.getTime()) / (1000 * 60 * 60 * 24),
  )

  const timeUnitLabel = timeUnit === "days" ? t("homepage.about-me.coding-hours-days") : t("homepage.about-me.coding-hours-years")

  const label = `${codingDays} ${timeUnitLabel}`
  return (
    <div className="shadow-feature-card flex flex-col gap-6 rounded-xl p-4 lg:p-6">
      <div className="flex items-center gap-2">
        <ClockIcon className="size-[18px]" />
        <h2 className="text-sm">{t("homepage.about-me.coding-hours")}</h2>
      </div>

      <div className="flex grow items-center justify-center text-3xl font-semibold">
        <HyperText duration={2000} className="text-3xl font-semibold">
          {label}
        </HyperText>
      </div>
    </div>
  )
}

export default CodingHours
