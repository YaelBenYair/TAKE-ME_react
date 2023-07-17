import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import { USER_ACTION } from '../UserContext';
import { useUser, useUserDispatch } from "../UserContext"
import { LOGIN } from '../urls';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function PopUpComments(props) {
    console.log('pop up comments page')

    const [sendRequests, setSendRequests] = React.useState(false)
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const navigate = useNavigate()
  const dispatchUser = useUserDispatch()

  const myTimout = setTimeout(()=>{
        // handleClose()
        setSendRequests(true)
    }, 5000)

  React.useEffect(()=> {
    
    const loginRequest = async () => {

        console.log('login request after signup')
        try{
            const responseData = await axios.post(LOGIN, {...props})
            
            if (responseData.status === 200) {
                
                localStorage.setItem('access', responseData.data.access);
                localStorage.setItem('refresh', responseData.data.refresh);
    
                dispatchUser({
                    type: USER_ACTION.SETTING_ACCESS_REFRESH,
                    access: true,
                });
                dispatchUser({
                    type: USER_ACTION.HANDLE_POP_LOGIN,
                    popLogin: false
                })
                handleClose()
                navigate('/')
                
            }
        }
        catch(error) {
            console.log(error.responseData.data.detail)
            throw error
            // setErrorText(error.response.data.detail)
            }
        }

    loginRequest()
    
  }, [sendRequests])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}





