export const sort = (data, sortBy, order) => {
  let sortedData = [...data];

  if (sortBy === 'id') {
    if (order === 'asc') {
      sortedData.sort((a, b) => {
        return a[sortBy] - b[sortBy];
      });
    }
    if (order === 'desc') {
      sortedData.sort((a, b) => {
        return b[sortBy] - a[sortBy];
      });
    }
  }

  if (sortBy === 'firstName' || sortBy === 'lastName' || sortBy === 'email' || sortBy === 'phone') {
    sortedData.sort((a, b) => {
      let stringA = a[sortBy].toLowerCase();
      let stringB = b[sortBy].toLowerCase();

      if (order === 'asc') {
        if (stringA > stringB) {
          return -1;
        }
        if (stringB > stringA) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (stringA < stringB) {
          return -1;
        }
        if (stringB < stringA) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

  return sortedData;
};

export const chunk = (array, size) => {
  let subarray = [];
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.slice(i * size, i * size + size);
  }

  return subarray;
};
