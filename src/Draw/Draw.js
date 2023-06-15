import BusinessPage from "../BusinessPage/BusinessPage";
import { useEffect, useState } from "react"
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { BUSINESS_ACTION, useBusinessDispatch, useBusinessState } from "../BusinessContext";
import { useUser } from "../UserContext";

export default function Draw() {

    // const [business, setBusiness] = useState({})

    // const business = useBusinessState()
    const dispatch = useBusinessDispatch()
    const user = useUser()
    const navigate = useNavigate()

    useEffect(()=>{
        const token = localStorage.getItem('access')
        const drawBusiness = async () => {
            try{
                console.log(`request to ${user.urlPath}`)
                const response = await axios.get(user.urlPath, user.access?{headers: {Authorization: `Bearer ${token}`}}:{})
                console.log(response.data)
                if (response.status !== 200){
                    throw response.statusText
                }
                else{
                    // setBusiness(response.data)
                    navigate(`${response.data.business_id}`)
                }
            }
            catch(error){
                console.log(error)
            }
        }
        
        drawBusiness()
        
    }, [])

    return(
        <>
        {/* <h1>Draw</h1> */}
        {/* <BusinessPage business={business}/> */}
        <Outlet/>
        </>
    )
}






