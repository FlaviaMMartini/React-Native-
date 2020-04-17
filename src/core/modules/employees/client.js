import axios from 'axios'
import endpoints from '../../client/endpoints'
import headers from '../../client/headers';

const fetchEmployees = async (jwt) => {
    return axios({
        method: 'GET',
        url: endpoints.EMPLOYEES_PATH,
        headers: headers(jwt)
    }).then(response => {
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            
            return Promise.reject({
                status: response.status,
                jwt
            })
        }
    })
}

const client = {
    fetchEmployees
}

export default client