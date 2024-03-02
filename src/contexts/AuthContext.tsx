/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/no-shadow */
// AuthContext.tsx

import React, {createContext, useContext, useState} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

// Criar o contexto
const AuthContext = createContext<any>(null);

interface Props {
  children: React.ReactNode;
}

// Criar o provedor do contexto
export const AuthProvider: React.FC<Props> = ({children}) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);

  // Verificar se o usuário está autenticado
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setUser(user);
      if (loading) setLoading(false);
    });
    return subscriber;
  }, []);

  // Função para fazer logout
  const signOut = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthContext.Provider value={{user, signOut, loading}}>
      {children}
    </AuthContext.Provider>
  );
};

// Exportar o contexto e o hook para usar o contexto
export const useAuth = () => useContext(AuthContext);
