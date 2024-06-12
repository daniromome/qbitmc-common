import { Models } from 'npm:appwrite@15'
import { Profile } from './profile.ts'

export interface Player {
  ign: string
}

export interface PlayerDocument extends Player, Models.Document {
  profile: Profile
}
