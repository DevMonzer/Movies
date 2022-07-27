import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  featuredCardContainer: {
    marginBottom: "20px",
    display: "flex",
    justifyContent: "center",
    height: "490px",
    textDecoration: "none",
  },
  card: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
  },
  cardRoot: {
    position: "relative",
  },
}));
