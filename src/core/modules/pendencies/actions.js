import { actions } from "./reducers";
import client from "./client";
import repository from "./repository";

export default dispatch => ({
    getPendencies: async jwt => {
        const databaseResponse = await repository.all()
        dispatch({
            type: actions.UPDATE_PENDENCIES,
            payload: databaseResponse
        })

        const clientResponse = await client.fetchPendencies(jwt)
        const clientList = clientResponse.map(item => repository.insert(item))
        dispatch({
            type: actions.UPDATE_PENDENCIES,
            payload: clientList
        })
    },
    getPendenciesFromId: async id => {
        const databaseResponse = await repository.empId(id)
        dispatch({
            type: actions.PROFILE_PENDENCIES,
            payload: databaseResponse
        })
    },
    solvePendency: async (jwt, item, wasAccepted, onlyRead) => {
        try {
            await client.solvePendency(jwt, item, wasAccepted, onlyRead)
            await repository.remove(item)

            let message = ''
            switch (item.type) {
                case 'abono':
                    message = wasAccepted ? 'Abono aprovado com sucesso!' : 'Abono reprovado com sucesso!'
                    break;
                case 'addPunch':
                    message = wasAccepted ? 'Inclusão de ponto aprovada com sucesso!' : 'Inclusão de ponto reprovada com sucesso!'
                    break;
            
                default:
                    message = 'Mensagem lida com sucesso!'
                    break;
            }

            dispatch({
                type: actions.SOLVE_PENDENCY_SUCCESS,
                payload: message
            })

            const databaseResponse = await repository.all()
            dispatch({
                type: actions.UPDATE_PENDENCIES,
                payload: databaseResponse
            })

        } catch (err) {    
            dispatch({
                type: actions.SOLVE_PENDENCY_ERROR,
                payload: err.message
            })
            const databaseResponse = await repository.all()
            dispatch({
                type: actions.UPDATE_PENDENCIES,
                payload: databaseResponse
            })
        }
    }
});
