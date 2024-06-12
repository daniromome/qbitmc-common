import { Models } from 'npm:appwrite@15'
import { Player } from './player.ts'

export interface Profile extends Models.Document {
  customer: string
  players: Player[]
}
