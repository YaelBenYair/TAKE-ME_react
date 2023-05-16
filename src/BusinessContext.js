// import { createContext, useReducer, useContext } from "react"
import { createContext, useContext, useReducer } from "react"


const BUSINESS_SETTING = {
    businessDraw: {},
    businessSearchList: [],
}

export const BUSINESS_ACTION = {
    NEW_BUSINESS_DRAW: 'newBusinessDraw',
}

const businessReducer = (businessState, action) => {
    switch(action.type){
        case BUSINESS_ACTION.NEW_BUSINESS_DRAW:{
            return{
                ...businessState,
                businessDraw: action.business
            }
        }
    }
}



const BusinessSetting = createContext(BUSINESS_SETTING)
const BusinessDispatchContext = createContext(null)

export function BusinessProvider({children}) {
    const [state, dispatch] = useReducer(businessReducer, BUSINESS_SETTING)

    return(
        <BusinessSetting.Provider value={state}>
            <BusinessDispatchContext.Provider value={dispatch}>
                {children}
            </BusinessDispatchContext.Provider>
        </BusinessSetting.Provider>
    )
}

export function useBusinessState() {
    return useContext(BusinessSetting)
}

export function useBusinessDispatch() {
    return useContext(BusinessDispatchContext)
    
}





