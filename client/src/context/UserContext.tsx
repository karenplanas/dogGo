import React, { createContext, useContext, useEffect, useState } from 'react'
import { ILoginMethod, IUser } from '../interfaces/IUser'
import * as ApiClient from '../services/ApiClient'

const STORAGE_KEY = 'user';

interface IUserContext {
  user?: IUser;
  socialLogin: (loginMethod: ILoginMethod) => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

const UserContextProvider: React.FC = ({children}) => {
  const storedData = window.localStorage.getItem(STORAGE_KEY);

  const [user, setUser] = useState<IUser | undefined>(
    storedData ? JSON.parse(storedData) : undefined
  )

  useEffect(() => {
    user && window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  const socialLogin = async (loginMethod: ILoginMethod) => {
    const response = await ApiClient.processLogin(loginMethod);
    setUser(response);
  };

  const value = {
    user, 
    socialLogin
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

};

const useUserContext = ():IUserContext => {
  return useContext(UserContext) as IUserContext
}

export { UserContextProvider, useUserContext}