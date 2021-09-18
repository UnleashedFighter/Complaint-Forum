import firebase from 'firebase'
require("@firebase/firestore")


 //Add configuration here
 const firebaseConfig = {
  apiKey: "AIzaSyDfvofsrGTcLtFDdVi3fi747_zqS--em48",
  authDomain: "complaint-forum-cb9d3.firebaseapp.com",
  projectId: "complaint-forum-cb9d3",
  storageBucket: "complaint-forum-cb9d3.appspot.com",
  messagingSenderId: "735896148067",
  appId: "1:735896148067:web:0605b3735f3edaddfe8056"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

