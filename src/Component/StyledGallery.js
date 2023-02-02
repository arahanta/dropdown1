import styled from 'styled-components';
export const  FullScreenContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #382B2F0D;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

 export const ImageContainer = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
 export const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  justify-content: space-between;
  width: 150px;
`;

export const PrevButton = styled.button`
  margin-right: 20px;
`;

export const CloseButton = styled.button`
  margin-left: 20px;
`;
export const StyledSpan = styled.span`
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 98%;

 padding:0.5rem ;
 height:45vh ;
 /* border: 3px solid red ; */
&.Columns
{
  height:45vh ;
  background-color: #382B2F0D;
  /* border: 3px solid red ; */
  margin-bottom: -1.25rem;
}
  &.left {
    flex: 0 0 20%;
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4%;
      margin-bottom: 10px;
    
    }
  }
  &.middle {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
    height:39.453125vh ;
  
  
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      border-radius: 4%;
    }
  }
  
  &.right {
    flex: 0 0 40%;
    margin-bottom: 10px;
     align-items: center;
    justify-content: center;
   
  
    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      margin-bottom: 10px;
      border-radius: 4%;
    }
  }
  &.topbox {
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
  
  }
  &.bottombox {
    display: flex;
    width: 100%;
    height: 24vh;
    align-items: center;
    justify-content: center;
    
  }
  &.bottomleft {
    width: 48%;
    height: 24vh;
    margin-right: 10px;
   
  }
  &.bottomright {
    width: 48%;
    height: 24vh;
    position: relative;

button {
  position: absolute;
  top: 50%;
  left: 45%;
 
  /* position: absolute;
  right: 10px; */
  background-color: transparent;
  border: none;
  color:white;
}

  }
`;
