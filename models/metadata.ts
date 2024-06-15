import { Document } from './document.ts'

export interface Metadata {
  key: string
  value: string
}

export type MetadataDocument = Metadata & Document