import { Box, Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { CallIcon, FacebookIcon, HomeIcon, InstaIcon, MenuIcon, WazeIcon } from "../BusinessPage/IconsFunc";
import { BUSINESS_ACTION, useBusinessDispatch, useBusinessState } from "../BusinessContext";


export default function IconGrid() {

    const business = useBusinessState()

    return(

            <Box>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            
                <HomeIcon/>

                <CallIcon/>

                <MenuIcon/>

                <FacebookIcon/>

                <InstaIcon/>

                <WazeIcon/>

            </Grid>
            </Box>
    )
}




