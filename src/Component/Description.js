import React from 'react'
import Records from "../Records.json"
import { StyledLine,StyledPargraph } from './styled';

 export function Description() {
    return (
      <>
      
        {Records.map(record => {
          return (
            <>
            <StyledLine/>
            <StyledPargraph>
              {record.Description}
            </StyledPargraph>
            </>
          );
        })}
      </>
    );
  }
  

