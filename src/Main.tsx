import React, { useState } from 'react';
import UserContext, { User } from './UserSettingsContext';
import NestedChild from './NestedChild';

const Main: React.FC<{}> = () => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.UserProvider user={user} setUser={setUser}>
      <NestedChild />
    </UserContext.UserProvider>
  )
}
export default Main;
