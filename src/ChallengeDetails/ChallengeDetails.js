import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import ChallengeInput from "./ChallengeInput";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs from 'dayjs';

export default function ChallengDetails() {

  const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <ChallengeInput
          inName={"challenge_name"}
          inType={"text"}
          inPlaceholder={"Challenge name"}
        />
        <ChallengeInput
          inName={"date"}
          inType={"date"}
          inPlaceholder={"dd/mm/yy"}
        />
        <ChallengeInput
          inName={"description"}
          inType={"text"}
          inPlaceholder={"Description"}
          inSx={{"& .MuiOutlinedInput-root": {
            "& > fieldset": { borderRadius: "30px", border: "3px solid #A7A9AC", height: '135px' },
          },}}
        />
        <ChallengeInput
          inName={"category"}
          inType={"text"}
          inPlaceholder={"Category"}
        />
        <ChallengeInput
          inName={"challenge_name"}
          inType={"time"}
          inPlaceholder={"Challenge name"}
        />
        {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["TimePicker"]}>
            <TimePicker
              label="Controlled picker"
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider> */}
      </Grid>
    </Box>
  );
}
