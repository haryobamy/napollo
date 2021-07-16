import React from "react";
import useStyles from "./style";
import { Button } from "reactstrap";
import logocolored from '../../assets/images/logocolored.png'
import { CloudUpload, Search,Menu } from "@material-ui/icons";
import app_store from '../../assets/images/app_store.png'
import play_store from '../../assets/images/play_store.png'

const Navbar = () => {
  const classes = useStyles();
  return (
    <div className='mx-2'>
      <div className={classes.root}>
        <div className={classes.left}>
          
         <Menu fontSize='large' className={classes.menuIcon} />
          <img src={logocolored} alt=""  className={classes.logo}/>
        </div>
        <div  className={classes.center}>
            <div className={classes.searchbar}>
                <input type="text" className={classes.searchInput} placeholder='search for artist, songs and albums' />
            <Search className={classes.searchIcon}/>
            </div>
            
        </div>
        <div className={classes.right}>
            <img src={play_store} alt="" className={classes.img} />
            <img src={app_store} alt="" className={classes.img} />
            <a href='#' className={classes.signup}>SignUp/Login</a>
            <Button className={classes.upload}><span><CloudUpload/></span> Upload</Button>
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
