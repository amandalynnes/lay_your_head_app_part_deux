import React, { createContext, useState, useEffect } from "react";
import * as app from "firebase/app";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const updateFirebaseUser = () => {
    const fbUser = app.auth().currentUser;
    if(fbUser) {
      setUser(fbUser)
    }
  }
  const deleteUser = () => app.auth().currentUser.delete().then(() => setUser(null))

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
  return <AuthContext.Provider value={{user, updateFirebaseUser, deleteUser}}>{children}</AuthContext.Provider>;
};