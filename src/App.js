import React, { useState } from 'react';

import { Table, AddRowModal, ViewRowModal, ModeSelect, Search } from './components';
import { Error } from './components/UI';
import ReactPaginate from 'react-paginate';

import { sort, chunk } from './dataFunctions';

import classes from './App.module.scss';

const App = () => {
  const [totalData, setTotalData] = useState([]);
  const [currentData, setCurrentData] = useState([]);
  // Выбранный ряд ,который показывается внизу таблицы
  const [currentRow, setCurrentRow] = useState(null);

  // Порядок сортировки/активный фильтр
  const [sortOrder, setSortOrder] = useState('');
  const [activeSort, setActiveSort] = useState('');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Добавление ряда
  const [addRowModal, setAddRowModal] = useState(false);

  const fetchData = async (url) => {
    setLoading(true);
    setCurrentRow(null);
    try {
      const resp = await fetch(url);
      const data = await resp.json();

      const modifiedData = await chunk(data, 50);

      setTotalData(modifiedData);
      setCurrentData(modifiedData[0]);
      setLoading(false);
      setError('');
    } catch (e) {
      setError('Что-то пошло не так');
      setLoading(false);
    }
  };

  const onSortTable = (sortBy) => {
    const order = sortOrder === 'asc' ? 'desc' : 'asc';

    setCurrentData(sort(currentData, sortBy, order));

    setSortOrder(order);
    setActiveSort(sortBy);
  };

  const onPageChange = ({ selected }) => {
    const newData = [...totalData[selected]];
    setCurrentData(newData);
    console.log(newData);
  };

  const toggleAddRowModal = () => {
    setAddRowModal(!addRowModal);
  };

  const toggleViewRowModal = (row) => {
    console.log(row);
    setCurrentRow(row);
  };

  const addNewRow = (newRow) => {
    const newData = [...currentData];
    newData.unshift(newRow);
    setCurrentData(newData);
    setAddRowModal(false);
  };

  const onSearch = (value) => {
    if (value.length < 1) {
      setError('Введите текс');
      return;
    }

    const search = value.toLowerCase();

    const filteredData = totalData.map((m) => {
      return m.filter(({ firstName, lastName }) => {
        return firstName.toLowerCase().includes(search) || lastName.toLowerCase().includes(search)
          ? true
          : null;
      });
    });
    const modifiedData = filteredData.filter((m) => m.length > 0);

    console.log(modifiedData);
    if (!modifiedData[0] || modifiedData[0].length === 0) {
      setError('Ничего не найдено(');
      return;
    }

    setCurrentData(modifiedData[0]);
    setError('');
  };

  return (
    <div className="wrapper">
      <Search onSearch={onSearch} />
      <ModeSelect
        onChooseMode={fetchData}
        toggleAddRowModal={toggleAddRowModal}
        loading={loading}
      />
      <Table
        data={currentData}
        onSort={onSortTable}
        onViewRow={toggleViewRowModal}
        activeSort={activeSort}
        sortOrder={sortOrder}
        loading={loading}
      />
      {totalData.length > 1 && (
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          breakClassName={classes.PaginationBreak}
          pageCount={Math.ceil(totalData.length)}
          pageRangeDisplayed={5}
          disabledClassName={classes.PaginationDisabled}
          onPageChange={onPageChange}
          containerClassName={classes.Pagination}
          activeClassName={classes.PaginationActive}
        />
      )}

      {error && <Error>{error}</Error>}
      {addRowModal && <AddRowModal onAdd={addNewRow} onClose={toggleAddRowModal} />}
      {currentRow && <ViewRowModal {...currentRow} onClose={toggleViewRowModal} />}
    </div>
  );
};

export default App;
