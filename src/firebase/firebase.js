import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC45UO1QJyPvs_UEGMet3a3dVzFATrqlho",
    authDomain: "purduebikesintrees.firebaseapp.com",
    projectId: "purduebikesintrees",
    storageBucket: "purduebikesintrees.appspot.com",
    messagingSenderId: "614920340355",
    appId: "1:614920340355:web:d64bac3304d26d6d2f6cb6",
    measurementId: "G-GV01608PWV"
  };
firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
export default storage;