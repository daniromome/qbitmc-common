import { Locale } from '../models/mod.ts'

export function getLocale(locale?: string): Locale {
  if (locale === 'es') return 'es'
  return 'en'
}