import { ItemsApiClientInterface } from './items'
/**
* @Name ApiClientInterface
* @description
* Interface que envuelve todos los módulos del cliente de API en un solo lugar para\
mantener el código organizado
*/
export interface ApiClientInterface {
  items: ItemsApiClientInterface
}