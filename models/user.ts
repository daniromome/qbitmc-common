import { ObjectValues } from '../utils/object-values.ts'
import { Locale } from './locale.ts'

export interface Preferences {
  nickname?: string
  locale?: Locale
  player?: string
}

export const USER_LABEL = {
  QBITOR: 'qbitor',
  MOD: 'mod',
  SUPPORTER: 'supporter',
  ADMIN: 'admin',
  GUEST: 'guest',
  DISABLED: 'disabled',
  APPLICANT: 'applicant'
} as const

export type UserLabel = ObjectValues<typeof USER_LABEL>
