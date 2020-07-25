import React, { useState } from 'react';

import { Button } from '../UI';

import classes from './AddRowModal.module.scss';

const AddRowModal = ({ onAdd, onClose }) => {
  const inputs = [
    { name: 'id', type: 'number', placeholder: 'id' },
    { name: 'firstName', type: 'text', placeholder: 'First Name' },
    { name: 'lastName', type: 'text', placeholder: 'Last Name' },
    { name: 'email', type: 'email', placeholder: 'Email' },
    { name: 'phone', type: 'phone', placeholder: 'Phone' },
  ];

  const [row, setRow] = useState({});

  const changeValue = ({ target }) => {
    const { name, value } = target;
    setRow((prev) => ({ ...prev, [name]: value }));
  };

  const isValid = () => {
    if (Object.entries(row).length > 4) {
      return true;
    }
  };

  const onAddRow = () => {
    onAdd(row);
    setRow({});
  };

  return (
    <div className={classes.AddRowModal}>
      <span className={classes.Close} onClick={onClose}>
        &times;
      </span>
      {inputs.map((input) => (
        <input
          key={input.name}
          onChange={changeValue}
          value={row[input.name] || ''}
          type={input.type}
          name={input.name}
          placeholder={input.placeholder}
        />
      ))}
      {isValid() && <Button onClick={onAddRow}>Добавить в таблицу</Button>}
    </div>
  );
};

export default AddRowModal;
