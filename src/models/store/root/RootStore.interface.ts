import {
  ItemsStateInterface
} from '../items/ItemsState.interface'
/**
* @name RootStoreInterface
* @description
* Envuelve las interfaces de los módulos del store en un solo lugar
*/
export interface RootStoreInterface {
  itemsState: ItemsStateInterface
  // En capítulos siguientes se añadirán aquí interfaces de módulos específicos de dominio adicionales
}
