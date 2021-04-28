import { register, access, authWithGoogle } from './lib/index.js';

// const btnLogin = document.getElementById("btnMail");
// const loginDiv = document.getElementById("login");
const sendLoginBtn = document.getElementById('btnLogin');
const loginGoogleBtn = document.getElementById('btnGoogle');
const sendRegisterBtn = document.getElementById('btnGo');

// CREACION DE PROYECTO EN EL SERVIDOR DE FIREBASE //
const firebaseConfig = {
  apiKey: 'AIzaSyBMMBBn6lGE7PUp8zQNbs2hVvej5tVmVOo',
  authDomain: 'saudade-65a6b.firebaseapp.com',
  projectId: 'saudade-65a6b',
  storageBucket: 'saudade-65a6b.appspot.com',
  messagingSenderId: '981149743720',
  appId: '1:981149743720:web:34b1feb31b39e2c79399dd',
  measurementId: 'G-TCN7LTTV55',
};
firebase.initializeApp(firebaseConfig);

// REGISTRO CON CORREO Y CONTRASEÑA //
sendRegisterBtn.addEventListener('click', () => {
  register();
});

// INICIO DE SESION CON CORREO Y CONTRASEÑA //
sendLoginBtn.addEventListener('click', () => {
  access();
});

// AUTENTICACION CON GOOGLE //
loginGoogleBtn.addEventListener('click', () => {
  authWithGoogle();
});

// MENSAJES EN ESTADO DE LOGIN //
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('borrar').innerHTML = 'Logueado como usuario registrado';
    const uid = user.uid;
    console.log(uid);
  } else {
    document.getElementById('borrar').innerHTML = 'No logueado como usuario registrado';
  }
});
