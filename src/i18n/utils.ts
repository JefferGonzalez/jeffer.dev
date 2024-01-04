import { common, defaultLang } from '@i18n/ui'

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/')
  if (lang in common) return lang as keyof typeof common
  return defaultLang
}

export function useTranslatedPath(lang: keyof typeof common) {
  return function translatePath(path: string, l: string = lang) {
    return `/${l}${path}`
  }
}

export function useTranslations(lang: keyof typeof common) {
  return function t(key: keyof (typeof common)[typeof defaultLang]) {
    return common[lang][key] || common[defaultLang][key]
  }
}
