import { Injectable } from '@angular/core'
import { Http, Headers } from '@angular/http'

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Bearer ' + localStorage.getItem('accessToken'))
  }

  get(url) {
    const headers = new Headers()
    this.createAuthorizationHeader(headers)
    return this.http.get(url, {
      headers: headers,
    })
  }

  post(url, data) {
    const headers = new Headers()
    this.createAuthorizationHeader(headers)
    return this.http.post(url, data, {
      headers: headers,
    })
  }

  put(url, data) {
    const headers = new Headers()
    this.createAuthorizationHeader(headers)
    return this.http.put(url, data, {
      headers: headers,
    })
  }
}
