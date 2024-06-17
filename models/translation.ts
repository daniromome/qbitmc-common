import { Document } from './document.ts'
import { Locale } from './locale.ts'

export interface Translation {
  key: string
  message: string
  locale: Locale
}

export type TranslationDocument = Translation & Document