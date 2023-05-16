import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Grid from '@mui/material/Unstable_Grid2';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import { SvgIcon } from '@mui/material';

const gridStyle ={
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
}

const iconStyle = {
    cursor: 'pointer',
    border: '2px solid #74535E',
    padding: '5px',
    borderRadius: '50%',
}

const xsLength = 2 


export const HomeIcon = () =>{
    return(
        <Grid xs={xsLength} sx={gridStyle}>
            {/* <HomeRoundedIcon color="primary" fontSize="large" sx={iconStyle}/> */}
            <img src='https://final-yael.s3.amazonaws.com/home_page.png' height={47} width={47} style={{cursor: 'pointer',
    border: '1px solid #74535E',
    padding: 0,
    borderRadius: '50%',}}/>
        </Grid>
    )
}

export const CallIcon = () =>{
    return(
        <Grid xs={xsLength} sx={gridStyle}>
            {/* <CallRoundedIcon color="primary" fontSize="large" sx={iconStyle}/> */}
            <img src='https://final-yael.s3.amazonaws.com/PhoneNumber.png' height={47} width={47} style={{cursor: 'pointer',
    border: '1px solid #74535E',
    padding: 0,
    borderRadius: '50%',}}/>
        </Grid>
    )
}

export const MenuIcon = () =>{
    return(
        <Grid xs={xsLength} sx={gridStyle}>
            {/* <MenuBookRoundedIcon color="primary" fontSize="large" sx={iconStyle}/> */}
            <img src='https://final-yael.s3.amazonaws.com/menu.png' height={47} width={47} style={{cursor: 'pointer',
    border: '1px solid #74535E',
    padding: 0,
    borderRadius: '50%',}}/>
        </Grid>
    )
}


// export function FacebookIconSvg(props) {
//     return (
//       <SvgIcon {...props}>
//         <use xlinkHref='./facbookIconSvgD.svg'/>
//       </SvgIcon>
//     );
//   }


export const FacebookIcon = () =>{
    return(
        <Grid xs={xsLength} sx={gridStyle}>
            {/* <FacebookRoundedIcon color="primary" fontSize="large" sx={iconStyle}/> */}
            <img src='https://final-yael.s3.amazonaws.com/facebook.png' height={47} width={47} style={{cursor: 'pointer',
    border: '1px solid #74535E',
    padding: 0,
    borderRadius: '50%',}}/>
        </Grid>
    )
}

export const InstaIcon = () =>{
    return(
        <Grid xs={xsLength} sx={gridStyle}>
            <img src='https://final-yael.s3.amazonaws.com/insta.png' height={47} width={47} style={{cursor: 'pointer',
    border: '1px solid #74535E',
    padding: 0,
    borderRadius: '50%',}}/>
        </Grid>
    )
}

export const WazeIcon = () =>{
    return(
        <Grid xs={xsLength} sx={gridStyle}>
            <img src='https://final-yael.s3.amazonaws.com/waze.png' height={47} width={47} style={{cursor: 'pointer',
    border: '1px solid #74535E',
    padding: 0,
    borderRadius: '50%',}}/>
        </Grid>
    )
}





