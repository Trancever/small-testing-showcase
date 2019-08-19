import { Props, Item } from './AnotherPage';

const items1 = [
  { id: 1, value: '1' },
  { id: 2, value: '2' },
  { id: 3, value: '3' },
];

const items2 = [
  { id: 1, value: '3' },
  { id: 2, value: '2' },
  { id: 3, value: '1' },
];

const getItems = (page: Props['order']): Promise<Array<Item>> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (page === 'asc') return resolve(items1);
      return resolve(items2);
    }, 1000);
  });
};

const getUser = () => ({
  id: 1,
  name: 'David'
})

export default {
  getItems,
  getUser,
};
