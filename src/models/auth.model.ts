export interface User {
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

export interface AuthContextProps {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  createUser: (
    email: string,
    password: string,
    name: string,
    surename: string
  ) => void;
  sigInUser: (email: string, password: string) => void;
  logOut: () => void;
}
