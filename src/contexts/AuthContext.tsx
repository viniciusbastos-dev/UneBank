import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {UserAPI} from '../services/User';
import {UserAuthBodyProps} from '../services/User/User-interface';
import {isAxiosError} from 'axios';
import {showMessage} from 'react-native-flash-message';

interface User {
  token: string;
  id: string;
  fullName: string;
  email: string;
}
interface AuthContextData {
  user: User | null;
  signIn: (body: UserAuthBodyProps) => Promise<void>;
  signOut: () => Promise<void>;
  signed: boolean;
  loading: boolean;
}

const AuthContext = createContext<AuthContextData | null>(null);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadStorageData = async () => {
      const storageToken = await AsyncStorage.getItem('@token');
      const storageUser = await AsyncStorage.getItem('@user');

      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
        setSigned(true);
      }
    };

    loadStorageData();
  }, []);

  const signIn = async (body: UserAuthBodyProps) => {
    setLoading(true);
    try {
      const response = await UserAPI.authUser({...body});
      await AsyncStorage.setItem('@token', JSON.stringify(response.data.token));
      await AsyncStorage.setItem('@user', JSON.stringify(response.data));
      setUser(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        showMessage({type: 'danger', message: error?.response?.data?.error});
      }
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    await AsyncStorage.removeItem('@token');
    await AsyncStorage.removeItem('@user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{user, signed, signIn, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
};
