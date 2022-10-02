import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'
// crear una instancia de ApiClient que envuelva los clientes reales
const apiLiveClient: ApiClientInterface = {
  items: itemsApiClient
}
// exportar la instancia
export default apiLiveClient
