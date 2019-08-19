import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import UserSettings from '../UserSettingsContext';
import Main from '../Main';
import API from '../API';

const { UserConsumer, UserProvider } = UserSettings;

it('Check if context works properly ', async () => {
  const { getByText, rerender } = render(
    <UserProvider user={{ id: 1, name: 'David' }} setUser={() => { }}>
      <UserConsumer>
        {({ user, setUser }) => {
          if (!user) return <span>User is empty</span>
          return (
            <span>Received: {user.name}</span>
          )
        }}
      </UserConsumer>
    </UserProvider>,
  );

  expect(getByText(/^Received:/).textContent).toBe('Received: David');

  rerender(
    <UserProvider user={null} setUser={() => { }}>
      <UserConsumer>
        {({ user, setUser }) => {
          if (user === null) return <span>User is empty</span>
          return (
            <span>Received: {user && user.name}</span>
          )
        }}
      </UserConsumer>
    </UserProvider>,
  )

  expect(getByText(/^User is empty/)).toBeInTheDocument();
})

it('Check if Main component using context works properly', async () => {
  const { getByText, getByTestId } = render(<Main />)

  expect(getByText(/^Current user:/).textContent).toBe("Current user: empty");

  API.getUser = jest.fn().mockImplementation(() => ({
    id: 2,
    name: 'Adrian'
  }))

  fireEvent.click(getByTestId(/^login-button$/));

  expect(getByText(/^Current user:/).textContent).toBe("Current user: Adrian");

  fireEvent.click(getByTestId(/^logout-button$/));

  expect(getByText(/^Current user:/).textContent).toBe("Current user: empty");
})
