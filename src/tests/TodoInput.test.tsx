import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoInput from '../TodoInput';

it('correctly invoke onAdd function on button press', () => {
  const value = '';
  const onAdd = jest.fn();
  const onChange = jest.fn();
  const { getByText, rerender } = render(
    <TodoInput value={value} onAdd={onAdd} onChange={onChange} />
  );

  fireEvent.click(getByText('Add'));

  expect(onAdd).toBeCalled();
});

it("correctly invoke onChange function on input's change event", () => {
  const value = '';
  const onAdd = jest.fn();
  const onChange = jest.fn();
  const { getByPlaceholderText } = render(
    <TodoInput value={value} onAdd={onAdd} onChange={onChange} />
  );

  const input = getByPlaceholderText('todo');
  fireEvent.change(input, { target: { value: '1' } });
  fireEvent.change(input, { target: { value: '12' } });
  fireEvent.change(input, { target: { value: '123' } });

  expect(onChange).toBeCalledTimes(3);
  expect(onChange).toHaveBeenNthCalledWith(1, '1');
  expect(onChange).toHaveBeenNthCalledWith(2, '12');
  expect(onChange).toHaveBeenNthCalledWith(3, '123');
});
