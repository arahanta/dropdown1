import React, { useState } from 'react';
import Img1 from './images/img 1.png';
import Img2 from './images/image 2.png';
import Img3 from './images/image 3.png';
import Img4 from './images/image 4.png';
import map from './images/Map.png';
import { FullScreenContainer, StyledSpan, ImageContainer,ButtonContainer,PrevButton,CloseButton} from './StyledGallery';
import './Hidden.css'

const images = [Img1, Img2, Img3, Img4];

export const PhotoGallery = () => {
  const [index, setIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  };

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  };

  return (
    <div>
      {isFullScreen ? (
        <FullScreenContainer >
        < ImageContainer src={images[index]} alt="" />
        <ButtonContainer>
            <PrevButton onClick={handlePrev}>Prev</PrevButton>
            <button onClick={handleNext}>Next</button>
            <CloseButton onClick={() => setIsFullScreen(false)}>Close</CloseButton>
            </ButtonContainer>
        </FullScreenContainer>
      ) : (
        <StyledSpan className="Columns">
          <StyledSpan className="left">
            <img src={Img1} alt="" />
          </StyledSpan>
          <StyledSpan className="middle">
            <StyledSpan className="topbox">
              <img src={Img2} alt="" />
            </StyledSpan>
            <StyledSpan className="bottombox">
              <StyledSpan className="bottomleft">
                <img src={Img3} alt="" />
              </StyledSpan>
              <StyledSpan className="bottomright">
                <button onClick={() => setIsFullScreen(true) }> + MORE</button>
                <img src={Img4} alt="" />
              </StyledSpan>
            </StyledSpan>
          </StyledSpan>
          <StyledSpan className="right">
            <img src={map} alt="" />
          </StyledSpan>
        </StyledSpan>
      )}
    </div>
  );
};

export default PhotoGallery;
