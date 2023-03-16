import { FirebaseOptions } from 'firebase/app';

export const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCtzd5_tsNFmlnPOaKQrD4QqmB1c4Sm13U',
  authDomain: 'weshare-unique01082.firebaseapp.com',
  projectId: 'weshare-unique01082',
  storageBucket: 'weshare-unique01082.appspot.com',
  messagingSenderId: '674295051461',
  appId: '1:674295051461:web:7d111edc85510ba144acac',
};

export const BASE_VARIABLES = Object.assign({}, { FIREBASE: firebaseConfig });

export const DEV_VARIABLES = Object.assign({}, BASE_VARIABLES, {});

export const PROD_VARIABLES = Object.assign({}, BASE_VARIABLES, {});
