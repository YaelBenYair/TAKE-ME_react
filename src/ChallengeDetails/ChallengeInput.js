import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  backgroundColor: "none",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const s = {
  "& .MuiInputLabel-root": { color: "green" }, //styles the label
  "& .MuiOutlinedInput-root": {
    "& > fieldset": { borderRadius: "30px", border: "3px solid #A7A9AC" },
  },
  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    textAlign: "center",
  },
  
  "& .MuiInputBase-input": { borderRadius: "30px" },
  "& .MuiOutlinedInput-input": { borderRadius: "30px" },
  margin: 'auto',
  justifyContent: 'center',
};

export default function ChallengeInput(props) {
  return (
    <Grid xs={6} sm={4} md={4} sx={{}}>
      <Box sx={{
        margin: 'auto',
        width: { xs: "100%", md: "85%" },
      }}>
        <TextField
          fullWidth
          sx={{...s, ...props.inSx}}
          name={props.inName}
          // value={state.last_name}
          // onChange={}
          margin="normal"
          type={props.inType}
          variant="outlined"
          placeholder={props.inPlaceholder}
          required
        />
      </Box>
    </Grid>
  );
}
