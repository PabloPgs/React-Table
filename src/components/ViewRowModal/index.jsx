import React from 'react';

import classes from './ViewRowModal.module.scss';

const ViewRowModal = ({ firstName, lastName, description, address, onClose }) => {
  return (
    <div className={classes.ViewRowModal}>
      <span className={classes.Close} onClick={() => onClose(null)}>
        &times;
      </span>
      <h2>
        Выбран пользователь: {firstName} {lastName}{' '}
      </h2>
      <p>
        Описание: <br /> {description}
      </p>
      <p>
        Адресс проживания: <b>{address.streetAddress}</b> <br />
        Город: <b>{address.city}</b> <br />
        Провинция: <b>{address.state}</b> <br />
        Индекс: <b>{address.zip}</b> <br />
      </p>
    </div>
  );
};

export default ViewRowModal;
