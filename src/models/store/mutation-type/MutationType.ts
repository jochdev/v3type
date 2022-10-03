// agrupa nuestras constantes en un namespace
import { ItemsMutationType } from '../items/ItemsMutationType'

export namespace MutationType {
  export const items = ItemsMutationType
  // A medida que añadas nuevos módulos de estado, añade exportaciones adicionales aquí siguiendo la misma convención
}