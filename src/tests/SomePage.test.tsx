import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SomePage from '../SomePage';
import GA from '../GA';

it('Check if GA is called properly', () => {
  GA.trackScreen = jest.fn();

  const { rerender } = render(<SomePage active={false} />);

  expect(GA.trackScreen).toBeCalledTimes(0);

  // We rerender with new prop so useEffect run again -> GA.trackScreen is called with new argument
  rerender(<SomePage active={true} />);

  expect(GA.trackScreen).toBeCalledTimes(1);
  expect(GA.trackScreen).toBeCalledWith('SomePage');

  // We rerender with same prop so useEffect doesn't run -> GA.trackScreen is not called again
  rerender(<SomePage active={true} />);

  expect(GA.trackScreen).toBeCalledTimes(1);
});
