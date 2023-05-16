import axios from "axios"
import { REFRESH } from "../urls"
import { USER_ACTION, useUserDispatch } from "../UserContext"




export function AxiosGetAndRefresh(url) {

    
    const dispatch = useUserDispatch()
    

    return function sendRequest(url) {
        const token = localStorage.getItem('access')
        if (token){
            axios.get(url, {headers: {Authorization: `Bearer ${token}`}})
                .then((responseData) => {
                    if (responseData.status === 200){
                        console.log(`ME request`)
                        console.log(responseData.data)
                        dispatch({
                            type: USER_ACTION.UPDATE_ME_RESULT,
                            userData: responseData.data,
                            access: true
                        })   
                    }
                    else{
                        const refreshToken = localStorage.getItem('refresh')
                        if (refreshToken){
                            axios.post(REFRESH, {refresh: refreshToken})
                                .then((response) => {
                                    if (response.status === 200){
                                        localStorage.setItem('access', response.data.access)
                                        sendRequest(url)
                                    }
                                    else{
                                        throw response.statusText
                                    }
                                })
                                .catch((error) => {
                                    console.log(error.response.data.detail)
                                })
                        }
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.detail)
                })
        }
    }
}



export const RefreshFunc = (func, url) => {
    const refreshToken = localStorage.getItem('refresh')
                        if (refreshToken){
                            console.log('in refresh')
                            axios.post(REFRESH, {refresh: refreshToken})
                                .then((response) => {
                                    if (response.status === 200){
                                        localStorage.setItem('access', response.data.access)
                                        func(url)
                                    }
                                    else{
                                        throw response.statusText
                                    }
                                })
                                .catch((error) => {
                                    console.log(error.response.data.detail)
                                })
                        }
}









