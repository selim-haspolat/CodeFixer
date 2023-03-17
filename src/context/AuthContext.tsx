import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { User, AuthContextProps } from "../models/auth.model";

export const AuthContext = createContext({} as AuthContextProps);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        const { email, displayName, photoURL } = user;
        setUser({ email, displayName, photoURL });
      }
    });
  }, []);

  const createUser = async (
    email: string,
    password: string,
    name: string,
    surename: string
  ) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        console.log(user);
        await updateProfile(user, {
          displayName: `${name} ${surename}`,
          photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
        });
        setUser({
          email,
          displayName: `${name} ${surename}`,
          photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sigInUser = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = (): void => {
    signOut(auth);
    setUser(null);
  };

  const values = { user, setUser, createUser, sigInUser, logOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
