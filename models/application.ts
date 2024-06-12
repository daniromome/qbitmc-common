import { Document } from './document.ts'
import { Profile } from './profile.ts'

export interface EnrollmentApplicationStatus {
  approved: boolean
  application: string
  channel: string
}

export type EnrollmentApplicationStatusDocument = EnrollmentApplicationStatus & Document

export interface EnrollmentApplication {
  age: number
  reasons: string
  experience: string
  rules: boolean
  media: string[]
  profile: string
}

export interface EnrollmentApplicationDocument extends Omit<EnrollmentApplication, 'profile'>, Document {
  status: EnrollmentApplicationStatusDocument
  profile: Profile
}
