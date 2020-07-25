import React from 'react';

import classes from './Button.module.scss';

const Button = ({ children, onClick, type = 'primary', disabled = false }) => {
  const cls = [classes.Button, classes[type]];

  return (
    <button className={cls.join(' ')} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
