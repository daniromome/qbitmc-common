import { Document } from './document.ts'
import { PlayerDocument } from './player.ts'
import { ServerDocument } from './server.ts'

export interface Statistic {
  value: number
  name: string
  type: string
  player: string
  server: string
}

export interface StatisticDocument extends Omit<Statistic, 'player' | 'server'>, Document {
  player: PlayerDocument
  server: ServerDocument
}

export interface StatisticHistory {
  stat: string
  value: number
}

export interface StatisticHistoryDocument extends Omit<StatisticHistory, 'stat'>, Document {
  stat: StatisticDocument
}