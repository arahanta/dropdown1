import React from 'react'
import Records from "../Records.json";
import {StyledPargraph}  from "../Component/styled";
export default function Hostelname() {
  return (
    <>
     {Records.map(record => {
          return (
            <>
            <StyledPargraph className='hostel_name_location'>
              <StyledPargraph className='hostel_name'>{record.Name}</StyledPargraph>
              {record.Address}
            </StyledPargraph>
            </>
          );
        })}
    </>
  )
}
