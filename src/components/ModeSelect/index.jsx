import React from 'react';
import { Button } from '../UI';

import classes from './ModeSelect.module.scss';

const ModeSelect = ({ onChooseMode, toggleAddRowModal, loading }) => {
  const url1 =
    'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
  const url2 =
    'http://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';

  let disabled = false;

  if (loading) {
    disabled = true;
  }

  return (
    <div className={classes.ModeSelect}>
      <Button onClick={() => onChooseMode(url1)} disabled={disabled}>
        Мало данных
      </Button>
      <Button onClick={() => onChooseMode(url2)} disabled={disabled}>
        Много данных
      </Button>
      <Button onClick={toggleAddRowModal} disabled={disabled}>
        Добавить
      </Button>
    </div>
  );
};

export default ModeSelect;
