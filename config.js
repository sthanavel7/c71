import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyAe3KyqTFYRYF8G_AGxy_75QDkdr0nIFwQ",
    authDomain: "wireless-library-b28c7.firebaseapp.com",
    databaseURL: "https://wireless-library-b28c7.firebaseio.com",
    projectId: "wireless-library-b28c7",
    storageBucket: "wireless-library-b28c7.appspot.com",
    messagingSenderId: "160941838898",
    appId: "1:160941838898:web:da12d2e10b2ad1ca44622b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()