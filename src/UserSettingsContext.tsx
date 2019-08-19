import React from 'react';

export interface User {
  id: number,
  name: string,
}

export interface UserSettings {
  user: User | null,
  setUser: (user: User | null) => void,
}

const UserContext = React.createContext<UserSettings>({ user: null, setUser: () => { } });

const UserProvider: React.FC<UserSettings> = (props) => {

  return (
    <UserContext.Provider value={{ user: props.user, setUser: props.setUser }}>{props.children}</UserContext.Provider>
  )
}

export default {
  UserContext, UserProvider, UserConsumer: UserContext.Consumer
}