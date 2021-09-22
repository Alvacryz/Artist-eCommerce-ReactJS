import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAqxUF5dfvZ-L_2cRqtfQwNGQiwkzegrt0",
  authDomain: "coderhouse-ecommerceartshop.firebaseapp.com",
  projectId: "coderhouse-ecommerceartshop",
  storageBucket: "coderhouse-ecommerceartshop.appspot.com",
  messagingSenderId: "20832574322",
  appId: "1:20832574322:web:a2d52eec050d9e5fa6dbeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }
