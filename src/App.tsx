import React, { useState } from 'react';
import Row from './Row';
import TodoInput from './TodoInput';
import AnotherPage from './AnotherPage';
import './app.css';

interface Item {
  id: number;
  value: string;
}

const App: React.FC = () => {
  const [items, setItems] = useState<Array<Item>>([]);
  const [todo, setTodo] = useState<string>('');

  function onRemove(id: number) {
    setItems(items.filter(item => item.id !== id));
  }

  function onAdd() {
    setItems([{ id: Date.now(), value: todo }, ...items]);
    setTodo('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>To Do list.</h2>
      </header>
      <div className="input-container">
        <TodoInput onAdd={onAdd} onChange={setTodo} value={todo} />
      </div>
      <ul className="todo-list">
        {items.map(item => {
          return (
            <Row
              key={item.id}
              onRemove={onRemove}
              id={item.id}
              value={item.value}
            />
          );
        })}
      </ul>
      <AnotherPage order="asc" />
    </div>
  );
};

export default App;
