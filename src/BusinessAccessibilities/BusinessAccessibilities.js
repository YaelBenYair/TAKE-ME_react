import { Box, Grid } from "@mui/material";

export default function BusinessAccessibilities({accessibility}) {
    console.log('BusinessAccessibilities:')
    console.log(accessibility)
    console.log(accessibility[0].is_baby_carriage)
  return (
    <>
      <Grid container spacing={2}>
        {accessibility[0].is_free && (
          <Grid>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#000000",
              }}
            ></Box>
          </Grid>
        )}

        {accessibility[0].is_accessible && (
          <Grid>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#000000",
              }}
            ></Box>
          </Grid>
        )}

        {accessibility[0].is_kosher && (
          <Grid>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#000000",
              }}
            ></Box>
          </Grid>
        )}

        {accessibility[0].is_baby_carriage && (
          <Grid>
            <Box
              sx={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                backgroundColor: "#000000",
              }}
            ></Box>
          </Grid>
        )}
      </Grid>
    </>
  );
}
