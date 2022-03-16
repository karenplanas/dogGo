import React, { createContext, useContext, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { Navigate } from 'react-router';
import { ILoginMethod, IUser } from '../interfaces/IUser'
import * as ApiClient from '../services/ApiClient'

const STORAGE_KEY = 'user';

interface IUserContext {
  user?: IUser;
  socialLogin: (loginMethod: ILoginMethod) => void;
  logout: () => void;
}

const UserContext = createContext<IUserContext | undefined>(undefined);

const UserContextProvider: React.FC = ({children}) => {
  const storedData = window.localStorage.getItem(STORAGE_KEY);

  const { mutate: socialLogin } = useMutation(
    (loginMethod: ILoginMethod) => ApiClient.processLogin(loginMethod),
    {
      onSuccess: (user) => {
        setUser(user)
      },
      onError: () => logout()
    }  
  )

  const [user, setUser] = useState<IUser | undefined>(
    storedData ? JSON.parse(storedData) : undefined
  )

  useEffect(() => {
    user && window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
  }, [user]);

  // const socialLogin = async (loginMethod: ILoginMethod) => {
  //   const response = await ApiClient.processLogin(loginMethod);
  //   setUser(response);
  // };

  const logout = () => {
    setUser(undefined);
    window.localStorage.removeItem(STORAGE_KEY);
  }

  const value = {
    user, 
    socialLogin,
    logout
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>

};

const useUserContext = ():IUserContext => {
  return useContext(UserContext) as IUserContext
}

export { UserContextProvider, useUserContext}