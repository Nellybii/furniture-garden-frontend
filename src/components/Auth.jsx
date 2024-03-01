import React, { createContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);

// Create the context with default values
export const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  setIsAuthenticated: () => null,
  logout: () => null,
});
// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [credentials, setCredentials] = useState(() => {
    const storedCredentials = localStorage.getItem("session");
    return storedCredentials ? JSON.parse(storedCredentials) : null;
  });

  const logout = () => {
    localStorage.removeItem("session");
    setIsAuthenticated(false);
    setUser(null);
  };

  useEffect(() => {
    try {
      //console.log("Credentials:", credentials);

      if (credentials && typeof credentials.access_token === "string") {
        const decoded = jwtDecode(credentials.access_token);
        6; // console.log("Decoded Access Token:", decoded);

        if (decoded) {
          // const expiry = dayjs(decoded.exp * 1000).utc();
          // const isValid = dayjs().utc().isAfter(expiry);
          // console.log("Expiry:", expiry);

          // console.log("Is Valid:", isValid);

          // if (isValid) {
            setIsAuthenticated(true);
            setUser(decoded);
            console.log(decoded);
          } else {
            logout();
          }
        } else {
          console.error("Invalid session or access_token");
          logout();
        }
      
    } catch (error) {
      console.error("Error decoding token", error);
      logout();
    }
  }, [credentials]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        logout,
        setUser,
        user,
        credentials,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
