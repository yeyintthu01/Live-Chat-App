import firebase from "firebase";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDi0hKXXVEpb4Q8Jdb9pS6iZ1R3xcFeiNc",
    authDomain: "live-chat-app-e8783.firebaseapp.com",
    projectId: "live-chat-app-e8783",
    storageBucket: "live-chat-app-e8783.appspot.com",
    messagingSenderId: "857480657378",
    appId: "1:857480657378:web:141765ed5f01ed9346a1bb"
  };

  firebase.initializeApp(firebaseConfig);
  let db=firebase.firestore();
  let auth=firebase.auth();
  let timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export {db,timestamp,auth};