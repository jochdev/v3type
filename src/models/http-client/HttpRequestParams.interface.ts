/**
* @name HttpRequestParamsInterface
* @description
* Parámetros de petición para operaciones get/post/put de HttpClient
*/
export interface HttpRequestParamsInterface {
  url: string
  requiresToken: boolean
  payload?: any
}