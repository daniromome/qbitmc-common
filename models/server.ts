import { Document } from './document.ts'
import { MetadataDocument } from './metadata.ts'
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

export interface ServerDocument extends Server, Document {
  metadata: MetadataDocument[]
}
