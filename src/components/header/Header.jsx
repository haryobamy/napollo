import React from "react";
import { Button, Row,Col } from "reactstrap";
import useStyles from "./style";
import headeimg from "../../assets/images/headeimg.png"
import { height } from "@material-ui/system";

const Header = () => {
    const classes = useStyles();
  return (
    <div>
      <Row className='container mx-4 mb-5'> 
        <Col lg="6" sm="6">
          <div className={classes.left} >
            <h3 >
              More fans, More Gigs, Less Effort Get better feedback, wider
              exposure and deeper industry access without ever switching tabs.
            </h3>
            <Button className={classes.button} > Let's get Started</Button>
          </div>
        </Col>
        <Col lg="6" sm="6">
            <img src={headeimg} alt='' className={classes.img}
            
             
            />
        </Col>
      </Row>
    </div>
  );
};

export default Header;
