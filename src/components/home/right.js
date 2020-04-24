import React from 'react';
import { useHistory } from 'react-router-dom';

export const Right = () => {
  let history = useHistory();

  function handleClick() {
    history.push('/login');
  }
  return (
    <div className="_loginbtn">
      <div className="_inner">
        <h2>Hi!</h2>
        <h2>Nothing to do yet? Think about it and let's start!</h2>
        <button onClick={handleClick}>Click to login</button>
      </div>
    </div>
  );
};
export default Right;
