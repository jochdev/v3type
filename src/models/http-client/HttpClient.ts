import { HttpClientInterface } from './HttpClient.interface'
import { HttpClientModel } from './HttpClient.model'
// exportar la instancia de HttpClientModel
export const HttpClient: HttpClientInterface = new HttpClientModel()
