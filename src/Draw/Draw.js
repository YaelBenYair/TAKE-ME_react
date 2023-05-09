import BusinessPage from "../BusinessPage/BusinessPage";
import { useEffect, useState } from "react"
import { useUser, useUserDispatch } from "../UserContext";
import axios from "axios";

export default function Draw() {

    const [business, setBusiness] = useState({})

    const user = useUser()
    const dispatch = useUserDispatch()

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
                    setBusiness(response.data)
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
        <BusinessPage business={business}/>
        </>
    )
}






