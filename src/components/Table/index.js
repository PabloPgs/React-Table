import React from 'react';
import classes from './Table.module.scss';

import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { Loader } from '../UI';

const Table = ({ data = [], onViewRow, onSort, sortOrder, activeSort, loading }) => {
  return (
    <div className={classes.Table}>
      <TableHeader onSort={onSort} sortOrder={sortOrder} activeSort={activeSort} />
      {loading ? (
        <div className={classes.Loader}>
          <Loader />
        </div>
      ) : (
        <TableBody data={data} onViewRow={onViewRow} />
      )}
    </div>
  );
};

export default Table;
