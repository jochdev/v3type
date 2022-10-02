import { ItemInterface } from "@/models/items/Item.interface";
/**
* @name ItemsStateInterface
* @description
* Interface para el estado de Items
*/


export interface ItemsStateInterface {
  loading: boolean,
  items: ItemInterface[]
}