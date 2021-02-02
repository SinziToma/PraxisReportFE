import request from 'superagent'
import * as Constants from './constants'

// TO DO add TOKEN to requests
let email = 'tboth@yahoo.com'

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



export function getProfile() {
    return request.post(`${Constants.PROFILE_API_URL}profile/get-by-email`)
        .send({ email: email });
}

export function updateProfile(profileData) {
    return request.put(`${Constants.PROFILE_API_URL}profile/update`)
        .send(profileData);
}



// export function getAllPraxis() {
//     return request.get(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/get-all`)
//         .send();
// }

export function getAllPraxis() {
    return request.post(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/get-by-email`)
        .send({ email: email });
}

export function createPraxis() {
    return request.post(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/create`)
        .send({ email: email });
}

export function updatePraxis(praxisData) {
    return request.put(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/update`)
        .send(praxisData);
}

export function deletePraxis(profileData) {
    return request.put(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/delete`)
        .send(profileData);
}
