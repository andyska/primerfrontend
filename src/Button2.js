import React from 'react';

function Button2(props) {
    const handleClick = () => props.onClickFunction()
    return (
      <button onClick={handleClick}> Now </button>
    )
  }

export default Button2;