import { createContext, useContext, useReducer } from "react"
import { useNavigate } from "react-router-dom"

// export const navigate = useNavigate()

const USER_SETTING = {
    id: null,
    email: '',
    firstName: '',
    lastName: '',
    access: false,
    loading: false,
    urlPath: '',
    darkMode: false,
}

export const USER_ACTION = {
    SETTING_ACCESS_REFRESH : 'settingAccessAndRefresh',
    UPDATE_ME_RESULT: 'updateMeResult',
    ACCESS_DELETE: 'accessDeleteLogout',
    SET_URL_PATH: 'setUrlPath',
    SET_DARK_MODE: 'setDarkMode',
    LOADING_STATUS: 'loadingStatus',
}


function userSettingReducer(userState, action) {
    switch(action.type){

        case USER_ACTION.SETTING_ACCESS_REFRESH:{
            return{
                ...userState,
                access: action.access,
            }
        }

        case USER_ACTION.UPDATE_ME_RESULT:{
            return{
                ...userState,
                email: action.userData.email,
                firstName: action.userData.first_name,
                lastName: action.userData.last_name,
                id: action.userData.id,
                access: action.access,
            }
        }

        case USER_ACTION.ACCESS_DELETE:{
            return{
                ...userState,
                access: '',
            }
        }

        case USER_ACTION.SET_URL_PATH:{
            return{
                ...userState,
                urlPath: action.urlPath
            }
        }

        case USER_ACTION.SET_DARK_MODE:{
            return{
                ...userState,
                darkMode: action.darkMode
            }
        }

        case USER_ACTION.LOADING_STATUS:{
            return{
                ...userState,
                loading: action.loading,
            }
        }
}
}



const UserSetting = createContext(USER_SETTING)
const UserDispatchContext = createContext(null)

export function UserProvider({children}) {
    const [userState, dispatch] = useReducer(
        userSettingReducer,
        USER_SETTING
    )
    return(
        <UserSetting.Provider value={userState}>
            <UserDispatchContext.Provider value={dispatch}>
                {children}
            </UserDispatchContext.Provider>
        </UserSetting.Provider>
    )
}

export function useUser() {
    return useContext(UserSetting)
}

export function useUserDispatch() {
    return useContext(UserDispatchContext)
    
}





