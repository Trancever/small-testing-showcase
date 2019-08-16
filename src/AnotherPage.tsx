import React, { useState, useEffect } from 'react';
import API from './API';

export interface Props {
  order: 'asc' | 'desc';
}

export interface Item {
  id: number;
  value: string;
}

const AnotherPage: React.FC<Props> = props => {
  const [items, setItems] = useState<Array<Item>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    API.getItems(props.order)
      .then(items => {
        setItems(items);
        setLoading(false);
      })
      .catch(console.error);
  }, [props.order]);

  return (
    <div>
      {!loading
        ? items.map(item => (
            <p data-testid={item.id} key={item.id}>
              {item.value}
            </p>
          ))
        : null}
    </div>
  );
};

export default AnotherPage;
