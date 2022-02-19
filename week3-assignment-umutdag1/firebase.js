import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs  } from 'firebase/firestore';

// TODO: Replace with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBV1PIhE6ICC83Vg58Js7wqs4IBOB_8apU",
    authDomain: "week3-assignment-umutdag1.firebaseapp.com",
    projectId: "week3-assignment-umutdag1",
    storageBucket: "week3-assignment-umutdag1.appspot.com",
    messagingSenderId: "68730056073",
    appId: "1:68730056073:web:452d70de26e911e2da4558",
    measurementId: "G-YDC4PVWH70"
};

const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app);

export default {
    app,
    db,
    collection,
    getDocs
}
