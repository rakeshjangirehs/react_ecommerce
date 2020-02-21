import firebase from 'firebase/app';
    import 'firebase/firestore';    // storage or database
    import 'firebase/auth';  // auth

// App's Firebase configuration (rakeshj@letsenkindle)
/* const firebaseConfig = {
    apiKey: "AIzaSyCmNEL6Jytc7RocLVvnMCbFNkrzDDJYP-Q",
    authDomain: "ecommerce-2263d.firebaseapp.com",
    databaseURL: "https://ecommerce-2263d.firebaseio.com",
    projectId: "ecommerce-2263d",
    storageBucket: "ecommerce-2263d.appspot.com",
    messagingSenderId: "494333743605",
    appId: "1:494333743605:web:43b6774e1045358980d0bc",
    measurementId: "G-XV2HPGCCB0"
}; */

// App's Firebase configuration (rjtarpura)
var firebaseConfig = {
    apiKey: "AIzaSyCNRcsi4DiiEPyVJS8ndnuQSOWUkdwqDm4",
    authDomain: "react-ecommerce-app-150e1.firebaseapp.com",
    databaseURL: "https://react-ecommerce-app-150e1.firebaseio.com",
    projectId: "react-ecommerce-app-150e1",
    storageBucket: "react-ecommerce-app-150e1.appspot.com",
    messagingSenderId: "595423319893",
    appId: "1:595423319893:web:fb983f3fc5180e520881dc"
};

export const createUserProfileDocument = async (userAuth, additionalData)=>{

    if(!userAuth) return;
    
    const userRef = firestore.doc(`/users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {

        const { displayName, email } = userAuth;
        const createAt = new Date();

        try {
            await userRef.set({
                displayName, 
                email, 
                createAt,
                ...additionalData
            });
        } catch(error) {
            console.log('error creating user', error.message)
        }
    }
    
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    
    const collectionRef = firestore.collection(collectionKey);

    // console.log(collectionRef);

    // Batch Write
    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        // console.log(newDocRef);
        batch.set(newDocRef, obj);
    });

    return await batch.commit().then();

}

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;