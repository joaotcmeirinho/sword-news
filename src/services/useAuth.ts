import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { app, auth } from "../configs";

interface UserDataModel {
  email: string;
  password: string;
}

const firestore = getFirestore(app);

interface DataModel {
  email: string;
  userId: string;
  role: "admin" | "user";
}

const storeData = (data: DataModel) => {
  const { email, userId, role } = data;
  const docRef = doc(firestore, `users/${userId}`);
  setDoc(docRef, { email: email, role: role });
};

const useAuth = () => {
  const firestore = getFirestore(app);

  const register = async (newUserData: UserDataModel) => {
    const { email, password } = newUserData;

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      storeData({ userId: user.uid, email, role: "user" });
      return { email: user.email, userId: user.uid };
    } catch (error) {
      return error;
    }
  };

  const login = async (userData: UserDataModel) => {
    const { email, password } = userData;

    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      return { email: user.email, userId: user.uid };
    } catch (error) {
      return error;
    }
  };

  const getRole = async (userId: string) => {
    const docRef = doc(firestore, `users/${userId}`);
    const response = await getDoc(docRef);
    const role = response?.data()?.role;
    return role;
  };

  return { register, login, getRole };
};

export default useAuth;
