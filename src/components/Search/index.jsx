import React, { useState } from 'react';
import Button from '../UI/Button';

import classes from './Search.module.scss';

const Search = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const changeValue = ({ target }) => {
    setValue(target.value);
  };

  const onSearchInfo = () => {
    onSearch(value);
    setValue('');
  };

  return (
    <div className={classes.Search}>
      <input type="text" value={value} onChange={changeValue} />
      <Button onClick={onSearchInfo}>Найти</Button>
    </div>
  );
};

export default Search;
