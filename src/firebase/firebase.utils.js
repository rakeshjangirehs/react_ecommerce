import firebase from 'firebase/app';
    import 'firebase/firestore';    // storage or database
    import 'firebase/auth';  // auth

// App's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCmNEL6Jytc7RocLVvnMCbFNkrzDDJYP-Q",
    authDomain: "ecommerce-2263d.firebaseapp.com",
    databaseURL: "https://ecommerce-2263d.firebaseio.com",
    projectId: "ecommerce-2263d",
    storageBucket: "ecommerce-2263d.appspot.com",
    messagingSenderId: "494333743605",
    appId: "1:494333743605:web:43b6774e1045358980d0bc",
    measurementId: "G-XV2HPGCCB0"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;