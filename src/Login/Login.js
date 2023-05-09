import axios from "axios"
import { useReducer } from "react"
import { LOGIN } from "../urls"
import { useState } from "react"
import { Box, Button, Container, IconButton, InputAdornment, TextField, Typography } from "@mui/material"
import { USER_ACTION, useUser, useUserDispatch } from "../UserContext"
import { useNavigate } from "react-router-dom"
import CloseIcon from '@mui/icons-material/Close';
import { Visibility, VisibilityOff } from "@mui/icons-material"


const s = {
    "& .MuiInputLabel-root": { color: '#000000'},//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '30px', border: '3px solid #A7A9AC'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center'},
    width: '85%',
    "& .MuiInputBase-input": {borderRadius: '30px'}
}



export default function Login({onCloseLogin}) {
    const [isSignup, setIsSignup] = useState(false)
    const [errorText, setErrorText] = useState("") 
    const [showPassword, setShowPassword] = useState(false);

    const initialState = {
        username: '',
        password: '',
    }

    const reducer = (state, action) => {
        switch(action.type){
            case 'SET_USERNAME':
                return{
                    ...state,
                    username: action.payload,
                }
            case 'SET_PASSWORD':
                return{
                    ...state,
                    password: action.payload,
                }
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState)

    const user = useUser()
    const dispatchUser = useUserDispatch()
    const navigate = useNavigate()


    const handleSubmitLogin = async (event) => {
        event.preventDefault()

        console.log(event.target)

        try{
            console.log(`In Login request, body: ${state}`)
            console.log(state)
            const result = await axios.post(LOGIN, state)
            localStorage.setItem('access', result.data.access);
            localStorage.setItem('refresh', result.data.refresh);
            dispatchUser({
                type: USER_ACTION.SETTING_ACCESS_REFRESH,
                access: true,
            })
            onCloseLogin()
            navigate('/')
        }
        catch(error){
            console.log(error)
            setErrorText(error.result.data.detail)
        }

        
    }

    const handleTogglePasswordVisibility = () => {
        setShowPassword((showPassword) => !showPassword);
      };

    return(
        <>
       
                <form onSubmit={handleSubmitLogin} className="form-style">
                <TextField sx={s} 
                    value={state.username} 
                    onChange={(event)=>{dispatch({type: 'SET_USERNAME', payload: event.target.value})}} 
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
                    />
                <Button sx={{marginTop: 1, width: "85%", borderRadius: "30px", backgroundColor: "#464A50"}} 
                type="submit" variant="contained" color="primary" size="large">{isSignup? "Signup" : "Login"}</Button>
                </form>
                {errorText &&
                <p>{errorText}</p>
                }
                
        </>
    )
}



