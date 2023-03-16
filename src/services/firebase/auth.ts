import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
  User,
} from 'firebase/auth';
import { firebaseApp } from '.';

const auth = (function () {
  const auth = getAuth(firebaseApp);
  setPersistence(auth, browserLocalPersistence);
  return auth;
})();

window.auth = auth;

export const logInWithEmailAndPassword = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const signUpWithUsernameAndPassword = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const getCurrentUser = () =>
  new Promise<User | null>((res) => {
    auth.onAuthStateChanged(res);
  });

export const logOut = () => auth.signOut();
