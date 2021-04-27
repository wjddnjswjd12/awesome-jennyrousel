import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const JennyCarousel = ({
  NUM_OF_DATAS = 8,
  SLIDE_WIDTH = 308,
  SLIDE_HEIGHT = 540,
  SLIDE_MARGIN = 5,
  NUM_OF_SLIDES = 4,
  BACKGROUND_COLOR = "#fff",
  BUTTON_SIZE = "20",
  FONT_SIZE = "15",
  BUTTON_TYPE = "HORIZONTAL",
  children
}) => {
  const slideListRef = useRef();
  const [currentX, setCurrentX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(NUM_OF_SLIDES);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);
  const [page, setPage] = useState(1);
  let MOVE_AMOUNT = 0;

  const getSlideListWidth = slidesToMove => {
    return (SLIDE_WIDTH + SLIDE_MARGIN * 2) * slidesToMove;
  };

  const moveSlide = (moveAmount, nextIndex) => {
    slideListRef.current.style.transition = "0.5s ease-in-out";
    slideListRef.current.style.transform = `translateX(${moveAmount}px)`;
    setCurrentIndex(nextIndex);
    setCurrentX(moveAmount);
  };

  const handleSlide = direction => {
    if (direction === "LEFT") {
      const remainingSlides = currentIndex - NUM_OF_SLIDES;
      const nextIndex = remainingSlides >= NUM_OF_SLIDES ? currentIndex - NUM_OF_SLIDES : currentIndex - remainingSlides;
      MOVE_AMOUNT = remainingSlides >= NUM_OF_SLIDES ? currentX + getSlideListWidth(NUM_OF_SLIDES) : currentX + getSlideListWidth(remainingSlides);
      moveSlide(MOVE_AMOUNT, nextIndex);
      setPage(page - 1);
      if (nextIndex < NUM_OF_DATAS) setRightDisabled(false);
      if (MOVE_AMOUNT === 0) setLeftDisabled(true);
    } else {
      const remainingSlides = NUM_OF_DATAS - currentIndex;
      const nextIndex = remainingSlides >= NUM_OF_SLIDES ? currentIndex + NUM_OF_SLIDES : currentIndex + remainingSlides;
      MOVE_AMOUNT = remainingSlides >= NUM_OF_SLIDES ? currentX - getSlideListWidth(currentIndex) : currentX - getSlideListWidth(remainingSlides);
      moveSlide(MOVE_AMOUNT, nextIndex);
      setPage(page + 1);
      if (MOVE_AMOUNT < 0) setLeftDisabled(false);
      if (nextIndex >= NUM_OF_DATAS) setRightDisabled(true);
    }
  };

  const getAvailableMovesLeft = () => {
    if (NUM_OF_DATAS % NUM_OF_SLIDES !== 0) {
      return parseInt(NUM_OF_DATAS / NUM_OF_SLIDES) + 1;
    } else return parseInt(NUM_OF_DATAS / NUM_OF_SLIDES);
  };

  return /*#__PURE__*/React.createElement(CarouselContainer, {
    displayType: BUTTON_TYPE,
    backgroundColor: BACKGROUND_COLOR
  }, BUTTON_TYPE === "HORIZONTAL" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledIconButton, {
    buttonSize: BUTTON_SIZE,
    onClick: () => handleSlide("LEFT"),
    disabled: leftDisabled
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleLeft
  })), /*#__PURE__*/React.createElement(CarouselWrapper, {
    totalWidth: (SLIDE_WIDTH + SLIDE_MARGIN * 2) * NUM_OF_SLIDES,
    height: SLIDE_HEIGHT
  }, /*#__PURE__*/React.createElement(CarouselSlideList, {
    totalWidth: (SLIDE_WIDTH + SLIDE_MARGIN * 2) * NUM_OF_DATAS,
    ref: slideListRef,
    height: SLIDE_HEIGHT
  }, children)), /*#__PURE__*/React.createElement(StyledIconButton, {
    buttonSize: BUTTON_SIZE,
    onClick: () => handleSlide("RIGHT"),
    disabled: rightDisabled
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleRight
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonDiv, {
    fontSize: FONT_SIZE,
    totalWidth: (SLIDE_WIDTH + SLIDE_MARGIN * 2) * NUM_OF_SLIDES
  }, /*#__PURE__*/React.createElement(ButtonTextWrapper, null, /*#__PURE__*/React.createElement(StyledIconButton, {
    buttonSize: BUTTON_SIZE,
    onClick: () => handleSlide("LEFT"),
    disabled: leftDisabled
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleLeft
  })), /*#__PURE__*/React.createElement("div", null, `${page} / ${getAvailableMovesLeft()}`), /*#__PURE__*/React.createElement(StyledIconButton, {
    buttonSize: BUTTON_SIZE,
    onClick: () => handleSlide("RIGHT"),
    disabled: rightDisabled
  }, /*#__PURE__*/React.createElement(FontAwesomeIcon, {
    icon: faAngleRight
  })))), /*#__PURE__*/React.createElement(CarouselWrapper, {
    totalWidth: (SLIDE_WIDTH + SLIDE_MARGIN * 2) * NUM_OF_SLIDES,
    height: SLIDE_HEIGHT
  }, /*#__PURE__*/React.createElement(CarouselSlideList, {
    ref: slideListRef,
    totalWidth: (SLIDE_WIDTH + SLIDE_MARGIN * 2) * NUM_OF_DATAS,
    height: SLIDE_HEIGHT
  }, children))));
};
/* ---------- SLIDE STYLEDCOMPONENT START ---------- */


const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${props => props.displayType === "HORIZONTAL" ? "row" : "column"};
  align-items: center;
  justify-content: space-evenly;
  background-color: ${props => props.backgroundColor};
`;
const ButtonDiv = styled.div`
  width: ${props => props.totalWidth}px;
  display: flex;
  justify-content: flex-end;
  font-size: ${props => props.fontSize}px;
  margin-bottom: 35px;
`;
const ButtonTextWrapper = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CarouselSlideList = styled.div`
  display: flex;
  height: ${props => props.height}px;
  width: ${props => props.totalWidth}px;
  gap: ${props => props.SLIDE_MARGIN * 2};
`;
const CarouselWrapper = styled.div`
  overflow: hidden;
  width: ${props => props.totalWidth}px;
  height: ${props => props.height}px;
`;
const StyledIconButton = styled.button`
  all: unset;
  border-radius: 5px;
  cursor: pointer;
  font-size: ${props => props.buttonSize}px;
  color: ${({
  disabled
}) => !disabled ? "#333" : "#a9a9a9"};
  cursor: ${({
  disabled
}) => disabled ? "default" : "pointer"};
`;
/* SLIDE STYLEDCOMPONENT END */

export default JennyCarousel;