import React, { createContext, useContext } from 'react';

interface AuthProviderProps {
  children: React.ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
  photo?: string;
}

interface IAuthContextData {
  user: User;
}

export const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const user = {
    id: '123485660',
    name: 'Lucas Passos',
    email: 'lucasplpx@gmail.com',
  };
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
