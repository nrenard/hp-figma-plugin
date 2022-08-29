import { TYPES } from '../enums'

export interface ILayer {
  id: number
  name: string
  text: string
  type: TYPES
  color: string
}
