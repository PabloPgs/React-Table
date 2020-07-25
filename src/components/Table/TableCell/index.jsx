import React from 'react';

import classes from './TableCell.module.scss';

const TableCell = ({ children, onClick }) => {
  return (
    <div className={classes.TableCell} onClick={onClick}>
      {children}
    </div>
  );
};

export default TableCell;
