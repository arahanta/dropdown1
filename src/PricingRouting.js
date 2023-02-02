import {useEffect,useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { StyleDiv, StyledLink } from './Component/styled';
import { Priciing } from './Priciing.js';

export function Pricing() {
  const [isActive, setIsActive] = useState(false);
  const node = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (node.current && !node.current.contains(event.target)) {
        setIsActive(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [node]);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <StyleDiv className="left">
        <StyledLink to={"/pricing"} onClick={handleClick}>Pricing</StyledLink>
      </StyleDiv>

      <Routes>
        <Route path="/pricing" element={isActive ? <Priciing ref={node} /> : null}/>
      </Routes>
    </>
  )
}
