import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import { experimentalStyled as styled } from '@mui/material/styles';
import { TextField } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    backgroundColor: 'none',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const s = {
    "& .MuiInputLabel-root": { color: 'green' },//styles the label
    "& .MuiOutlinedInput-root": {
        "& > fieldset": {borderRadius: '30px', border: '3px solid #A7A9AC'},
    },
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {textAlign: 'center'},
    width: {xs: "100%", md: "85%"},
    "& .MuiInputBase-input": {borderRadius: '30px'},
    "& .MuiOutlinedInput-input":{borderRadius: '30px'}
}


export default function ChallengeInput(props) {
    return(
        <Grid xs={2} sm={4} md={4}>
            
            <TextField fullWidth
                sx={s} 
                name="last_name" 
                // value={state.last_name} 
                // onChange={} 
                margin="normal" 
                type="text" 
                variant="outlined" 
                placeholder="Last name" 
                required/>
            
          </Grid>
    )
}




