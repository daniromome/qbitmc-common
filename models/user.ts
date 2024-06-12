import { ObjectValues } from '../utils/object-values.ts'
import { Models } from 'npm:appwrite@15'
import { Locale } from './locale.ts'

export interface Preferences extends Models.Preferences {
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
  DISABLED: 'disabled'
} as const

export type UserLabel = ObjectValues<typeof USER_LABEL>

export interface User extends Omit<Models.User<Preferences>, 'labels'> {
  labels: UserLabel[]
}
