import React, { useState } from "react"
import './BusinessPage.css'
import { Box, Container, Typography } from "@mui/material"
import { BUSINESS_ACTION, useBusinessDispatch, useBusinessState } from "../BusinessContext";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Grid from '@mui/material/Unstable_Grid2';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { CallIcon, FacebookIcon, HomeIcon, InstaIcon, MenuIcon, WazeIcon } from "./IconsFunc";
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import IconGrid from "../IconGrid/IconGris";
import ChallengeAFriend from "../ChallengeAFriend/ChallengeAFriend";


export default function BusinessPage() {

    const [checked, setChecked] = useState(false);

    const iconStyle = {
        cursor: 'pointer',
        border: '1px solid #74535E',
        padding: '5px',
        borderRadius: '50%',
        backgroundColor: 'secondary.main',
    }
    
    const business = useBusinessState()
    const dispatch = useBusinessDispatch()

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('sm'));

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleChecked = (event) =>{
        console.log(event.target.checked)
        setChecked(event.target.checked)
    }

    return(
        <>
            <Container fixed sx={{
                padding: '0',
            }}>
                <Box className="MainBusinessDiv" sx={{
                    height: '100vh',
                    width: '100%',
                    // background: 'lightgray',
                    overflowX: 'hidden',
                    // overflowY: 'hidden',
                    '&::-webkit-scrollbar': {
                        width: '0em',
                        margin: '0',
                        padding: '0',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'none',
                    boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                    [theme.breakpoints.up('md')]:{
                        boxShadow: 'inset 0 0 6px #865C6A',
                        webkitBoxShadow: 'inset 0 0 6px #865C6A',
                        background: '#865C6A',
                    },
                    },
                    '&::-webkit-scrollbar-thumb': {
                    backgroundColor: 'none',
                    // outline: '1px solid slategrey',
                    [theme.breakpoints.up('md')]:{
                        backgroundColor: '#865C6A',
                        outline: '1px solid #865C6A',
                    },
                    },
                    '&::-webkit-scrollbar-thumb:hover': {
                        background: '#CFB4B9', 
                    [theme.breakpoints.up('md')]:{
                        background: '#865C6A',
                    },
                    },
                }}>
                    <Box className="business-container" sx={{
                        width: {xs: '100%', md: '90%'},
                        height: 'inherit',
                        // height: 'auto',
                        // height: '110vh',
                        backgroundColor: 'secondary.main',
                        margin: 'auto',
                        borderRadius: '15px 15px 0 0',
                        marginTop: '15px',
                    }}>
                        <Box className="top-portion" sx={{
                            // height: '30%',
                            width: '100%',
                            position: 'relative',
                        }}>
                            <Box className="business-profile-bg-image" sx={{
                                height: {xs: '200px', sm: '250px',md: '300px'},
                                // height: '80%',
                                width: '100%',
                                background: 'gray',
                                overflow: 'hidden',
                                borderRadius: '15px 15px 0 0'
                            }}>
                                <img id="prf-bg-img" 
                                    src={business.businessDraw.cover}
                                    alt="" srcSet=""
                                    />
                            </Box>
                            <Box className='edit-icon' sx={{
                                width: '100%',
                                height: '10%',
                                paddingTop: '5px',
                                textAlign: 'end',
                                
                            }}>
                                <EditRoundedIcon color="primary" sx={{
                                    cursor: 'pointer',
                                    border: '1px solid #74535E',
                                    padding: '5px',
                                    borderRadius: '50%',
                                    marginRight: '5px',
                                    backgroundColor: 'secondary.main',
                                    marginBottom: '20px',
                                }}/>
                            </Box>
                            <Box className="business-logo-img" sx={{
                                position: 'absolute',
                                height: {xs: '150px', md: '200px'},
                                width: {xs: '150px', md: '200px'},
                                borderRadius: '50%',
                                transform: 'translate(50%)',
                                right: '50%',
                                backgroundColor: '#26343D',
                                bottom: {xs: '0', sm: '1%', md: '-15%', lg: '-15%'},
                                
                            }}>
                                <Box sx={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    overflow: 'hidden',
                            }}>
                                <img id="prf-img" 
                                     src={business.businessDraw.logo} 
                                     alt="" srcSet=""
                                     style={{
                                        height: '100%',
                                        width: '100%',
                                        objectFit: 'cover',
                                        borderRadius: '50%',
                                     }}
                                     />
                                     <Checkbox sx={{
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        // border: '2px solid #74535E',
                                        padding: '0',
                                        borderRadius: '50%',
                                        backgroundColor: 'secondary.main',
                                        transform: 'translate(50%)',
                                        right: '80%',
                                        top: {xs: '75%', md: '80%'},
                                     }} 
                                     value={checked} 
                                     onChange={handleChecked} 
                                     icon={<FavoriteBorderRoundedIcon color="primary" sx={iconStyle} />} 
                                     checkedIcon={<FavoriteRoundedIcon color="primary" sx={iconStyle}/>} 
                                     />
                                    
                                </Box>
                            </Box>
                            <Box className="businessName" sx={{
                                textAlign: 'center',
                                fontWeight: '700',
                                width: '100%',
                                position: 'absolute',
                                // bottom:  {xs: '-25%', sm: '-20%', md: '-38%', lg: '-38%'},
                                top:  {xs: '100%', sm: '100%', md: '115%', lg: '115%'},
                                fontSize: '2rem',
                                color: 'black',
                            }}>
                                <Typography variant="h4" sx={{fontWeight: '700',}}>{business.businessDraw.name? business.businessDraw.name.toUpperCase() : ''}</Typography>
                                <Typography variant="subtitle1" >{business.businessDraw.address}</Typography>

                            </Box>

                        </Box>

                        <Box className="bottom-portion" sx={{
                            // border: '2px solid green',
                            marginTop: '10%',
                            paddingTop: '30px',
                            
                        }}>
                            
                            <Box sx={{ width: {xs: '100%', md: '80%', lg: '60%'}, margin: 'auto' }}>
                                <Box sx={{
                                    textAlign: 'center',
                                    marginBottom: '30px',
                                    marginTop: {md: '30px', xs: '20px'},
                                    padding: {xs: '0 10px'},
                                }}>
                                    <Typography>{business.businessDraw.description}</Typography>
                            </Box>

                            <IconGrid/>

                            </Box>

                            <ChallengeAFriend/>
                            
                        </Box>
                    </Box>
                </Box>

            </Container>
        </>
    )
}




