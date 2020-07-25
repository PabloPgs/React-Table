import React from 'react';

import classes from './Error.module.scss';

const Error = ({ children }) => {
  return <h4 className={classes.Error}>{children}</h4>;
};

export default Error;
