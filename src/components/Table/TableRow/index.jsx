import React from 'react';

import classes from './TableRow.module.scss';
import TableCell from '../TableCell';

const TableRow = ({ id, firstName, lastName, email, phone, onClick }) => {
  return (
    <div className={classes.TableRow} onClick={onClick}>
      <TableCell>{id}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{phone}</TableCell>
    </div>
  );
};

export default TableRow;
