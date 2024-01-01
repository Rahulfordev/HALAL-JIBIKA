/* eslint-disable react/prop-types */
import { createContext } from "react"; 
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const providerData = {};
  return (
    <AuthContext.Provider value={providerData}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
