import { Box, Typography } from "@mui/material";


export default function PopChallenge() {

    console.log('hi :)')

    return(
        <>
            <Box sx={{
                height: '300px',
                width: '500px',
                border: '2px solid green',
                position: "absolute",
            }}>
                <Typography>The challenge has been sent.</Typography>
            </Box>
        </>
    )
}




