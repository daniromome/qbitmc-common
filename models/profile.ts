import { Document } from './document.ts';
import { PlayerDocument } from './player.ts'

export interface Profile extends Document {
  discord: string
  customer: string
  qbits: number
  players: PlayerDocument[]
}
