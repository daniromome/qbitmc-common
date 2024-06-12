import { Models } from 'npm:appwrite@15';
import { Visibility } from './visibility.ts'

export interface Server {
  name: string
  description: string
  game: string
  media: string[]
  ip: string
  loader: string
  version: string
  visibility: Visibility
}

export type ServerDocument = Server & Models.Document
