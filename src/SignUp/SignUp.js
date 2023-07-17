import axios from "axios"
import { useReducer, useState } from "react"
import { LOGIN, SIGNUP } from "../urls"
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
// import styled from "styled-components"
import { blue } from "@mui/material/node/colors"
import { USER_ACTION, useUser, useUserDispatch } from "../UserContext"
import { useNavigate } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from "@mui/icons-material"
import PopUpComments from "../PopUpComments/PopUpComments"


const s = {
    "& .MuiInputLabel-root": { color: 'green' },//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '30px', border: '3px solid #A7A9AC'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center'},
    width: {xs: "100%", md: "85%"},
    "& .MuiInputBase-input": {borderRadius: '30px'},
    "& .MuiOutlinedInput-input":{borderRadius: '30px'}
}

export default function SignUp({onSignUp, onCloseLogin}) {
    const [isSignup, setIsSignup] = useState(false)
    const [errorText, setErrorText] = useState("") 
    const [showPassword, setShowPassword] = useState(false);

    const initialStateSignup = {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        is_staff: false,
    }

    const reducer = (state, action) => {
        switch(action.type){
            case 'SET_FIRST_NAME':
                return{
                    ...state,
                    first_name: action.payload,
                }

            case 'SET_EMAIL':
                return{
                    ...state,
                    email: action.payload,
                }
            case 'SET_LAST_NAME':
                return{
                    ...state,
                    last_name: action.payload,
                }
            case 'SET_PASSWORD':
                return{
                    ...state,
                    password: action.payload,
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialStateSignup)

    const user = useUser()
    const dispatchUser = useUserDispatch()
    const navigate = useNavigate()
    
    const handleSubmitSignup = async (event) =>{
        event.preventDefault()

        console.log(event.target)
        console.log(state)

        try{
            const signupResponse = await axios.post(SIGNUP, state)
            // onSignUp()
            setIsSignup(true)
        }catch(error){
            console.log(error)
        }

    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
      };

    return(
        <>
        
                <form onSubmit={handleSubmitSignup} className="form-style">
                
                <><TextField 
                sx={s} 
                name="first_name" 
                value={state.first_name} 
                onChange={(event)=>{dispatch({type: 'SET_FIRST_NAME', payload: event.target.value})}} 
                margin="normal" 
                type="text" 
                variant="outlined" 
                placeholder="Name" 
                textAlign="center" 
                required/>

                <TextField 
                sx={s} 
                name="last_name" 
                value={state.last_name} 
                onChange={(event)=>{dispatch({type: 'SET_LAST_NAME', payload: event.target.value})}} 
                margin="normal" 
                type="text" 
                variant="outlined" 
                placeholder="Last name" 
                required/></>

                <TextField 
                sx={s} 
                name={"email"} 
                value={state.email} 
                onChange={(event)=>{dispatch({type: 'SET_EMAIL', payload: event.target.value})}} 
                margin="normal" 
                type="email" 
                variant="outlined" 
                placeholder="Email" 
                required/>

                <TextField 
                sx={s} 
                name="password" 
                value={state.password} 
                onChange={(event)=>{dispatch({type: 'SET_PASSWORD', payload: event.target.value})}} 
                margin="normal" 
                type={showPassword ? 'text' : 'password'}  
                variant="outlined" 
                placeholder="Password" 
                required
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <IconButton onClick={handleTogglePasswordVisibility}>
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                        </InputAdornment>
                    ),
                    }}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, and one number."/>
                <Button sx={{marginTop: 1, width: {xs: "100%", md: "85%"}, borderRadius: "30px", backgroundColor: "#464A50"}} 
                type="submit" variant="contained" color="primary" size="large">Signup</Button>
                </form>

                {isSignup &&
                    <PopUpComments username={state.email} password={state.password}/>
                }
            
        </>
    )
}






