import { rootStore, dispatchModuleAction } from '../root'
import { StoreModuleNames, ItemsStateInterface } from '@/models/store'
/**
* @name itemsStore
* @description
* Wrapper del store de Items que devuelve itemsSTate y expone una acción action<T> genérica
*/
const itemsStore = {
  get state(): ItemsStateInterface {
    return rootStore.state.itemsState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.itemsState, actionName, params)
  }
}
// exportamos el wrapper usando la convención del API de composición (useXYZ)
export const useItemsStore = () => {
  return itemsStore
}
