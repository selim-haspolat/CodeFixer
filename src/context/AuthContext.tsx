import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import { errorAlert, successAlert } from "../components/SweetAler";
import { User, AuthContextProps } from "../models/auth.model";

export const AuthContext = createContext({} as AuthContextProps);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
      successAlert('Account Created Successfully')
    } catch (error) {
      errorAlert('Failed to create')
    }
  };

  const sigInUser = (email: string, password: string): void => {
    signInWithEmailAndPassword(auth, email, password).then(() => successAlert('Sign In Successfully')) 
  };

  const logOut = (): void => {
    signOut(auth).then(() => successAlert('Sign Out Successfully'))
    setUser(null);
  };

  const values = { user, setUser, createUser, sigInUser, logOut };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuthContext = () => {
  return useContext(AuthContext);
};
