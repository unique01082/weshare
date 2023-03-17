import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  signInWithPopup,
  User,
} from 'firebase/auth';
import { firebaseApp } from '.';

export const auth = (function () {
  const auth = getAuth(firebaseApp);
  setPersistence(auth, browserLocalPersistence);
  return auth;
})();

window.auth = auth;

const facebookProvider = new FacebookAuthProvider();
facebookProvider.setCustomParameters({
  display: 'popup',
});

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

export const logInWithEmailAndPassword = (email: string, password: string) =>
  signInWithEmailAndPassword(auth, email, password);

export const logInWithFacebook = () => signInWithPopup(auth, facebookProvider);

export const logInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const logInWithGithub = () =>
  signInWithPopup(auth, githubProvider).catch((error) => {
    console.dir(error);
    throw error;
  });

export const logInWithPhoneNumber = (phoneNumber: string = '0357847480', recaptchaVerifier: any) =>
  signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);

export const signUpWithUsernameAndPassword = (email: string, password: string) =>
  createUserWithEmailAndPassword(auth, email, password);

export const getCurrentUser = () =>
  new Promise<User | null>((res) => {
    auth.onAuthStateChanged(res);
  });

export const logOut = () => auth.signOut();
