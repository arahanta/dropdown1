import React from 'react'
import Records from "../Records.json"
import { StyledPargraph,StyledLine} from './styled'

export function Reviews() {
  return (
    <div>
      {
        Records.map(records =>{
            return(
            <>
            <StyledLine/>
            <StyledPargraph>
            {records.Reviews}
          </StyledPargraph>
          </>
            );
        })
      }
    </div>
  )
}



  


