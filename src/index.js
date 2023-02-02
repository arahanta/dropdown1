import React from 'react';
import ReactDOM from 'react-dom/client';

import Main from './Main';
// import {Schedule} from './ScheduleRouting';
import { BrowserRouter } from 'react-router-dom';
import { Pricing } from './PricingRouting';
import {PhotoGallery} from './Component/PhotoGallery'

import { StyledLine,StyleDiv } from './Component/styled';

import Review from './Component/Hostel_description/Review';
import Hostelname from './Component/Hostelname';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <PhotoGallery/>
    <Hostelname/>
    <BrowserRouter>
    <StyleDiv className='box'>
      <StyleDiv className='left_box'>
        <Main />
        <StyledLine/>
        <Pricing/>
      </StyleDiv>
      <StyleDiv className='right_box'>
        <Review />
      </StyleDiv>
    
    </StyleDiv>
    
    </BrowserRouter>
    
  </React.StrictMode>
);


