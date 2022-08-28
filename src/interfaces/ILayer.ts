import { TYPES } from "../enums";

export interface ILayer {
  id: number; 
  name: string; 
  type: TYPES;
  color: string;
}