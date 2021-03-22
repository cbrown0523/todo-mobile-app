import firebase from "firebase/app";
import "@firebase/firestore";

const settings = {timestampsInSnapshots: true};

var firebaseConfig = {
    apiKey: "AIzaSyAk8FPSUfPCf3uuDSFLKn83PE-1PuyVT7s",
    authDomain: "mobile-cb819.firebaseapp.com",
    projectId: "mobile-cb819",
    storageBucket: "mobile-cb819.appspot.com",
    messagingSenderId: "746188587895",
    appId: "1:746188587895:web:04bcf7cabf3f71d4ab1772"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;