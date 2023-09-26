import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  return (
    <UserContext.Provider
      value={{ isAuthenticated, userRole, setIsAuthenticated, setUserRole }}
    >
      {children}
    </UserContext.Provider>
  );
};
