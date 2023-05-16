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
    profilePic: '',
    businessDraw: '',
    isStaff: false,
    isSuperuser: false,
    friendsToChallenge: [],
}

export const USER_ACTION = {
    SETTING_ACCESS_REFRESH : 'settingAccessAndRefresh',
    UPDATE_ME_RESULT: 'updateMeResult',
    ACCESS_DELETE: 'accessDeleteLogout',
    SET_URL_PATH: 'setUrlPath',
    SET_DARK_MODE: 'setDarkMode',
    LOADING_STATUS: 'loadingStatus',
    BUSINESS_DRAW: 'businessDraw',
    ADD_FRIENDS_TO_CHALLENGE: 'addFriendsToChallenge',
    RESET_FRIENDS_TO_CHALLENGE: 'resetFriendsToChallenge'
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
                profilePic: action.userData.userprofile.profile_pic_url,
                isStaff: action.userData.is_staff,
                isSuperuser: action.userData.is_superuser,
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

        case USER_ACTION.BUSINESS_DRAW:{
            return{
                ...userState,
                businessDraw: action.businessDraw,
            }
        }
        case USER_ACTION.ADD_FRIENDS_TO_CHALLENGE:{
            return{
                ...userState,
                friendsToChallenge: action.friendsToChallenge
            }
        }

        case USER_ACTION.RESET_FRIENDS_TO_CHALLENGE:{
            return{
                ...userState,
                friendsToChallenge: [],
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





