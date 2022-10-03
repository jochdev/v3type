import axios, {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
import { HttpClientInterface } from './HttpClient.interface'


/**
* @name HttpClientModel
* @description
* Envuelve la funcionalidad de cliente HTTP para eivitar usar un paquete de tercero\
s como Axios directamente
* y así simplificar su sustitución en el futuro si dicho paquete deja de ser manten\
ido o por cualquer otro motivo
*/


export class HttpClientModel implements HttpClientInterface {
  private getToken(): string {
    const TOKEN_KEY = process.env && process.env.VUE_APP_TOKEN_KEY ? process.env.VUE_APP_TOKEN_KEY : 'myapp-token'
    const token = localStorage.getItem(TOKEN_KEY) || ''
    return token
  }

  constructor() {
    // OPCIONAL por ahora: Añadir un interceptor de peticiones para manejar desde un 
    // único lugar errores u otras cosas para cada petición
  }


  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters

      // opciones de axios
      const options: AxiosRequestConfig = {
        headers: {}
      }


      // if (requiresToken) {
      //   const token = this.getToken()
      //   options.headers.RequestVerificationToken = token
      // }

      axios.get(url, options).then((response: AxiosResponse) => {
        resolve(response.data as T)

      }).catch((respnse: AxiosResponse) => {
        console.info('------ rejecting ----')
        reject(respnse)
      })
    })
  }

  post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters

      // opciones de axios
      const options: AxiosRequestConfig = {
        headers: {}
      }


      // if (requiresToken) {
      //   const token = this.getToken()
      //   options.headers.RequestVerificationToken = token
      // }

      axios.post(url, payload, options).then((response: AxiosResponse) => {
        resolve(response.data as T)
      }).catch((response: AxiosResponse) => {
        reject(response)
      })
    })
  }
}