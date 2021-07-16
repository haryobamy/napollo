import React from "react";
import useStyles from "./style";
import { Button, Col, Row } from "reactstrap";
import logo from "../../assets/images/logo.jpg";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import DoneIcon from "@material-ui/icons/Done";
import FavoriteIcon from "@material-ui/icons/Favorite";
import music from "../../assets/images/music.jpg";
import bg from "../../assets/images/bg2.jpg";
import { COLORS } from "../../constants";
import Album from "./Album";
import app_store from "../../assets/images/app_store.png";
import play_store from "../../assets/images/play_store.png";
import record from "../../assets/images/record.png";
import logocolored from "../../assets/images/logocolored.png";
import logoWhite from "../../assets/images/logowhite.png";
import phoneimg2 from "../../assets/images/phoneimg2.png";
import phoneimg3 from "../../assets/images/phoneimg3.png";
import phoneimg from "../../assets/images/phoneimg.png";
import faded from "../../assets/images/faded.jpg";
import fly from "../../assets/images/fly.jpg";
import letdance from "../../assets/images/letdance.jpg";
import deathbed from "../../assets/images/deathbed.jpg";
import hateme from "../../assets/images/hateme.jpg";
import Testimonial from "./Testimonial";

const About = () => {
  const albumData = [
    {
      id: 1,
      src: bg,
      song: "Death Bed",
      like: 6,
      artist: "Powerful",
    },
    {
      id: 2,
      src: faded,
      song: "Faded",
      like:7,
      artist: "Alan Walker",
    },
    {
      id: 3,
      src: hateme,
      song: "Hate Me",
      like: 1.9,
      artist: "Ellie Gaulding",
    },
    {
      id: 4,
      src: music,
      song: "Made in Lagos",
      like: 49,
      artist: "Wizkid",
    },
    {
      id: 5,
      src: deathbed,
      song: "Feelings",
      like: 698,
      artist: "Jeo Boy",
    },
    {
      id: 6,
      src: letdance,
      song: "Legend",
      like: 46,
      artist: "Fireboy",
    },
    {
      id: 7,
      src: fly,
      song: "Made in Lagos",
      like: 48,
      artist: "Wizkid",
    },
    {
      id: 8,
      src: music,
      song: "Feelings",
      like: "1.8k",
      artist: "Jeo Boy",
    },
    {
      id: 9,
      src: faded,
      song: "Legend",
      like: 474,
      artist: "Fireboy",
    },
  ];

  const singlesData = [
    {
      id: 1,
      image: letdance,
      song: "Let's Dance",
      like: 6,
      artist: "Bowie",
    },
    {
      id: 2,
      image: fly,
      song: "Bad Romanace",
      like: 96,
      artist: "Rihana",
    },
    {
      id: 3,
      image: hateme,
      song: "fly",
      like: 34,
      artist: "Coldplay",
    },
    {
      id: 4,
      image: deathbed,
      song: "Made in Lagos",
      like: 72,
      artist: "Wizkid",
    },
    {
      id: 5,
      image: music,
      song: "Feelings",
      like: 98,
      artist: "Jeo Boy",
    },
    {
      id: 6,
      image: fly,
      song: "Legend",
      like: 76,
      artist: "Fireboy",
    },
  ];

//   const { albums, setAlbums } = React.useState(albumData);
//   const { singles, setSingles } = React.useState(singlesData);
//   const [like, setLike] = React.useState(albumData.like)
//   const[isLiked, setIsLiked] = React.useState(false)

//   const likeHandler =() => {
//     setLike(isLiked ? like-1 : like+1)
//     setIsLiked(!isLiked)
//     console.log('clicked')
//   }

  console.log(albumData.like);
  

  const classes = useStyles();
  return (
    <div>
      <div className=" container mx-5 ">
        <Row>
          <Col lg="6" sm="6">
            <h1 className={classes.header}>About Napollo</h1>
            <p className={classes.p}>
              Napollo is a music streaming service that connects artistes to
              listeners in a way that has never been done before.
            </p>
            <p className={classes.p}>
              Artists, musicians, music lovers, producers, no matter your taste
              or skills are, we are here to serve you the best all around the
              world.
            </p>
          </Col>
          <Col lg="6" sm="6">
            <img src={logocolored} alt="" className={classes.logo} />
          </Col>
        </Row>

        <Row>
          <Col lg="6" sm="6" className="">
            <h1 className={classes.header}>What's Hot!</h1>
            <div className='my-5'>
            <div className={classes.link}>
              <h6>Album</h6>
              <a href="#" className={classes.a}>
                View All
                <span>
                  <ArrowForwardIosIcon className={classes.icon} />
                </span>
              </a>
            </div>
            <div
              className="d-flex flex-wrap "
              style={{
                
                justifyContent: "space-between",
                alignItem: "center",
                flexDirection: "row",
              }}
            >
              {albumData.map((album) => (
                <Album
                  className={classes.album}
                  key={album.id}
                  likes={album.like}
                  artist={album.artist}
                  song={album.song}
                  src={album.src}
                  

                //   likeHandler={likeHandler}
                />
              ))}
                 </div>
                 </div>
                 {/* single section */}
                 <div>
            <div className={classes.link}>
              <h6>Singles & EP's</h6>
              <a href="#" className={classes.a}>
                View All{" "}
                <span>
                  <ArrowForwardIosIcon className={classes.icon} />
                </span>
              </a>
            </div>
            <div
              className="d-flex flex-wrap "
              style={{
                
                justifyContent: "space-between",
                alignItem: "center",
                flexDirection: "row",
              }}
            >
              {singlesData.map((single) => (
                <Album
                  className={classes.album}
                  key={single.id}
                  likes={single.like}
                  artist={single.artist}
                  song={single.song}
                  src={single.image}
                />
              ))}
                 </div>
                 </div>
           
          
          </Col>
          <Col lg="6" sm="6">
            <img src={phoneimg3} alt="" style={{ margin: "200px auto" }} />
          </Col>
        </Row>
        {/* expansion section */}
        <Row>
          <Col lg="6" sm="6">
            <img
              src={phoneimg2}
              alt=""
              style={{ width: 200, margin: "300px 50px", height: 400  }}
            />
          </Col>
          <Col lg="6" sm="6" style={{ marginBottom: 250 }}>
            <h1 className={classes.header}>Expansion Page</h1>
            <p className={classes.p}>
              Discover artistes all around the world by their location via the
              expansion page. Also, get to know the top artistes in any location
              on the globe.
            </p>
            <div>
              <div className={classes.expand}>
                <h5 className={classes.h5}>01</h5>
                <img src={bg} alt="" className={classes.expandImg} />
                <div className={classes.pees}>
                  <p>Light Out</p>
                  <p>Coldplay</p>
                </div>
                <FavoriteBorderIcon />
              </div>
            </div>
            <div>
              <div className={classes.expand}>
                <h5 className={classes.h5}>02</h5>
                <img src={bg} alt="" className={classes.expandImg} />
                <div className={classes.pees}>
                  <p></p>
                  <p>Green Tuska</p>
                </div>
                <FavoriteIcon style={{ color: COLORS.primary }} />
              </div>
            </div>
            <div>
              <div className={classes.expand}>
                <h5 className={classes.h5}>03</h5>
                <img src={bg} alt="" className={classes.expandImg} />
                <div className={classes.pees}>
                  <p></p>
                  <p>Bruno Mars</p>
                </div>
                <FavoriteBorderIcon />
              </div>
            </div>
            <div>
              <div className={classes.expand}>
                <h5 className={classes.h5}>04</h5>
                <img src={bg} alt="" className={classes.expandImg} />
                <div className={classes.pees}>
                  <p>.</p>
                  <p>Cardi </p>
                </div>
                <FavoriteBorderIcon />
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div className="mt-5">
        <Row style={{ backgroundColor: COLORS.primary }}>
          <Col lg="6" sm="6">
            <img
              src={record}
              alt=""
              style={{
                width: 250,
                height: 250,
                textAlign: "center",
                margin: "40px 120px",
              }}
            />
          </Col>
          <Col lg="6" sm="6" className="">
            <div className="justify-content-center mx-5 ">
              <h1 className={classes.listen}>
                Listen and enjoy all trending music
              </h1>
              <ul style={{ listStyleType: "square" }}>
                <li>What’s hot</li>
                <li>By genre</li>
                <li>By location</li>
                <li>Lot’s more...</li>
              </ul>
              <Button className={classes.listenButton}>Start Listening</Button>
            </div>
          </Col>
        </Row>
      </div>
      {/* plan selection section */}
      <div>
        <Row>
          <h1 className={`${classes.head} mb-5 `}>Choose Your Plan</h1>
          <Col lg="3" sm="6"></Col>
          <Col lg="3" sm="6">
            <div
              style={{
                backgroundColor: COLORS.primary,
                textAlign: "center",
                color: COLORS.white,
                border: "1px solid white",
              }}
            >
              <img
                src={logoWhite}
                alt=""
                style={{
                  backgroundColor: "#eab676",
                  width:90,
                  height: 90,
                  borderRadius: "100%",
                  objectFit: "contain",
                  margin: "20px 0 20px 0",
                  padding:10
                  
                }}
              />
              <h5>Free</h5>
              <p style={{ color: COLORS.lightGray, fontSize: 10 }}>
                Enjoy unlimited online music
              </p>
              <hr
                style={{
                  color: "1px solid gray",
                  width: "10%",
                  height: "2px",
                  margin: "5px auto 10px auto",
                }}
              />
              <div className="mx-4" style={{ textAlign: "start" }}>
                <h6 style={{ color: COLORS.black }}>
                  <span style={{ fontSize: 20, fontWeight: "bolder" }}>$</span>
                  7.99
                  <span style={{ color: COLORS.white, fontWeight: "200" }}>
                    /month
                  </span>
                </h6>
                <p style={{ fontSize: 14, fontWeight: 100, marginBottom: -10 }}>
                  start with one month free trial
                </p>
                <hr />
                <Button
                  disable
                  style={{
                    borderRadius: 25,
                    backgroundColor: "rgb(204, 194, 194)",
                    padding: "2px 25px",
                    fontSize: 10,
                    border: "none",
                    marginTop: -10,
                    marginBottom: 50,
                  }}
                >
                  features
                </Button>
              </div>
              <div>
                <ul
                  className="mx-4"
                  style={{
                    listStyleType: "*",
                    marginBottom: 50,
                    textAlign: "start",
                    fontSize: 14,
                  }}
                >
                  <li style={{ marginBottom: 50 }}>Online Listening</li>
                  <li style={{ marginBottom: 20 }}>Regular Audio</li>
                  <li style={{ marginBottom: 20 }}>Offline Mode</li>
                  <li style={{ marginBottom: 20 }}>30 Skips per day</li>
                  <li style={{ marginBottom: 60 }}>With Ads</li>
                </ul>
              </div>

              <Button
                style={{
                  backgroundColor: COLORS.white,
                  color: COLORS.primary,
                  borderRadius: 25,
                  border: "none",
                  padding: "5px 70px",
                  margin: "30px 0",
                }}
              >
                Activate
              </Button>
            </div>
          </Col>
          {/* new plan section */}
          <Col lg="3" sm="6">
            <div
              style={{
                backgroundColor: COLORS.transparent,
                textAlign: "center",
                color: COLORS.primary,
              }}
            >
              <img src={logocolored} alt="" className={classes.chooseLogo} />
              <h5>Premium</h5>
              <p style={{ fontSize: 10 }}>Napollo Premium Mode sound Better</p>
              <hr
                style={{
                  color: "1px solid gray",
                  width: "10%",
                  height: "2px",
                  margin: "5px auto 10px auto",
                }}
              />
              <div className="mx-4" style={{ textAlign: "start" }}>
                <h6 style={{ color: COLORS.white }}>
                  <span style={{ fontSize: 20, fontWeight: "bolder" }}>$</span>
                  7.99
                  <span style={{ color: COLORS.primary, fontWeight: "200" }}>
                    /month
                  </span>
                </h6>
                <p style={{ fontSize: 14, fontWeight: 100, marginBottom: -10 }}>
                  start with one month free trial
                </p>
                <hr />
                <Button
                  disable
                  style={{
                    borderRadius: 25,
                    backgroundColor: COLORS.lightGray,
                    padding: "2px 25px",
                    fontSize: 10,
                    border: "none",
                    marginTop: -10,
                    marginBottom: 50,
                  }}
                >
                  features
                </Button>
              </div>
              <div>
                <ul
                  className="mx-4"
                  style={{
                    listStyleType: "*",
                    marginBottom: 50,
                    textAlign: "start",
                    fontSize: 14,
                  }}
                >
                  <li style={{ marginBottom: 20 }}>Offline Mode</li>
                  <li style={{ marginBottom: 20 }}>High Quality Audio</li>
                  <li style={{ marginBottom: 20 }}>No Ads</li>
                  <li style={{ marginBottom: 20 }}>Unlimited Skips</li>
                  <li style={{ marginBottom: 20 }}>High Quality Audio</li>
                  <li style={{ marginBottom: 20 }}>No Ads</li>
                  <li style={{ marginBottom: -40 }}>Unlimited Skips</li>
                </ul>
              </div>

              <Button
                style={{
                  backgroundColor: COLORS.primary,
                  color: COLORS.white,
                  borderRadius: 25,
                  border: "none",
                  padding: "5px 70px",
                  margin: "30px 0",
                }}
              >
                Activate
              </Button>
            </div>
          </Col>
          <Col lg="3" sm="6"></Col>
        </Row>
      </div>
      <div>
      <Row>
          {/* <Col lg='12' sm='6'> */}
          <h1 className={`${classes.head} mb-5 `}>Testimonials</h1>
        

    <Testimonial/>
    {/* </Col> */}
    </Row>
      </div>
      <div>
        <Row>
          <Col lg="6" sm="6">
              <img src={phoneimg} alt="" style={{margin:'170px auto 170px 70px',borderRadius:20,border:'2px solid black'}} />
          </Col>
          <Col lg="6" sm="6">
            <h1
              className={`${classes.head} mx-5 `}
              style={{ textAlign: "start" }}
            >
              Download our iOS and Android apps{" "}
              <span style={{ color: COLORS.white }}> for Free</span>
            </h1>
            <p
              className="mx-5"
              style={{ textAlign: "start", fontSize: 12, width: 300 }}
            >
              Downloaded over 10 million times in less than six months, our
              cross-platform app allows you to listen to, discover, favorite,
              and share music on the go.
            </p>
            <div className="mx-5" style={{ textAlign: "start" }}>
              <img
                src={app_store}
                alt=""
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 10,
                  border: "1px solid gray",
                  margin: "0 10px 100px 0",
                }}
              />
              <img
                src={play_store}
                alt=""
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 10,
                  border: "1px solid gray",
                  margin: "0 10px 100px 0",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default About;
