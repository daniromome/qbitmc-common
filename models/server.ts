import { Document } from './document.ts';
import { Visibility } from './visibility.ts'

export interface Server {
  name: string
  description: string
  game: string
  media: string[]
  ip: string
  version: string
  visibility: Visibility
}

export type ServerDocument = Server & Document
