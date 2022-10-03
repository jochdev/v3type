import { Module, MutationTree, ActionTree, GetterTree } from 'vuex'
import {
  MutationType,
  RootStateInterface,
  LocalesStateInterface
} from '@/models/store'
import {
  initialLocalesState
} from './initialState'
import { i18n } from '@/plugins/vue-i18n-next-plugin'
// Mutaciones de Vuex para localizaciones




export const mutations: MutationTree<LocalesStateInterface> = {
  selectLocale(state: LocalesStateInterface, localeId: string) {
    // cambiar a true solo el atributo selected del modelo seleccionado
    state.availableLocales.forEach(localeInfo => {
      localeInfo.selected = localeInfo.locale === localeId
      if (localeInfo.selected) {
        // cambiar la localización seleccionada en i18n
        i18n.global.locale = localeInfo.locale
      }
    })
  }
}
// Acciones de Vuex para localizaciones
export const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
  selectLocale({ commit }, localeId: string) {
    commit(MutationType.locales.selectLocale, localeId)
  }
}
export const getters: GetterTree<LocalesStateInterface, RootStateInterface> = {}


const namespaced: boolean = true
const state: LocalesStateInterface = initialLocalesState
export const localesState: Module<LocalesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
}
