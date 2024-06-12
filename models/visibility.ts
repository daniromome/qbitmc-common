import { ObjectValues } from '../utils/object-values.ts'

export const VISIBILITY = {
  PUBLIC: 'public',
  UNLISTED: 'hidden',
  PRIVATE: 'private',
  RESTRICTED: 'restricted'
} as const

export type Visibility = ObjectValues<typeof VISIBILITY>
