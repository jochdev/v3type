import { rootStore, dispatchModuleAction } from '../root'
import { MutationType, StoreModuleNames, LocalesStateInterface } from '@/models/store'


// El envoltorio de localizaciones que devuelve localesState y expone un método genérico action<T>
const localesStore = {
  get state(): LocalesStateInterface {
    return rootStore.state.localesState
  },
  action<T>(actionName: string, params?: T): void {
    dispatchModuleAction(StoreModuleNames.localesState, actionName, params)
  }
}
// exportar nuestro envoltorio usando la convención del API de composición (p.ej. useXYZ)
export const useLocalesStore = () => {
  return localesStore
}
