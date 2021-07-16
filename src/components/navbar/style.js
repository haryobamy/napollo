import { SIZES, COLORS, FONTS, icons, images } from "../../constants";
import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    backgroundColor: COLORS.darkGray,
    height: "70px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    // position: "sticky",
    // justifyContent: "center",
    // position: "sticky",
    // top: 0,
    // zIndex: "999",
  },
  right: {
    display: "flex",
    flex: 5,
    marginLeft: "80px",
  },
  center: {
    display: "flex",
    flex: 4,
  },
  left: {
    display: "flex",
    flex: 3,
  },
  logo: {
    width: "80px",
    height: "60px",
  },
  menuIcon: {
    color: "#fff",
    marginTop: "10px",
    marginRight: "30px",
  },
  searchInput: {
    border: "none",
    width: "75%",
    marginLeft: "20px",
    backgroundColor: COLORS.lightGray,
    fontSize: 10,
  },

  searchbar: {
    width: "100%",
    height: "30px",
    backgroundColor: COLORS.lightGray,
    display: "flex",
    alignItems: "center",
    borderRadius: 30,
    marginLeft: "-20px",
  },
  searchIcon: {
    fontSize: "20px",
    color: "gray",
    marginLeft: 10,
  },
  img: {
    height: "40px",
    marginRight: "20px",
    borderRadius: 10,
  },
  signup: {
    fontSize: 20,
    marginRight: 10,
    textDecoration: "none",
    color: COLORS.white,
    fontWeight: "300",
  },
  upload: {
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    fontWeight: "100",
    marginRight: 10,
    display: "flex",
    justifyContent: "space-between",
    padding: "3px 25px",
  },
}));
