// Import the functions you need from the SDKs you need
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth } from 'firebase/auth';
import { getReactNativePersistence } from 'firebase/auth/react-native';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC1jpWQkw1POKyr2uFiFoNaBKy1DWewjWs',
  authDomain: 'instagram-clone-9ab8d.firebaseapp.com',
  projectId: 'instagram-clone-9ab8d',
  storageBucket: 'instagram-clone-9ab8d.appspot.com',
  messagingSenderId: '466497106014',
  appId: '1:466497106014:web:32a3995c71ed8f3fde04cf',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, { persistence: getReactNativePersistence(AsyncStorage) });

const auth = getAuth();
auth.languageCode = 'es';

export { auth };
