import axios from 'axios'
import endpoints from '../../client/endpoints'
import headers from '../../client/headers';

const fetchPendencies = async (jwt) => {
    return axios.post(endpoints.PENDENCIES_PATH, {}, { headers: headers(jwt) })
        .then(function (response) {
            if (response.status >= 200 && response.status < 300) {
                return response.data['justifications'];
            } else {
                return Promise.reject({
                    status: response.status,
                    jwt
                })
            }
        })
}

const solvePendency = async (jwt, pendency, wasAccepted, onlyRead) => {
    const text = onlyRead ? 'Lido pelo Ahgora Leader' : wasAccepted ? 'Aprovado pelo Ahgora Leader' : 'Recusado pelo Ahgora Leader'
    const params = {
        'comentario-texto': text,
        'comentario-approve': wasAccepted.toString(),
        'comentario-data': pendency.date,
        'comentario-matricula': pendency.employeeId,
        'comentario-id': pendency.id
    }

    return axios.post(
        endpoints.CONFIRMS_PENDENCY_PATH,
        JSON.stringify(params),
        { headers: headers(jwt) })
        .then(function (response) {
            if (response.status >= 200 && response.status < 300 && !response.data.error) {
                return response.data;
            } else {
                let message = response.data.msg ? response.data.msg : 'Algo deu errado, tente novamente mais tarde.'
                throw new Error(message)
            }
        }).catch(function (error) {    
            throw new Error(error.message)   
        })
}

const client = {
    fetchPendencies,
    solvePendency
}

export default client