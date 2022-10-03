import { createStore, StoreOptions } from 'vuex'

import {
  RootStateInterface,
  RootStoreModel,
  LocalesStateInterface
} from '@/models/store'

// Importar cada módulo de Vuex
import { itemsState } from '@/store/items/module'
import { localesState } from '@/store/locales/module'

import { initialRootState } from './initialState'

// Opciones de Vuex para crear nuestro store modularizado
const storeOptions: StoreOptions<RootStateInterface> = {
  state: initialRootState,
  modules: {
    itemsState,
    localesState
    // A medida que crees módulos adicionales, los añadirás aquí, de modo similar a itemsState
  }
}
// Instancia raíz del store de Vuex
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions)

// inicio: añadir código
// "Helper" privado que llama a una acción de un módulo de Vuex desde un solo lugar para que podamos mantener la interpolación de cadenas para
// `${moduleName}/${actionName}` en un único sitio y así seamos capaz de llamar a la acción con menos código y con un tipado fuerte
export function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
  rootStore.dispatch(`${moduleName}/${actionName}`, params)
}
// fin: añadir código