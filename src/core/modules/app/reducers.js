
export const appInitialState = {
    loading: true, jwt: null
};

export const actionsTypes = {
    REQUEST_LOGIN_SUCCESS: "app/request_login_success",
    REQUEST_LOGOUT_SUCCESS: "app/request_logout_success",
    REQUEST_LOGIN_ERROR: "app/request_login_error",
    REQUEST_LOGOUT_ERROR: "app/request_logout_error",
    REQUEST_LOGIN_PENDING: "app/request_login_pending",
    REQUEST_LOGOUT_PENDING: "app/request_logout_pending"
};


export default  (state, {type,payload}) => {
    switch (type) {
        case actionsTypes.REQUEST_LOGIN_PENDING: {
            return {
                ...state,
                loading: true
            }
        }
        case actionsTypes.REQUEST_LOGOUT_PENDING: {
            return {
                ...state,
                loading: true
            }
        }
        case actionsTypes.REQUEST_LOGIN_SUCCESS: {
            return {
                ...state,
                jwt: payload.jwt == '' ? null : payload.jwt,
                loading: false,
            };
        }
        case actionsTypes.REQUEST_LOGOUT_SUCCESS: {
            return {
                ...state,
                jwt: null,
                error: null,
                loading: false,
            };
        }
        case actionsTypes.REQUEST_LOGIN_ERROR: {
            return {
                ...state,
                error: 'Ocorreu um erro',
                loading: false
            }
        }
        case actionsTypes.REQUEST_LOGOUT_ERROR: {
            return {
                ...state,
                error: 'Ocorreu um erro',
                loading: false
            }
        }
        default:
            return state;
    }
};
