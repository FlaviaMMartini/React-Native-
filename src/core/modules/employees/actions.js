import repository from './repository'
import client from "./client";
import { actions } from './reducers';

export default dispatch => ({
    getEmployees: async jwt => {
        const dbList = await repository.all()
        dispatch({
            type: actions.UPDATE_EMPLOYEES,
            payload: dbList
        })

        const funcList = await client.fetchEmployees(jwt)
        const clientList = funcList.data.map(personJson => repository.insert(personJson))  
        dispatch({
            type: actions.UPDATE_EMPLOYEES,
            payload: clientList
        })
    },
});
