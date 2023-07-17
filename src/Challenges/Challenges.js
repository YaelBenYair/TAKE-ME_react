import { Typography } from "@mui/material";
import { useEffect } from "react";


export default function Challenges() {

    useEffect(() => {
        const timerId = setInterval(()=>{
            //send request

            return () => clearInterval(timerId)
        }, 5000)
    }, [])
    return(
        <>
        <Typography variant="h1">challenges page</Typography>
        </>
    )
}

