import { FirebaseOptions } from 'firebase/app';
import { merge } from 'lodash';

export const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyCtzd5_tsNFmlnPOaKQrD4QqmB1c4Sm13U',
  authDomain: 'weshare-unique01082.firebaseapp.com',
  projectId: 'weshare-unique01082',
  storageBucket: 'weshare-unique01082.appspot.com',
  messagingSenderId: '674295051461',
  appId: '1:674295051461:web:7d111edc85510ba144acac',
};

export const adminServer = {
  host: 'http://localhost:3000',
  prefix: '/api',
};

export const BASE_VARIABLES = Object.assign(
  {},
  { FIREBASE: firebaseConfig, ADMIN_SERVER: adminServer },
);

export const DEV_VARIABLES = merge({}, BASE_VARIABLES, {});

export const PROD_VARIABLES = merge({}, BASE_VARIABLES, {});
