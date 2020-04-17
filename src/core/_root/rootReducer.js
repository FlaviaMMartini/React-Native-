import { combineReducers } from "./_config/combineReducers";

import {default as appReducer, appInitialState} from '../modules/app/reducers'
import {default as employeeReducer, employeeInitialState} from '../modules/employees/reducers'
import {default as pendenciesReducer, pendenciesInitialState} from '../modules/pendencies/reducers'

export default combinedReducers = () => {
    return combineReducers({
        app: [appReducer, appInitialState],
        employees: [employeeReducer, employeeInitialState],
        pendencies: [pendenciesReducer, pendenciesInitialState]
    });
}