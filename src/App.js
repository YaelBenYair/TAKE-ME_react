// import logo from './logo.svg';

import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import LoginPage from './LoginPage/LoginPage';
import { ME } from './urls';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Draw from './Draw/Draw';
import { USER_ACTION, useUser, useUserDispatch } from './UserContext';
import { ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import SignUp from './SignUp/SignUp';




function App() {

    const [userData, setUserData] = useState(null)
    const user = useUser()
    const dispatch = useUserDispatch()


    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
    console.log(`mode ${prefersDarkMode}`)
    

    const theme = createTheme({
        palette: {
            mode: prefersDarkMode ? 'dark' : 'light',
            primary: {
                main: '#869AB2',
                dark: '#464A50',
                light: '#A8A9AC',
            },
            secondary:{
                main: '#ad1457',
                dark: '#790e3c',
                light: '#bd4378',
            }
        }
    })


    useEffect(() => {
        const token = localStorage.getItem('access')
        if (token) {
            axios.get(ME, { headers: { Authorization: `Bearer ${token}` } })
                .then((responseData) => {
                    if (responseData.status !== 200) {
                        // setUserData('')
                        throw responseData.statusText
                    } else {
                        console.log(`ME request ${responseData}`)
                        dispatch({
                            type: USER_ACTION.UPDATE_ME_RESULT,
                            userData: responseData.data,
                            access: true
                        })
                        if (prefersDarkMode !== user.darkMode) {
                            dispatch({
                                type: USER_ACTION.SET_DARK_MODE,
                                darkMode: prefersDarkMode
                            })
                        }
                        setUserData(responseData.data)
                    }
                })
                .catch((error) => {

                })
        } else {

        }

    }, [])
    return (
        <>
        <ThemeProvider theme={theme}>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='profile/' element={<Profile />} />
                    {/* <Route path='profile/:UserId' element={<Profile/>}/> */}
                    <Route path='draw/' element={<Draw />} />
                    {/* <Route path='login/' element={<LoginPage />} /> */}
                    {/* <Route path='signup/' element={<SignUp/>} /> */}
                </Route>
                

            </Routes>
        </ThemeProvider>
        </>
    );
}

export default App;
