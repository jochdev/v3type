import { ItemsStateInterface } from '@/models/store'
/**
* @name initialItemsState
* @description
* La instancia del estado de Items con los valores por defecto
*/
export const initialItemsState: ItemsStateInterface = {
  loading: false,
  items: []
}
