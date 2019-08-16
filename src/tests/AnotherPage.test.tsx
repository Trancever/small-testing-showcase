import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import AnotherPage from '../AnotherPage';
// import API from '../API';

it('Check if API is called and proper content is displayed', async () => {
  // API.getItems = jest.fn().mockImplementation;

  const { rerender, getByTestId } = render(<AnotherPage order="asc" />);

  const firstElement = await waitForElement(() => getByTestId('1'));
  const thirdElement = await waitForElement(() => getByTestId('3'));

  expect(firstElement).toHaveTextContent('1');
  expect(thirdElement).toHaveTextContent('3');

  rerender(<AnotherPage order="desc" />);

  const firstElementChangedOrder = await waitForElement(() => getByTestId('1'));
  const thirdElementChangedOrder = await waitForElement(() => getByTestId('3'));

  expect(firstElementChangedOrder).toHaveTextContent('3');
  expect(thirdElementChangedOrder).toHaveTextContent('1');
});
