import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import music from "../../assets/images/music.jpg";
export default makeStyles(() => ({
  left: {
    marginTop: 100,
    color: COLORS.white,
    fontWeight: "bolder",
    fontSize: 40,
    marginBottom: 25,
    marginLeft:20,
    // backgroundColor:COLORS.gray,
    width:670
  },
  h3:{
fontSize:40,
fontWeight:'bolder',
marginBottom:50
  },
  button: {
    backgroundColor: COLORS.transparent,
    borderRadius: 25,
    padding: "10px 35px",
  },
  img: {
    width: "700px",
    height: "600px",
    justifyContent: "center",
    alignItems: "center",
  },
}));
