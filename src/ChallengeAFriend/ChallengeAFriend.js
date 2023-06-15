import { Box, Button, InputBase } from "@mui/material";
import axios from "axios";
import { GETUSER } from "../urls";
import { useEffect, useState } from "react";
import { RefreshFunc } from "../AxiosGetAndRefresh/AxiosGetAndRefresh";
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { USER_ACTION, useUser, useUserDispatch } from "../UserContext";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));


export default function ChallengeAFriend() {

    const [users, setUsers] = useState([])
    const [userName, setUserName] = useState('')
    const [userOption, setUserOption] = useState([])
    const [userSelect, setUserSelect] = useState([])
    const [select, setSelect] = useState([])
    const [isHidden, setIsHidden] = useState(true)

    const userReducer = useUser()
    const userDispatch = useUserDispatch()
    const navigate = useNavigate()

    let option = []

    console.log(`user name: ${userName}`)
    console.log(`users list:`)
    console.log(users)
    console.log(`select ${select}`)

    const handleChange =  (event) => {
        console.log(`change ${event.target.value}`)
        setUserName(event.target.value)
        setIsHidden(false)
    }

    const handleClick = (user) => {
        console.log(user)
        setIsHidden(true)
        setSelect([...select, user])
        // userDispatch({
        //     type: USER_ACTION.ADD_FRIENDS_TO_CHALLENGE,
        //     friendsToChallenge: select,
        // })
        setUsers([])
    }

    const handelDelete = (userId) => {
        console.log(select)
        const filterList = select.filter(user => userId !== user.id)
        setSelect(filterList)
    }

    const handleClickChallengeButton = () => {
        console.log('challengeClick')
        navigate('pop-challeng/')
    }

    useEffect(() => {
        if (userName){
            async function sendRequest (url) {
                console.log('in the request')
                const token = localStorage.getItem('access') 
                if (token){
                    try{
                        const response = await axios.get(url + '?user_name=' + userName , {headers: {Authorization: `Bearer ${token}`}})
                        if (response.status === 200){
                            setUsers(response.data.results)
                        }
                        else{
                            if (response.status === 401){
                                RefreshFunc(sendRequest, url)
                            }
                            else{
                                throw response.statusText
                            }
                            
                        }
    
                    }
                    catch (error){
                        console.log(error.response.data.detail)
                    }
                
                }
            
            }
            sendRequest(GETUSER)
        }
        else{
            setIsHidden(true)
        }
        
    },
    [userName])

    useEffect(() => {
        if(users){
            console.log('in useEffect userSelect')
            option = users.map((user) => <Grid container 
            rowSpacing={2} 
            columnSpacing={3} 
            key={user.id} 
            onClick={() => handleClick(user)}
            sx={{
                display: 'flex',
                textAlign: 'left',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                cursor: 'pointer',
            }}>

                <Grid xs={2} sm={2} md={2}><Avatar alt="Remy Sharp" src={user.userprofile? user.userprofile.profile_pic_url : ''} sx={{backgroundColor: 'primary.main'}} /></Grid>
                <Grid xs={8} sx={{
                    paddingLeft: '20px',
                }}>{user.first_name} {user.last_name}</Grid>

            </Grid>)
            setUserOption(option)
        }
        
    }, [users])

    useEffect(()=>{
        userDispatch({
            type: USER_ACTION.ADD_FRIENDS_TO_CHALLENGE,
            friendsToChallenge: select,
        })
        const selectList = select.map((user) => <Grid container 
        rowSpacing={2} 
        columnSpacing={3} 
        key={user.id} 
        sx={{
            display: 'flex',
            // textAlign: 'left',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            cursor: 'pointer',
        }}>

            <Grid xs={2} sm={2} md={2}><Avatar alt="Remy Sharp" src={user.userprofile? user.userprofile.profile_pic_url : ''} sx={{backgroundColor: 'primary.main'}} /></Grid>
            <Grid xs={6} sx={{
                paddingLeft: '20px',
            }}>{user.first_name} {user.last_name}</Grid>
            <Grid xs={1} sx={{textAlign: 'right'}} onClick={() => handelDelete(user.id)}><CloseRoundedIcon fontSize="small" /></Grid>

        </Grid>)
        setUserSelect(selectList)
    }, [select])
    
    return(
        <>
            <Box sx={{
                display: 'grid',
                // border: '1px solid gray',
                padding: '20px',
                marginTop: '20px',
                alignItems: 'center',
            }}>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <InputBase
                    placeholder="Whom to challenge?"
                    type="text"
                    value={userName}
                    onChange={handleChange}
                    onClick={() => setIsHidden(true)}
                    sx={{
                        width: '250px',
                        border: '2px solid #74535E',
                        // textAlign: 'center',
                        alignItems: 'center',
                        borderRadius: '30px',
                        padding: '5px',
                        paddingLeft: '20px',
                        margin: 'auto',
                    }}
                />
                </Box>

                {!isHidden &&
                    <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                        <Box sx={{
                            margin: 'auto',
                            width: '250px',
                            height: '100px',
                            overflowY: 'scroll',
                            background: '#ffffff',
                            paddingTop: '10px',
                        }}>
                            {userOption}
                        </Box>
                    </Box>
                }
                <Box sx={{
                        width: '100%',
                        display: 'flex',
                        alignItems: 'center',
                    }}>
                <Box sx={{
                    margin: 'auto',
                    paddingTop: '20px',
                    width: {md: '300px', xs: '300px'},
                }}>
                    {userSelect}
                </Box>
                </Box>

                {select.length > 0 &&
                    <Box sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '20px',
                    }}>
                        <Button type="button" variant="contained" onClick={handleClickChallengeButton} sx={{
                            margin: 'auto',
                        }}>SEND CHALLENGE</Button>
                    </Box>
                }
                

            </Box>
        </>
    )
}


