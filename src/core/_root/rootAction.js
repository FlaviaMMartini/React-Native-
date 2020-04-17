import employeesActions  from '../modules/employees/actions'
import appActions from '../modules/app/actions'
import pendenciesActions from '../modules/pendencies/actions'

export default combinedActions = (dispatch) => {
    return {
        app: {...appActions(dispatch)},
        employees: {...employeesActions(dispatch)},
        pendencies: {...pendenciesActions(dispatch)}
    }
};

