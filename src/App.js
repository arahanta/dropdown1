import Offer from "./Component/Offer";
import {Description} from "./Component/Description";
import { Reviews } from "./Component/Reviews";
import {  Routes, Route } from "react-router-dom";
import {StyleDiv,StyledSpan,StyledLink}  from "./Component/styled";
import { useState, useEffect, useRef } from "react";


function App() {
  const [isActive, setIsActive] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (node.current && !node.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [node]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <StyleDiv>
      <StyledSpan className="left">

          
            <StyledLink to="/description" onClick={handleClick}>Description</StyledLink>
            
            <StyledLink to="/offer" onClick={handleClick}>Offer</StyledLink>
         
            <StyledLink to="/reviews" onClick={handleClick}>Reviews</StyledLink>
         
         
            
      </StyledSpan>
      <StyledSpan className="right">
        Jan 2023

      </StyledSpan>
     

      <Routes>
        
      <Route path='/description' element={isActive ? <Description ref={node} /> : null}/> 
      <Route path='/offer' element={isActive ? <Offer ref={node} /> : null}/>
      <Route path='/reviews' element={isActive ? <Reviews ref={node} /> : null}/>

      </Routes>
      </StyleDiv>
    </>
  );
}

export default App;
