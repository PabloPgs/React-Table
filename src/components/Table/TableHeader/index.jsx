import React from 'react';
import classes from './TableHeader.module.scss';

import TableCell from '../TableCell';

const TableHeader = ({ onSort, activeSort, sortOrder }) => {
  const cells = ['id', 'firstName', 'lastName', 'email', 'phone'];

  return (
    <div className={classes.TableHeader}>
      {cells.map((cell) => (
        <TableCell key={cell} onClick={() => onSort(cell)}>
          <div className={classes.CellInner}>
            {cell}
            {cell === activeSort && <span>{sortOrder}</span>}
            {activeSort === '' && sortOrder === '' && <span>Сортировать</span>}
          </div>
        </TableCell>
      ))}
    </div>
  );
};

export default TableHeader;
