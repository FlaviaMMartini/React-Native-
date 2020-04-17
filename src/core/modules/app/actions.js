import { actionsTypes } from "./reducers";
import client from "./client";
import AsyncStorage from "@react-native-community/async-storage";

export default dispatch => ({
    requestLogin: async credentials => {

        dispatch({
            type: actionsTypes.REQUEST_LOGIN_PENDING
        })

        let { email, password } = credentials
        try {
            let { data: payload } = await client.authenticate(email, password);
            console.log(payload)
            if (!payload) {
                dispatch({
                    type: actionsTypes.REQUEST_LOGIN_ERROR
                })
                return;
            }

            try {
                await AsyncStorage.setItem('jwt', payload.jwt)
                console.log(payload.jwt)
            } catch (err) {
                console.log("Unable to save in AsyncStorage")
            }

            dispatch({
                type: actionsTypes.REQUEST_LOGIN_SUCCESS,
                payload
            })
        } catch (err) {
            console.log(err)
            dispatch({
                type: actionsTypes.REQUEST_LOGIN_ERROR
            })
        }
    },
    resumeSession: async _ => {
        dispatch({
            type: actionsTypes.REQUEST_LOGIN_PENDING
        })
        try {
            const jwt = await AsyncStorage.getItem('jwt');
            dispatch({
                type: actionsTypes.REQUEST_LOGIN_SUCCESS,
                payload: { jwt: jwt }
            })

        } catch (e) {
            dispatch({
                type: actionsTypes.REQUEST_LOGIN_ERROR
            })
        }
    },
    logout: async _ => {
        dispatch({
            type: actionsTypes.REQUEST_LOGOUT_PENDING
        })
        try {
            const jwt = await AsyncStorage.setItem('jwt', "");
            dispatch({
                type: actionsTypes.REQUEST_LOGOUT_SUCCESS
            })

        } catch (e) {
            dispatch({
                type: actionsTypes.REQUEST_LOGOUT_ERROR
            })
        }
    }
});

