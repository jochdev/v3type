// agrupa nuestras constantes en un namespace
import { ItemsMutationType } from '../items/ItemsMutationType'
import { LocalesMutationType } from '../locales/LocalesMutationType'


export namespace MutationType {
  export const items = ItemsMutationType
  export const locales = LocalesMutationType
  // A medida que añadas nuevos módulos de estado, añade exportaciones adicionales aquí siguiendo la misma convención
}