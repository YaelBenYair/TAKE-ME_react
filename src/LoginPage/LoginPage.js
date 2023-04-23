import axios from "axios"
import { useState } from "react"
import { LOGIN } from "../urls"
import { Box, Button, Container, TextField, Typography } from "@mui/material"
import './LoginPage.css'
// import styled from "@emotion/styled"
// import styled from "@emotion/styled/types/base"
import styled from "styled-components"
import { blue } from "@mui/material/node/colors"


// const StyledTextField = styled(TextField)`
//     & .Mui-disabled .MuiOutlinedInput-notchedOutline{
//         border-color: oreng;
//     }
//     &{
//         color: blue;
//     }
// `

const s = {
    "& .MuiInputLabel-root": { color: 'green' },//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '30px', border: '3px solid #A7A9AC'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center'},
}

export default function LoginPage() {

    const [isSignup, setIsSignup] = useState(false)
    const [inpust, setInpust] = useState({
        name: "",
        last_name: "",
        username: "",
        password: "",
    })
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [errorText, setErrorText] = useState("") 

    const handleChange = (e) => {
        setInpust((prevState) => ({
            ...prevState,
            [e.target.name] : e.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        
        // const formData = new FormData(event.target)
        // const formData = new FormData(...inpust)
        console.log(event.target)
        // console.log(formData)

        axios.post(LOGIN, {...inpust})
        .then((responseData) => {
            if (responseData.status === 200) {
                localStorage.setItem('access', responseData.data.access)
                localStorage.setItem('refresh', responseData.data.refresh)
                window.open('/', '_self')
            }
        })
        .catch((error) => {
            console.log(error)
            setErrorText(error.response.data.detail)
        })
    }

    return(
        <>
        <Container fixed>
            <Box 
            display="flex" 
            flexDirection={"column"} 
            maxWidth={400}
            alignItems="center"
            justifyContent={"center"}
            margin="auto"
            marginTop={10}
            padding={5}
            borderRadius={5}
            boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px;'}
            >
                <Typography variant="h2" padding={3} textAlign="center">{isSignup? "Signup" : "Login"}</Typography>
                <form onSubmit={handleSubmit} className="form-style">
                {isSignup && 
                <><TextField sx={s} name="name" value={inpust.name} onChange={handleChange} margin="normal" type="text" variant="outlined" placeholder="Name" textAlign="center"/>
                <TextField sx={s} name="last_name" value={inpust.last_name} onChange={handleChange} margin="normal" type="text" variant="outlined" placeholder="Last name" /></>
                }
                <TextField sx={s} name="username" value={inpust.email} onChange={handleChange} margin="normal" type="email" variant="outlined" placeholder="Email"/>
                <TextField sx={s} name="password" value={inpust.password} onChange={handleChange} margin="normal" type="password" variant="outlined" placeholder="Password"/>
                <Button sx={{marginTop: 1, width: "210px", borderRadius: "30px", backgroundColor: "#464A50"}} 
                type="submit" maxWidth='210px' variant="contained" color="primary" size="large">{isSignup? "Signup" : "Login"}</Button>
                </form>
                <Button onClick={() => setIsSignup(!isSignup)}>Change to {isSignup? "Login" : "Signup"}</Button>
                
            {/* <form onSubmit={handleSubmit}>
                <label htmlFor="username">Email:</label>
                <input type="text" name="username" 
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}></input>

                <br />

                <label htmlFor="password" >Password:</label>
                <input type="password" name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}></input>

                <br />

                <input type="submit" value="Login"></input>
            </form>
            {errorText &&
            <p>Error occurred: {errorText}</p>} */}
        </Box>
        </Container>
        </>
    )
}



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





