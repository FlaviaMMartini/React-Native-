export const employeeInitialState = {
    list: [],
    searchList: [],
};

export const actions = {
    UPDATE_EMPLOYEES: "employees/update_employees"
};

export default  (state, {type, payload}) => {
    switch (type) {
        case actions.UPDATE_EMPLOYEES: {
            const list = payload
            return {
                ...state,
                list,
            }
        }
        default:
            return state;
    }
};
