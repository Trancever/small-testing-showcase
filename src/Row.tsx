import React from 'react';
import './row.css';

interface Props {
  id: number;
  value: string;
  onRemove: (id: Props["id"]) => void,
};

const Row: React.FC<Props> = (props) => {
  const { id, value, onRemove } = props;

  return (
    <li className="list-row">
      <p className="list-row-value">{value}</p>
      <button className="list-row-button" onClick={() => {
        onRemove(id);
      }}>x</button>
    </li>
  );
}

export default Row;
