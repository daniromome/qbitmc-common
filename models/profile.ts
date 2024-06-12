import { Document } from './document.ts';
import { Player } from './player.ts'

export interface Profile extends Document {
  customer: string
  players: Player[]
}
