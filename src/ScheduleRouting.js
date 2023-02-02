import {  useEffect,useState, useRef } from "react";
import {  Routes, Route } from "react-router-dom";
import {StyleDiv,StyledLink}  from "./Component/styled";
import { Scheedule } from "./Schedule";

 export function Schedule()
{
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
    return(
        <>
        <StyleDiv className="left">
            <StyledLink to={"/schedule"} onClick={handleClick}>schedule</StyledLink>
        </StyleDiv>
        <Routes>
        <Route path='/schedule' element={isActive ? <Scheedule ref={node} /> : null}/> 
        </Routes>
        </>
    )
}
