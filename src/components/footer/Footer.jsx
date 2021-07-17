import React from "react";
import useStyles from "./style";
import { Button, Col, Row } from "reactstrap";
import logo from "../../assets/images/logo.jpg";
import app_store from "../../assets/images/app_store.png";
import play_store from "../../assets/images/play_store.png";
import logocolored from "../../assets/images/logocolored.png";
import { COLORS } from "../../constants";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  const classes = useStyles();
  return (
    <div className="" style={{backgroundColor:COLORS.darkGray, width:"100%" }}>
        <Row className='container' style={{padding:"70px  0px 70px 70px" , height:300}} >
      <Col lg='2' sm='6' style={{textAlign:'center'}}>
        <img src={logocolored} alt=""  style={{width:100}}/>
        <p style={{color:COLORS.gray, fontSize:8, margin:"30px 0"}}>© 2020 Napollo</p>
        <div style={{display:'flex'}}>
          <a style={{margin:'0 5px', textDecoration:"none" ,color:COLORS.gray, fontSize:8}} href="#">Legal</a>
          <a style={{margin:'0 5px', textDecoration:"none" ,color:COLORS.gray, fontSize:8}} href="#">Privacy</a> 
          <a style={{margin:'0 5px', textDecoration:"none" ,color:COLORS.gray, fontSize:8}} href="#"> Cookies</a>
        </div>
      </Col>
      <Col  lg='8' sm='6'style={{textAlign:'center', }}>
          <div style={{display:'flex'}}>
          <div style={{display:'flex' , flexDirection: "column",textAlign:'start'  , margin:"0 20px 0 60px"}}>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Napollo</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">About</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Sign Up</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Forgot Password</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">contact</a>
          </div>
          <div style={{display:'flex' , flexDirection: "column",textAlign:'start'  , margin:"0 20px 0 60px"}}>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Artist Membership</a>
              <a  style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Overview</a>
              <a  style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Pricing</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Oppurtunities</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Show</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Help</a>
          </div>
          <div style={{display:'flex' , flexDirection: "column",textAlign:'start' , margin:"0 20px 0 60px"}}>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Listener</a>
              <a  style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Overview</a>
              <a  style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Pricing</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Suggested Playlist</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Discover</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Review</a>
          </div>
          <div style={{display:'flex' , flexDirection: "column",textAlign:'start'  , margin:"0 20px 0 60px"}}>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Listener</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Term of Service</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Privacy Policy</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Copyright Policy</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">cookies</a>
              <a style={{margin:'5px 2px', textDecoration:"none" ,color:COLORS.gray, fontSize:10}} href="#">Trademark</a>
          </div>
          </div>
         
      </Col>
      <Col  lg='2' sm='6' className='' style={{textAlign:'center' , backgroundColor:COLORS.primary, }}>
          <p  style={{color:COLORS.white, fontSize:10, margin:20}}>Follow Us</p>
          <div>
              <a ><FacebookIcon style={{backgroundColor:COLORS.lightGray ,borderRadius:'100%' , marginRight:10,color:COLORS.white}}/></a>
              <a><InstagramIcon style={{backgroundColor:COLORS.lightGray ,borderRadius:'100%',marginRight:10 ,color:COLORS.white}} /></a>
              <a><TwitterIcon style={{backgroundColor:COLORS.lightGray ,borderRadius:'100%' ,marginRight:10,fontSize:20,color:COLORS.white}}/></a>
              
              
              
          </div>
          <p style={{color:COLORS.white, fontSize:10, margin:20}}>Download App</p>
          <div style={{display:"flex"}}>
              <img src={play_store} alt="" style={{
                  width: 100,
                  height: 20,
                  borderRadius: 5,
                  border: "1px solid gray",
                  margin: "0 10px 1px 0",
                }} />
              <img src={app_store} alt="" style={{
                  width: 100,
                  height: 20,
                  borderRadius: 5,
                  border: "1px solid gray",
                  margin: "0 10px 1px 0",
                }} />
          </div>

      </Col>
      </Row>
    </div>
  );
};

export default Footer;
