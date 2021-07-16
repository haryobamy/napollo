import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import music from "../../assets/images/music.jpg";
export default makeStyles(() => ({
  left: {
    marginTop: 40,
    color: COLORS.white,
    fontWeight: "bolder",
    fontSize: 40,
    marginBottom: 25,
  },
  button: {
    backgroundColor: COLORS.transparent,
    borderRadius: 25,
    padding: "5px 25px",
  },
  img: {
    width: "400px",
    height: "300px",
    justifyContent: "center",
  },
}));
