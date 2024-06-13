import { ObjectValues } from '../utils/object-values.ts'

export const VISIBILITY = {
  PUBLIC: 'public',
  UNLISTED: 'hidden',
  PRIVATE: 'private',
  RESTRICTED: 'restricted',
  DRAFT: 'draft'
} as const

export type Visibility = ObjectValues<typeof VISIBILITY>
