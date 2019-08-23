import React from 'react';
import './row.css';

interface Props {
  value: string;
  onChange: (text: string) => void;
  onAdd: () => void;
};

const TodoInput: React.FC<Props> = (props) => {
  const { onChange, value, onAdd } = props;

  return (
    <React.Fragment>
      <input 
        id="todo-input"
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)} placeholder="todo"
      />
      <button
        id="add-todo-button"
        onClick={onAdd}
        className="add-todo-button"
      >
        Add
      </button>
    </React.Fragment>
  );
}

export default TodoInput;
