// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';

import { getAuth, createUserWithEmailPassword, signInWithEmailPassword } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js';

import { getDatabase, set, ref, update } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCiwkmUfEX6LrJus31N7lULEHSehI30leI',
  authDomain: 'lombagdsc.firebaseapp.com',
  projectId: 'lombagdsc',
  storageBucket: 'lombagdsc.appspot.com',
  messagingSenderId: '301297514819',
  appId: '1:301297514819:web:fd30976f6f2709f95117f6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const signup = document.getElementById('signup');

signup.addEventListener('click', (e) => {
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let confirmpw = document.getElementById('confirmpw').value;

  createUserWithEmailAndPassword(auth, emailSignup, passwordSignup).then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
  });
  then(() => {
    alert('User telah ditambahkan');
  })
    .catch((error) => {
      alert(error);
    })

    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
});
