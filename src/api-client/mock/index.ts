import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'
// creamos una instancia de l cliente ApiClient principal que envuelve todos los 
// clientes simulados
const apiMockClient: ApiClientInterface = {
  items: itemsApiClient
}
// exportamos la instancia
export default apiMockClient