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



export function getProfile() {
    return request.get(`${Constants.PROFILE_API_URL}profile/get-by-email`)
        .set('Authorization', localStorage.getItem('authToken'));
}

export function updateProfile(profileData) {
    return request.put(`${Constants.PROFILE_API_URL}profile/update`)
        .set('Authorization', localStorage.getItem('authToken'))
        .send(profileData);
}



export function getAllPraxisObjects() {
    return request.get(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/get-all`)
        .set('Authorization', localStorage.getItem('authToken'));
}

export function getAllPraxis() {
    return request.get(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/get-by-email`)
        .set('Authorization', localStorage.getItem('authToken'));
}

export function createPraxis() {
    return request.post(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/create`)
        .set('Authorization', localStorage.getItem('authToken'));
}

export function updatePraxis(praxisData) {
    return request.put(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/update`)
        .set('Authorization', localStorage.getItem('authToken'))
        .send(praxisData);
}

export function deletePraxis(profileData) {
    return request.put(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/delete`)
        .set('Authorization', localStorage.getItem('authToken'))
        .send(profileData);
}

export function getEditablePraxisForm(praxisId) {
    return request.post(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/get-form-by-email`)
        .set('Authorization', localStorage.getItem('authToken'))
        .send({ praxis_id: praxisId});
}

export function updatePraxisStatus(praxisId, status, message) {
    let praxisData = {
        id: praxisId,
        accepted: status,
        status_message: message
    }

    return request.put(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/update-status`)
        .set('Authorization', localStorage.getItem('authToken'))
        .send(praxisData);
}

export function sendEmail(professorEmail, mentorEmail, praxisId, shouldSendEmail) {
    let praxisData = {
        professor_email: professorEmail,
        mentor_email: mentorEmail,
        id: praxisId,
        should_send_email: shouldSendEmail
    }

    return request.put(`${Constants.PRAXIS_DOCUMENTS_API_URL}praxis/update-prof-mentor`)
        .set('Authorization', localStorage.getItem('authToken'))
        .send(praxisData);

}
