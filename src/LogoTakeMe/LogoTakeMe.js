import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LogoTakeMe(props) {
  return (
    <>
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "1", sm: "block" } }}
      >
        <Link
          to="/"
          className="logo-link"
          style={{
            textDecoration: "none",
            color: "#CFB4B9",
            fontWeight: "900",
            fontSize: "30px",
            textShadow: "-2px 2px 0px #543D46",
          }}
        >
          TAKE ME
        </Link>
      </Typography>
    </>
  );
}
