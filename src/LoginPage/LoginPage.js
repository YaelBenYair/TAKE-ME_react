import axios from "axios"
import { useState } from "react"
import { GOOGLEAUTH, LOGIN, SIGNUP } from "../urls"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import './LoginPage.css'
import styled from "styled-components"
import { blue } from "@mui/material/node/colors"
import { USER_ACTION, useUser, useUserDispatch } from "../UserContext"
import { useNavigate } from "react-router-dom"
import LoginSignupRequest from "./LoginSignupRequest"
import CloseIcon from '@mui/icons-material/Close';
import SignUp from "../SignUp/SignUp"
import Login from "../Login/Login"
import { GoogleLogin } from '@react-oauth/google';


const s = {
    "& .MuiInputLabel-root": { color: 'green' },//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '30px', border: '3px solid #A7A9AC'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center'},
}

export default function LoginPage({onCloseLogin}) {

    const [isSignup, setIsSignup] = useState(false)
    const [inpust, setInpust] = useState({
        first_name: "",
        last_name: "",
        username: "",
        email: "",
        password: "",
        is_staff: false,
    })
    const [errorText, setErrorText] = useState("") 

    const user = useUser()
    const dispatch = useUserDispatch()
    const navigate = useNavigate()

    const handleChange = (e) => {
        setInpust((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    async function LoginSignupRequestD(inpust) {
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
        console.log(error.responseData.data.detail)
        throw error
        // setErrorText(error.response.data.detail)
    }
    }

    const handleSubmitLogin = async (event) => {
        event.preventDefault()

        console.log(event.target)

        try{
            // console.log(inpust)
            await LoginSignupRequest(inpust, dispatch)
            onCloseLogin()
            navigate('/')
        }
        catch(error){
            console.log(error)
        }

        
    }
    
    const handleSubmitSignup = async (event) =>{
        event.preventDefault()

        console.log(event.target)
        console.log(inpust)

        try{
            const signupResponse = await axios.post(SIGNUP, {...inpust})
            await LoginSignupRequestD(inpust)
        }catch(error){
            console.log(error)
        }
    }

    const handleSignUpSwichLogin = () => {
        setIsSignup(false)
    }

    return(
        <>
        <Container fixed >
            <Box 
            display="flex" 
            flexDirection={"column"} 
            maxWidth={400}
            minWidth={200}
            height={550}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={10}
            padding={5}
            borderRadius={5}
            boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}
            backgroundColor={'#ffffff'}
            // sx={{
            //     opacity: '1'
            // }}
            >
                <Box sx={{
                    margin: '0',
                    padding: '0',
                }}>
                <CloseIcon color="action" onClick={onCloseLogin} sx={{
                    cursor: 'pointer',
                }}/>
                </Box>
                <Typography
                    variant="h3"
                    sx={{ 
                        // flexGrow: 1, 
                        display: { xs: '1', sm: 'block' },
                        color: '#CFB4B9',
                        fontWeight: '900',
                        textShadow: '-2px 2px 0px #543D46',
                        margin: '0',
                        textAlign: 'center',
                }}
                > TAKE ME
                </Typography>
                <Typography variant="h6" padding={3} textAlign="center">{isSignup? "Signup" : "Login"}</Typography>
                {isSignup?
                    <SignUp onSignUp={handleSignUpSwichLogin}/>
                :
                    <Login onCloseLogin={onCloseLogin}/>
                }
                
                <Button onClick={() => setIsSignup(!isSignup)}>Change to {isSignup? "Login" : "Signup"}</Button>
                

                <GoogleLogin
                onSuccess={async credentialResponse => {
                    console.log(credentialResponse);
                    const response = await axios.post(GOOGLEAUTH,
                        {},
                        {headers: {'Authorization': credentialResponse.credential}})
                    localStorage.setItem('access', response.data.access);
                    localStorage.setItem('refresh', response.data.refresh);
                    onCloseLogin()
                    window.open('/', '_self')
                    
                }}

                onError={() => {
                    console.log('Login Failed');
                }}
            />
            
        </Box>
        </Container>
        </>
    )
}


// const handleSubmit = (event) => {
//     event.preventDefault()

//     console.log(event.target)

//     axios.post(LOGIN, {...inpust})
//     .then((responseData) => {
//         if (responseData.status === 200) {
//             localStorage.setItem('access', responseData.data.access)
//             localStorage.setItem('refresh', responseData.data.refresh)
//             window.open('/', '_self')
//         }
//     })
//     .catch((error) => {
//         console.log(error)
//         setErrorText(error.response.data.detail)
//     })
// }






// export default function LoginPage() {

//     const [username, setUsername] = useState("")
//     const [password, setPassword] = useState("")
//     const [errorText, setErrorText] = useState("")

//     const handleSubmit = (event) => {
//         event.preventDefault()
        
//         const formData = new FormData(event.target)

//         axios.post(LOGIN, formData)
//         .then((responseData) => {
//             if (responseData.status === 200) {
//                 localStorage.setItem('access', responseData.data.access)
//                 localStorage.setItem('refresh', responseData.data.refresh)
//                 window.open('/', '_self')
//             }
//         })
//         .catch((error) => {
//             console.log(error)
//             setErrorText(error.response.data.detail)
//         })
//     }

//     return(
//         <>
//         <Container fixed>
//             <Box sx={{
//                 margin: '30% auto',
//                 width: 300,
//                 border: '1px solid black',
//             }}>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="username">Email:</label>
//                 <input type="text" name="username" 
//                     value={username}
//                     onChange={(event) => setUsername(event.target.value)}></input>

//                 <br />

//                 <label htmlFor="password" >Password:</label>
//                 <input type="password" name="password"
//                     value={password}
//                     onChange={(event) => setPassword(event.target.value)}></input>

//                 <br />

//                 <input type="submit" value="Login"></input>
//             </form>
//             {errorText &&
//             <p>Error occurred: {errorText}</p>}
//         </Box>
//         </Container>
//         </>
//     )
// }





