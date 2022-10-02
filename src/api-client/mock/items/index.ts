import {
  ItemsApiClientUrlsInterface,
  ItemsApiClientInterface,
  ItemsApiClientModel
} from "@/models/api-client/items";

const urls: ItemsApiClientUrlsInterface = {
  fetchItems: '/static/data/items.json'
}

// instanciamos ItemsApiClient apuntando a la URL que devuelve datos estáticos
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// exportamos la instancia
export default itemsApiClient
