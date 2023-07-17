// import logo from './logo.svg';

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import LoginPage from './LoginPage/LoginPage';
import { ME, REFRESH } from './urls';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Draw from './Draw/Draw';
import { USER_ACTION, useUser, useUserDispatch } from './UserContext';
import { ThemeProvider, Typography, createTheme, useMediaQuery } from '@mui/material';
import SignUp from './SignUp/SignUp';
import BusinessPage from './BusinessPage/BusinessPage';
import { BusinessProvider } from './BusinessContext';
import PopChallenge from './PopChallenge/PopChallenge';




function App() {
    console.log('App component')

    const [userData, setUserData] = useState(null)
    const user = useUser()
    const dispatch = useUserDispatch()

    // chack if the computer is in dark mode
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    console.log(`mode ${prefersDarkMode}`)
    

    const theme = createTheme({
        palette: {
            // mode: prefersDarkMode ? 'dark' : 'light',
            mode: 'light',
            primary: {
                main: '#74535E',
                dark: '#543D46',
                light: '#865C6A',
            },
            secondary:{
                main: '#F9F6ED',
                dark: '#CFB4B9',
                light: '#FFF4E2',
            }
        },
        typography: {
            fontFamily: "'Quicksand', sans-serif",
        }
    }
    
    )


    const sendRequest = (url) => {
        const token = localStorage.getItem('access')
        if (token){
            axios.get(url, {headers: {Authorization: `Bearer ${token}`}})
                .then((responseData) => {
                    if (responseData.status === 200){
                        console.log(`ME request`)
                        console.log(responseData.data)
                        dispatch({
                            type: USER_ACTION.UPDATE_ME_RESULT,
                            userData: responseData.data,
                            access: true
                        })   
                    }
                    else{
                        const refreshToken = localStorage.getItem('refresh')
                        if (refreshToken){
                            axios.post(REFRESH, {refresh: refreshToken})
                                .then((response) => {
                                    if (response.status === 200){
                                        localStorage.setItem('access', response.data.access)
                                        sendRequest(url)
                                    }
                                    else{
                                        throw response.statusText
                                    }
                                })
                                .catch((error) => {
                                    console.log(error.response.data.detail)
                                })
                        }
                    }
                })
                .catch((error) => {
                    console.log(error.response.data.detail)
                })
        }
    }

    useEffect(() => {
        sendRequest(ME)
    }, [user.access])

    return (
        <>
        <ThemeProvider theme={theme}>
            <BusinessProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='profile/' element={<Profile />} />
                    {/* <Route path='profile/:UserId' element={<Profile/>}/> */}
                    <Route path='draw/' element={<Draw />}>
                        <Route path=':businessId' element={<BusinessPage/>}>
                            <Route path='pop-challeng/' element={<PopChallenge/>}/>
                        </Route>
                    </Route>
                    {/* <Route path='login/' element={<LoginPage />} /> */}
                    {/* <Route path='signup/' element={<SignUp/>} /> */}
                </Route>
                

            </Routes>
            </BusinessProvider>
        </ThemeProvider>
        </>
    );
}

export default App;



// const sendRequest = (url) => {
//     const token = localStorage.getItem('access')
//     if (token) {
//         axios.get(url, { headers: { Authorization: `Bearer ${token}` } })
//             .then((responseData) => {
//                 if (responseData.status !== 200) {
//                     // setUserData('')
//                     throw responseData.statusText
//                 } else {
//                     console.log(`ME request`)
//                     console.log(responseData.data)
//                     dispatch({
//                         type: USER_ACTION.UPDATE_ME_RESULT,
//                         userData: responseData.data,
//                         access: true
//                     })
//                     if (prefersDarkMode !== user.darkMode) {
//                         dispatch({
//                             type: USER_ACTION.SET_DARK_MODE,
//                             darkMode: prefersDarkMode
//                         })
//                     }
//                     setUserData(responseData.data)
//                 }
//             })
//             .catch((error) => {
//                 const refreshToken = localStorage.getItem('refresh')
//                 if (! refreshToken) {
//                 // the user will have to perforn login
//                 console.log('the user will have to perforn login')
//                 } else {
//                 axios.post(REFRESH, {refresh: refreshToken})
//                 .then((responseData) => {
//                     if (responseData.status === 200) {
//                         localStorage.setItem('access', responseData.data.access)
//                         sendRequest(url)
//                     }
//             })
//             } })
//         }}