import React, { createContext, useState, useEffect } from "react";
// import app from "./firebase";
import * as app from "firebase/app";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const authListener = app.auth().onAuthStateChanged((user) => {
      setUser(user || null);
      setLoading(false);
    });
    return () => {
      authListener();
    };
  }, []);
  if (loading) {
    return <p>Loading app...</p>;
  }
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
