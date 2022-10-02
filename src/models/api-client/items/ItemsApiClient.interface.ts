import { ItemInterface } from '@/models/items/Item.interface'
/**
* @Name ItemsApiClientInterface
* @description
* Interface para el módulo de cliente de API de Items
*/
export interface ItemsApiClientInterface {
  fetchItems: () => Promise<ItemInterface[]>
}