import React from 'react'
import Records from "./Records.json"
import {StyledLine,StyledPargraph}  from "./Component/styled";

 export function Scheedule() {
    return (
      <>
      
        {Records.map(record => {
          return (
            <>
            <StyledLine/>
            <StyledPargraph>
              {record.Schedule}
            </StyledPargraph>
            </>
          );
        })}
      </>
    );
  }