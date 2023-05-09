import { Box, Button, Container } from "@mui/material";
import { CHALLENGEME, CHOOSEME } from "../urls";
import { useNavigate } from "react-router-dom";
import { USER_ACTION, useUser, useUserDispatch } from "../UserContext";
import './Home.css'


export default function Home() {
  
  const navigate = useNavigate()
  const user = useUser()
  const dispatch = useUserDispatch()

  const handleClick = (reqUrl) => {
    console.log(`request to ${reqUrl}`)
    dispatch({
      type: USER_ACTION.SET_URL_PATH,
      urlPath: reqUrl
    })

    navigate('draw/')
  }



  return(
      <>
      <Container fixed sx={{marginTop: 0, paddingTop: 20}}>
        <Box className='t-container' sx={{
          position: 'relative',
        }}>  
          <Box className='back-poll' sx={{
            width: '100%',
            height: '100%'
          }}>
          <Box className='poll'
            sx={{
                margin: 'auto',
                width: 45,
                height:300,
                backgroundColor: 'primary.dark',
                '&:hover': {
                    backgroundColor: 'primary.main',
                    opacity: [0.9, 0.8, 0.7],
                },
                borderRadius: '10px 10px 0px 0px',
                display: 'flex',
            }}/>
            <Box className='line'
            sx={{
                margin: 'auto',
                maxWidth: 500,
                border: '1px solid #000000',
                borderRadius: '5px',
            }}/>
          </Box>
          <Box className='arrow' sx={{
            position: 'absolute',
            width: { xs: "300px", md: "320px" },
            height: 'min-content',
            // border: '2px solid gray',
            transform: 'translate(50%)',
            right: '54%',
            bottom: '8rem'
          }}>
            <Box className='bitton-container'>
          <Button sx={{
            marginTop: 1, borderRadius: "30px", marginBottom: 2,
            height: 60, width: 300, backgroundColor: "primary.dark", color: '#ffffff',
            '&:hover': {
              backgroundColor: '#2E3135',
          },
          }} 
            variant="contained" size="large"
            onClick={() => handleClick(CHALLENGEME)}><span className="less-than-entity">&#60;</span>Challenge me</Button>
          <Button sx={{
            marginTop: 1, borderRadius: "30px",
            height: 60, width: 300, marginLeft: { xs: 6, md: 10 }, backgroundColor: "primary.light",
            '&:hover': {
              backgroundColor: '#2E3135',
              color: '#ffffff'
          },
          }} 
                variant="contained" color="primary" size="large"
                onClick={() => handleClick(CHOOSEME)}>Choose me<span className="greater-than-entity">&#62;</span></Button>
          </Box>
          </Box>
        </Box>
          {/* <Box sx={{
             width: '300px',
             margin: 'auto'
         }}>
          <Button fullWidth sx={{marginTop: 1, borderRadius: "30px", backgroundColor: "#464A50", marginBottom: 2}} 
                maxWidth='210px' variant="contained" color="primary" size="large"
                onClick={() => handleClick(CHALLENGEME)}>Challenge me</Button>
          <Button fullWidth sx={{marginTop: 1, borderRadius: "30px", backgroundColor: "#464A50"}} 
                maxWidth='210px' variant="contained" color="primary" size="large"
                onClick={() => handleClick(CHOOSEME)}>Choose me</Button>
         </Box> */}
         
      </Container>
      </>
  )
}











// const Arrow = () => {
//     const columnBox = (
//         <Box sx={{
//           backgroundColor: 'red',
//           width: 100,
//           height: 100,
//           display: 'flex',
//           justifyContent: 'space-around',
//         }} />
//       );
    
//       const arrowBox1 = (
//         <Box sx={{
//           backgroundColor: 'blue',
//           width: 50,
//           height: 50,
//           position: 'absolute',
//           top: 0,
//           left: 0,
//         }} />
//       );
    
//       const arrowBox2 = (
//         <Box sx={{
//           backgroundColor: 'green',
//           width: 50,
//           height: 50,
//           position: 'absolute',
//           top: 100,
//           left: 100,
//         }} />
//       );
    
//       return (
//         <>
//             <Box sx={{
//                 display: 'flex',
//                 position: 'absolute',
//                 border: '2px solid green',
//                 window: '300px'
//             }}>

//             </Box>
            
//            </> 
//       );
//     };


// export default function Home() {

//     return(
//         <>
//         <h1>Home</h1>
//         <Container fixed>
          //   <Box
          //   sx={{
          //       margin: 'auto',
          //       width: 40,
          //       height:300,
          //       backgroundColor: 'primary.dark',
          //       '&:hover': {
          //           backgroundColor: 'primary.main',
          //           opacity: [0.9, 0.8, 0.7],
          //       },
          //       borderRadius: '10px 10px 0px 0px',
          //       display: 'flex',
          //   }}/>
          //   <Box sx={{
          //      position: 'absolute',
          //      border: '2px solid green',
          //      width: '300px',
          //      height: '300px',
          //      top: "17%",
          //      left: "25%",
          //  }}>
//             <Button>Challenge me</Button>
//             <Button>Choose me</Button>
//            </Box>

//             <Box
//             sx={{
//                 margin: 'auto',
//                 maxWidth: 500,
//                 border: '1px solid #000000',
//                 borderRadius: '5px',
//             }}/>
           
//         </Container>
//         <Arrow/>
//         </>
//     )
// }

