import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyD3dIAxIJBBEhgxTyBhMF_pJq9xSq_NxNE",
    authDomain: "teman-cerita-96fcb.firebaseapp.com",
    projectId: "teman-cerita-96fcb",
    storageBucket: "teman-cerita-96fcb.appspot.com",
    messagingSenderId: "8523295100",
    appId: "1:8523295100:web:e7f18baac33e9dee049cf9",
    measurementId: "G-09DZ1BXQGF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const db = firebase.firestore();

export default db;