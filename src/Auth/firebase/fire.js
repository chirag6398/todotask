import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyDxYGGkCXokUBEkfMBjgntkOUa2cB5bZh8",
    authDomain: "simplelogin-896e6.firebaseapp.com",
    databaseURL: "https://simplelogin-896e6.firebaseio.com",
    projectId: "simplelogin-896e6",
    storageBucket: "simplelogin-896e6.appspot.com",
    messagingSenderId: "842537015024",

};

const fire=firebase.initializeApp(firebaseConfig);
export default fire;