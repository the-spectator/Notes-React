import React from 'react';

const CustomInput = ({helloFromOtherSide}) => {
  console.log(`hello ${helloFromOtherSide}`);
  return (
    <h6> {helloFromOtherSide} </h6>
  )
};

export default React.memo(CustomInput);
