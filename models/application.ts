import { Models } from 'npm:appwrite@15'
import { Profile } from './profile.ts'

export interface EnrollmentApplicationStatus {
  status: boolean
  application: string
  channel: string
}

export type EnrollmentApplicationStatusDocument = EnrollmentApplicationStatus & Models.Document

export interface EnrollmentApplication {
  age: number
  reasons: string
  experience: string
  rules: boolean
  media: string[]
  profile: string
}

export interface EnrollmentApplicationDocument extends Omit<EnrollmentApplication, 'profile'>, Models.Document {
  status: EnrollmentApplicationStatusDocument
  profile: Profile
}
