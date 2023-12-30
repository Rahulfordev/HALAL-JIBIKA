/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const value = {};
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProviders;
