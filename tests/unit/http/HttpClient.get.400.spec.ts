import { expect } from 'chai'
import sinon from 'sinon'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client'
import { MockedPromiseFactory } from './MockedPromiseFactory'
const mockParams: HttpRequestParamsInterface = {
  url: 'path/to/a/get/api/endpoint',
  requiresToken: false
}
describe('HttpClient.get', () => {
  before(() => {
    const mockedRequestConfig = {
      headers: {
      }
    } as AxiosRequestConfig
    const mockedPromise = MockedPromiseFactory({
      url: mockParams.url,
      statusCode: 400,
      statusText: 'Error',
      requestConfig: mockedRequestConfig,
      data: 'get completed with errors',
      reject: true
    })
    // ya que HttpClient usa axios internamente, usamos un stub de axios aquí
    sinon.stub(axios, 'get')
      .withArgs(mockParams.url, mockedRequestConfig)
      .returns(mockedPromise)
  })
  after(() => {
    sinon.restore()
  })


  it('should reject and return 400', (done) => {
    HttpClient.get<string>(mockParams)
      .then(() => {
        // no deberíamos llegar aquí
      })
      .catch((response: AxiosResponse) => {
        expect(response.status).to.equal(400)
        done()
      })
  })
})