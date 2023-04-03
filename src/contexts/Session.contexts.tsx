import { onAuthStateChanged } from "firebase/auth";
import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../configs";
import { useAuth } from "../services";

interface UserModel {
  email: string;
  userId: string;
  role: "admin" | "user";
}

interface SessionContextModel {
  user?: UserModel;
  setUser: React.Dispatch<React.SetStateAction<UserModel | undefined>>;
}

export const SessionContext = createContext<SessionContextModel>(
  {} as SessionContextModel
);

export const useSession = () => {
  const context = useContext(SessionContext);
  return context;
};

const SessionProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<UserModel>();

  const { getRole } = useAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        getRole(currentUser.uid).then((role) => {
          const userData = {
            role: role,
            email: currentUser.email!,
            userId: currentUser.uid,
          };
          setUser(userData);
        });
      } else {
        setUser(undefined);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SessionContext.Provider value={{ user, setUser }}>
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
