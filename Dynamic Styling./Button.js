import React from 'react';

import './Button.css';

const Button = (props) => {
  return (
    <button type={props.type} className={`button`} style={{background: props.onColorChange.trim().length===0 ? '#c9505a' :'#8b005d'}} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
