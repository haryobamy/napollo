import { SIZES, COLORS, FONTS, icons } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";
import music from "../../assets/images/music.jpg";
import { ColorLensRounded } from "@material-ui/icons";
export default makeStyles(() => ({
  header: {
    color: COLORS.primary,
    fontWeight: "bolder",
    fontSize: 60,
    marginTop: 150,
  },
  head: {
    color: COLORS.primary,
    fontWeight: "bolder",
    fontSize: 50,
    marginTop: 150,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  logo: {
    width: 400,
    margin: "100px auto 0px 50px",
  },
  p: {
    color: COLORS.white,
  },
  link: {
    display: "flex",
    justifyContent: "space-between",
    color: COLORS.white,
  },
  a: {
    fontSize: 12,
    textDecoration: "none",
    color: COLORS.white,
  },
  icon: {
    fontSize: 12,
    fontWeight: 200,
    marginLeft: 10,
  },
  musicImg: {
    width: 140,
    height: 140,
    objectFit: "cover",
    borderRadius: 10,
    margin: "10px 5px",
  },
  album: {
    display: "flex",
  },
  albumInfo: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 10,
    margin: "-5px 10px -18px 7px",
  },

  expandImg: {
    width: 70,
    height: 70,
    borderRadius: 10,
    objectFit: "cover",
    margin: " -25px -60px  0 -60px",
  },
  expand: {
    display: "flex",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  h5: {
    fontWeight: "bolder",
    color: COLORS.white,
  },
  pees: {
    color: COLORS.lightGray,
    fontWeight: "400",
    marginTop: -25,
  },
  listenButton: {
    backgroundColor: COLORS.black,
    color: COLORS.primary,
    fontSize: 9,
    borderRadius: 20,
    padding: "5px 25px",
    marginBottom: 45,
  },
  listen: {
    marginTop: 50,
    fontWeight: "bolder",
    fontSize: 50,
    margin: "50px 0px 0px 0px",
  },
  chooseLogo: {
    width: 90,
    height: 90,
    borderRadius: "100%",
    objectFit: "cover",
    margin: "20px 0 20px 0",
    backgroundColor: COLORS.darkGray,
  },
}));
