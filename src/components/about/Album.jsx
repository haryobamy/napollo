import React from "react";
import useStyles from "./style";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import music from "../../assets/images/music.jpg";
import bg from "../../assets/images/bg2.jpg";
import { COLORS } from "../../constants";

const Album = ({ likes, artist, song, src }) => {
  const classes = useStyles();
  const [like, setLike] = React.useState(likes);
  const [isLiked, setIsLiked] = React.useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
    console.log("clicked");
  };
  return (
    <div>
      <div>
        <img src={src} alt="" className={classes.musicImg} />
        <div className={classes.albumInfo}>
          <p  style={{ color:COLORS.gray }}>{song}</p>
          {isLiked ? (
            <FavoriteBorderIcon
              style={{ fontSize: 14,color:COLORS.gray }}
              onClick={likeHandler}
              
            />
          ) : (
            <FavoriteIcon style={{ fontSize: 14,color:COLORS.primary }} onClick={likeHandler} />
          )}
        </div>
        <div className={classes.albumInfo}>
          <p style={{ color: COLORS.primary  }}>{artist}</p>
          <p  style={{ color:!isLiked? COLORS.primary : COLORS.gray }}>{like}</p>
        </div>
      </div>
    </div>
  );
};

export default Album;

{
  /* <div>
    className={classes.album}      
    
    <img src={music} alt="" className={classes.musicImg} />
      </div> */
      

}
{
  /* <div>
          <img src={music} alt="" className={classes.musicImg} />
      </div> */
      
}

{
  /* <div className={classes.albumInfo}>
              <p>{song}</p>
              <FavoriteBorderIcon/>

          </div>
          <div className={classes.albumInfo}>
              <p style={{color:COLORS.primary}}>{artist}</p>
              <p>{like}</p>
          </div> */
}
