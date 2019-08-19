import React, { useContext } from 'react';
import UserContext from './UserSettingsContext';
import API from './API';

const NestedChild: React.FC<{}> = () => {
  const userSettings = useContext(UserContext.UserContext);

  const currentUser = <span>Current user: {userSettings.user ? userSettings.user.name : 'empty'}</span>

  return (
    <React.Fragment>
      {currentUser}
      <button data-testid="login-button" onClick={() => {
        userSettings.setUser(API.getUser())
      }}>Login</button>
      <button data-testid="logout-button" onClick={() => {
        userSettings.setUser(null)
      }}>Logout</button>
    </React.Fragment>
  )
}

export default NestedChild;
