import { createStore } from 'vuex'
import { ItemInterface } from '@/models/items/Item.interface'
import { ItemsStateInterface } from '@/models/store/ItemsState.interface'
// Nuestro estado inicial:
const state: ItemsStateInterface = {
  loading: false,
  items: []
}

export default createStore({
  state: state,
  getters: {
  },
  mutations: {
    loadingItems(state: ItemsStateInterface) {
      state.loading = true
      state.items = []
    },
    loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
      state.items = items,
        state.loading = false
    },
    selectItem(state: ItemsStateInterface, params: {
      id: number,
      selected: boolean
    }) {
      const { id, selected } = params
      const item = state.items.find(o => o.id === id)
      if (item) {
        item.selected = selected
      }
    }
  },
  actions: {
    loadItems({ commit, state }) {
      commit('loadingItems')

      // Algunos datos falsos

      const mockItems: ItemInterface[] = [
        {
          id: 1,
          name: "Item 1",
          selected: false,
        },
        {
          id: 2,
          name: "Item 2",
          selected: false,
        },
        {
          id: 3,
          name: "Item 3",
          selected: false,
        },
        {
          id: 4,
          name: "Item 4",
          selected: false,
        },
      ]
      // Fingiremos que hemos llamado a un recurso de un API
      // y tarda 1 segundo en devolvernos los datos
      // usando un setTimeout de JavaScript con 1000 milisegundos como opción

      setTimeout(() => {
        commit('loadedItems', mockItems)
      }, 3000)

    },
    selectItem({ commit }, params: {
      id: number,
      selected: boolean
    }) {
      commit('selectItem', params)
    }
  },
  modules: {
  }
})
