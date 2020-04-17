export const pendenciesInitialState = {
    list: [],
    profileList: [],
    error: null,
    message: null
};

export const actions = {
    UPDATE_PENDENCIES: "pendencies/update_pendencies",
    SOLVE_PENDENCY_ERROR: "pendencies/solve_pendency_error",
    SOLVE_PENDENCY_SUCCESS: "pendencies/solve_pendency_success",
    PROFILE_PENDENCIES: "pendencies/profile_pendencies",
};

export default  (state, {type, payload}) => {
    switch (type) {
        case actions.UPDATE_PENDENCIES: {
            const list = payload
            return {
                ...state,
                error: null,
                message: null,
                list,
            }
        }
        case actions.PROFILE_PENDENCIES: {
            const profileList = payload
            return {
                ...state,
                error: null,
                message: null,
                profileList,
            }
        }
        case actions.SOLVE_PENDENCY_ERROR: {
            const message = payload
            return {
                ...state,
                error: true,
                message
            }
        }
        case actions.SOLVE_PENDENCY_SUCCESS: {
            const message = payload
            
            return {
                ...state,
                error: false,
                message
            }
        }
        default:
            return state;
    }
};
