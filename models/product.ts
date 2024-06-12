import { Models } from "npm:appwrite@15";
import { Metadata } from "./metadata.ts"

export interface Product {
  name: string
  media: string[]
  price: string
  active: boolean
  description: string
  metadata: Metadata[]
}

export type ProductDocument = Product & Models.Document
