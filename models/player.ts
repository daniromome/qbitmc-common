import { Document } from './document.ts';
import { Profile } from './profile.ts'

export interface Player {
  ign: string
}

export interface PlayerDocument extends Player, Document {
  profile: Profile
}
