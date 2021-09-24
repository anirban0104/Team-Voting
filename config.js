import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
  
  apiKey: "AIzaSyBXd9NirRBC_vrlFbMrEQWoP6cJlbVD39w",
  authDomain: "project-c67.firebaseapp.com",
  databaseURL: "https://project-c67-default-rtdb.firebaseio.com",
  projectId: "project-c67",
  storageBucket: "project-c67.appspot.com",
  messagingSenderId: "1045474023513",
  appId: "1:1045474023513:web:2f13b8a2f228fcd6ea7948"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
