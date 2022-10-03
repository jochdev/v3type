import {
  ItemsStateInterface
} from '../items/ItemsState.interface'

import { LocalesStateInterface } from '../locales/LocalesState.interface'
/**
* @name RootStoreInterface
* @description
* Envuelve las interfaces de los módulos del store en un solo lugar
*/
export interface RootStoreInterface {
  itemsState: ItemsStateInterface
  localesState: LocalesStateInterface
  // En capítulos siguientes se añadirán aquí interfaces de módulos específicos de dominio adicionales
}
