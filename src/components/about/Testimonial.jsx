import React, { Component } from "react";
import ReactDOM from "react-dom";
import data from "./data";
import cx from "classnames";
import NonPassiveTouchTarget from "./NonPassiveTouchTarget";
import TouchCarousel, { clamp } from "react-touch-carousel";
import touchWithMouseHOC from "react-touch-carousel/lib/touchWithMouseHOC";
import bg from "../../assets/images/bg2.jpg";
import { COLORS } from "../../constants";
import { Button, Col, Row } from "reactstrap";
import useStyles from "./style";

import "./style.css";

const cardSize = 300;
const cardPadCount = 3;
const carouselWidth = clamp(window.innerWidth, 0, 960);

function CarouselContainer(props) {
  const {
    cursor,
    carouselState: { active, dragging },
    ...rest
  } = props;
  let current = -Math.round(cursor) % data.length;
  while (current < 0) {
    current += data.length;
  }
  // Put current card at center
  const translateX =
    (cursor - cardPadCount) * cardSize + (carouselWidth - cardSize) / 2;
  return (
    <NonPassiveTouchTarget
      className={cx("carousel-container", {
        "is-active": active,
        "is-dragging": dragging
      })}
    >
      <NonPassiveTouchTarget
        className="carousel-track"
        style={{ transform: `translate3d(${translateX}px, 0, 0)` }}
        {...rest}
      />

      <div className="carousel-pagination-wrapper">
        <ol className="carousel-pagination">
          {data.map((_, index) => (
            <li key={index} className={current === index ? "current" : ""} />
          ))}
        </ol>
      </div>
    </NonPassiveTouchTarget>
  );
}

const Container = touchWithMouseHOC(CarouselContainer);

const Testimonial = () => {
    const classes = useStyles();

 function renderCard(index, modIndex) {
    const item = data[modIndex];
    return (
      <div
        key={index}
        className="carousel-card"
        onClick={() => console.log(`clicked card ${1 + modIndex}`)}
      >
        {/* <div
          className="carousel-card-inner"
          style={{ backgroundColor: item.background }}
        >
          <div className="carousel-title">{item.title}</div>
          <div className="carousel-text">{item.text}</div>
        </div> */}
         
          <div
            style={{
              backgroundColor: COLORS.darkGray,
              width: "450px",
              height: "150px",
              margin: "0px 30px",
              textAlign: "center",
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 10,
            }}
          >
            <p
              style={{
                margin: "50px auto 0px auto",
                color: COLORS.white,
                fontWeight: "100",
                fontSize: 14,
              }}
            >
             {item.text2}
            </p>
            <p
              style={{
                margin: "0px auto 40px auto",
                color: COLORS.white,
                fontWeight: "100",
                fontSize: 14,
              }}
            >
             {item.text}
            </p>
            <div
              style={{
                marginTop: -30,
                fontSize: 12,
                textAlign: "start",
                marginLeft: 300,
              }}
            >
              <p style={{ color: COLORS.white, marginBottom: -2 }}>
                {item.name}
              </p>
              <p style={{ color: COLORS.primary }}>{item.genere}</p>
            </div>
            <img
              src={bg}
              alt=""
              style={{
                width: 70,
                height: 70,
                borderRadius: "100%",
                objectFit: "cover",
                marginLeft: 350,
                marginTop: -30,
              }}
            />
          </div>
       
      </div>
    );
  }

  
    return (
      <React.StrictMode>
        <TouchCarousel
          component={Container}
          cardSize={cardSize}
          cardCount={data.length}
          cardPadCount={cardPadCount}
          loop={true}
        //   autoplay={enableAutoplay ? 2e3 : false}
        //   autoplay={true}
          renderCard={renderCard}
          onRest={index => console.log(`rest at index ${index}`)}
          onDragStart={() => console.log("dragStart")}
          onDragEnd={() => console.log("dragEnd")}
          onDragCancel={() => console.log("dragCancel")}
        />
      </React.StrictMode>
    );
  }

  export default Testimonial;


