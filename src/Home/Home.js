import { Box, Container } from "@mui/material";


const Arrow = () => {
    const columnBox = (
        <Box sx={{
          backgroundColor: 'red',
          width: 100,
          height: 100,
          display: 'flex',
          justifyContent: 'space-around',
        }} />
      );
    
      const arrowBox1 = (
        <Box sx={{
          backgroundColor: 'blue',
          width: 50,
          height: 50,
          position: 'absolute',
          top: 0,
          left: 0,
        }} />
      );
    
      const arrowBox2 = (
        <Box sx={{
          backgroundColor: 'green',
          width: 50,
          height: 50,
          position: 'absolute',
          top: 100,
          left: 100,
        }} />
      );
    
      return (
        <div>
          {columnBox}
          {arrowBox1}
          {arrowBox2}
        </div>
      );
    };


export default function Home() {

    return(
        <>
        <h1>Home</h1>
        <Container fixed>
            <Box
            sx={{
                margin: 'auto',
                width: 40,
                height:300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                borderRadius: '10px 10px 0px 0px',
            }}/>
            <Box
            sx={{
                margin: 'auto',
                maxWidth: 500,
                border: '1px solid #000000',
                borderRadius: '5px',
            }}/>
           
        </Container>
        <Arrow/>
        </>
    )
}

