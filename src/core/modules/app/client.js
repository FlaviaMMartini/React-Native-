
import axios from 'axios'
import Base64 from '../../client/helpers'
import endpoints from '../../client/endpoints'

const authenticate = async (email, password) => {
    if (!email || !password) {
        return Promise.reject(new Error('Opa! Confira os campos...'));
    }

    let credentials = 'Basic ' + Base64.btoa(`${email}:${password}`);

    return axios.post(endpoints.SESSION_PATH, {}, {
        headers: {
            'Authorization': credentials,
        }
    });
}

const client = {
    authenticate
}

export default client