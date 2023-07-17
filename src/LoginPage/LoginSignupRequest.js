import axios from "axios"
import { useState } from "react"
import { LOGIN, SIGNUP } from "../urls"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import './LoginPage.css'
// import styled from "styled-components"
import { blue } from "@mui/material/node/colors"
import { useNavigate } from "react-router-dom"
import { USER_ACTION, useUserDispatch } from "../UserContext"




export default async function LoginSignupRequest(inpust, dispatch) {

    console.log(inpust)
    try{
    const responseData = await axios.post(LOGIN, {...inpust})
    
    if (responseData.status === 200) {
        
        localStorage.setItem('access', responseData.data.access);
        localStorage.setItem('refresh', responseData.data.refresh);

        dispatch({
            type: USER_ACTION.SETTING_ACCESS_REFRESH,
            access: true,
        });
    }
}
catch(error) {
    console.log(error)
    throw error
    // setErrorText(error.response.data.detail)
}
}
