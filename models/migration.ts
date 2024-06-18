import { Document } from './document.ts'

export interface Migration {
  uuid: string
  ign: string
}

export type MigrationDocument = Migration & Document