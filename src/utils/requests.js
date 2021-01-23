import request from 'superagent'
import * as Constants from './constants'

export function login(email, password) {
    let formData = new FormData();
    formData.append('email', email)
    formData.append('password', password)

    return request.post(`${Constants.API_BASE_URL}login`)
                  .send(formData)
}