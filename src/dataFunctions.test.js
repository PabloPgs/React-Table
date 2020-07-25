import { chunk, sort } from './dataFunctions';

describe('test chunk function', () => {
  let array;
  let result;

  beforeEach(() => {
    array = [{}, {}, {}];
    result = [[{}], [{}], [{}]];
  });

  it('if chunk function works correctly', () => {
    expect(chunk).toBeDefined();
    expect(chunk(array, 1)).toEqual(result);
  });
});

describe('test sort function', () => {
  const array = [
    { id: 10, firstName: 'A', phone: '(958)' },
    { id: 20, firstName: 'B', phone: '(858)' },
    { id: 30, firstName: 'C', phone: '(758)' },
  ];

  it('if sort function works correctly', () => {
    expect(sort(array, 'id', 'desc')[0].id).toEqual(30);
    expect(sort(array, 'firstName', 'asc')[0].firstName).toEqual('C');
    expect(sort(array, 'phone', 'asc')[0].phone).toEqual('(958)');
  });
});
