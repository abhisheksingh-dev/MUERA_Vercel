"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useTransition } from "react";

const LOCALE_ORDER = ["de", "en", "fr", "it"] as const;

export default function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div className="lang-switcher" role="group" aria-label={t("label")}>
      {LOCALE_ORDER.map((loc) => {
        const label = t(loc);
        const isActive = locale === loc;
        return (
          <button
            key={loc}
            className={`lang-switcher__btn${isActive ? " lang-switcher__btn--active" : ""}${isPending ? " lang-switcher__btn--disabled" : ""}`}
            onClick={() => handleChange(loc)}
            aria-current={isActive ? "true" : undefined}
            lang={loc}
            disabled={isPending}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
