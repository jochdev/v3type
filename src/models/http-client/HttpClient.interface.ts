import { HttpRequestParamsInterface } from './HttpRequestParams.interface'
/**
* @Name HttpClientInterface
* @description
* Interface para nuestro wrapper HttpClient
*/
export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>
}