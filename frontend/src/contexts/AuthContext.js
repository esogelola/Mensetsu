import firebase from "../firebase";

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useState, useEffect, useContext, createContext } from "react";
import useAuth from "../hooks/useAuth";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [user, setUser, error, setError] = useAuth();

  return <AuthContext.Provider value={{ user, error }} {...props} />;
};

export const useAuthState = () => {
  const auth = useContext(AuthContext);
  return { ...auth, isAuthenticated: auth.user != null };
};
