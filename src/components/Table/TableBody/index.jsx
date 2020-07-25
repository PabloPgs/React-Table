import React from 'react';
import classes from './TableBody.module.scss';

import TableRow from '../TableRow';

const TableBody = ({ data, onViewRow }) => {
  return (
    <div className={classes.TableBody}>
      {data.map((row) => (
        <TableRow key={row.id + row.phone} {...row} onClick={() => onViewRow(row)} />
      ))}
    </div>
  );
};

export default TableBody;
