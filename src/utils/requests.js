import request from 'superagent'
import * as Constants from './constants'

export function login(email, password) {
    let body = {
        email: email,
        password: password
    }

    return request.post(`${Constants.USER_MANAGEMENT_API_URL}login`)
        .send(body);
}

export function register(name, email, password, type) {
    let body = {
        email: email,
        password: password,
        name: name,
        type: type
    }

    return request.post(`${Constants.USER_MANAGEMENT_API_URL}register`)
        .send(body);
}

export function getProfile(email) {
    return request.post(`${Constants.PROFILE_API_URL}profile/get-by-email`)
        .send({ email: email });
}

export function updateProfile(profileData) {
    return request.put(`${Constants.PROFILE_API_URL}profile/update`)
        .send(profileData);
}