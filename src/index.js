import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// import {Schedule} from './ScheduleRouting';
import { BrowserRouter } from 'react-router-dom';
import { Pricing } from './PricingRouting';

import { StyledLine,StyleDiv } from './Component/styled';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <StyleDiv className='box'>
    <App />
   
    
    <StyledLine/>
    <Pricing/>
    </StyleDiv>
    
    </BrowserRouter>
    
  </React.StrictMode>
);


