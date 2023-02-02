import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyleDiv=styled.div`
  list-style-type: none;
  text-align: none;
  font-family: Helvetica, Sans-Serif;
  font-size: 1rem;
  letter-spacing:0.025rem;
  text-decoration: none;
  margin-top: 0.3rem;
  color:  #382B2F;
  margin-bottom: 0.7rem;


  &.box
  {
    min-height:35vh;
    width:60vw;
    display: flex;
    flex-direction: row;
  }
 
  &.right_box
  {
    max-width: 38vw;
    max-height: 35vh;
  }
  &.left_box
  {
    padding-left: 1rem;
  }

  width:60vw;
  &.left
  {
  display: inline-flex;
  float :left;
  width:60vw;
  flex-direction: row;
  padding-left: 2rem;
  justify-content: space-between;
  /* margin-top: 5px;  */
  
  color: #382B2F;
  }

  &.container:empty{
    display: none;
 }

`
export const StyledSpan=styled.span`
font-size: 1rem;
font-family: Helvetica, Sans-Serif;
color:  #382B2F;
margin-bottom: 0.7rem;


&.left
{
 
  display: inline-flex;
  float :left;
  width:27vw;
  flex-direction: row;
  padding-left: 2rem;
  justify-content: space-between;
  margin-top: 5px; 
  color: #382B2F;
  margin-bottom: -0.5rem;
  
}
&.right
{
    display: inline-flex;
  float :right;
  justify-content:flex-end;
  margin-right: 2rem;
  color: #382B2F;
  width: 28vw;
  margin-bottom: -0.5rem;
 
  
}
&.leftbox
{
  display: flex;
    float :left;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-between;
    letter-spacing:0.05 rem;
    padding-left: 1rem;
    margin-bottom: 0.7rem;
    align-content:space-between;
    margin: 0 1rem;
    width:27vw;
 
}
&.rightbox{
  display: flex;
    float :right;
    width: 30vw;
    flex-direction: column;
    align-items:flex-start;
    justify-content: space-around;
    margin-top:0.3rem;
    margin-bottom: 0.7rem;
    width: 28vw;
}
`

export const StyledLink=styled(Link)`
list-style:none;
  position: relative;
  cursor: pointer;
  color:#382B2F;
  text-decoration:none;
  color:  #382B2F;
  
  &:focus{
    color: #D179FF;
    text-decoration: underline;

  }
  
  
 &::before {
    content: "";
    background-color: #D179FF;
    position: absolute;
    left: 0;
    bottom: -0.3rem;
    height: 3px;
    width: 0%;
    transition: 0.3s ease-in-out;
  }
   &:hover::before{
    content: "";
  background-color:  #D179FF;
  position: absolute;
  left:0;
  bottom: -0.3rem;
  height: 3px;
  width:100%;
  transition: 0.3s ease-in-out;
   }

   &:hover
   {
    color:  #D179FF;
   }
   

`
 export const StyledLine=styled.hr`
 width:55.5vw;
 margin-left: 1.8rem; 
 /* margin-top: -0.5rem; */
  height: 2px;
  border: 0 none;
  background-color:#382B2F ;
  opacity:0.40;
  display:flex;
  float:left;

`
export const StyledPargraph=styled.p`
display: flex;
width: 60vw;
float:left;
text-align: justify;
margin-left: 2rem;
font-size: 1rem;
font-family: Helvetica, Sans-Serif;
color:  #382B2F;
  flex-direction: column;
  align-items: flex-start;
  &.hostel_name_location
  {
    padding-left: 1rem;
    /* border: 3px solid red; */
  }
  &.hostel_name {
    font-weight: bold;
    font-size: 2rem;
    margin-bottom:0.25rem;
    margin-left:-4px;
  }
`
