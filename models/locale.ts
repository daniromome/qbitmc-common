import { ObjectValues } from '../mod.ts'

export const LOCALE = {
  EN: 'en',
  ES: 'es'
} as const

export type Locale = ObjectValues<typeof LOCALE>
