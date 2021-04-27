const btnLogin = document.getElementById('btnMail')
const loginDiv = document.getElementById('login');
const sendRegisterBtn = document.getElementById('btnGo');
const firebaseConfig = {
   apiKey: 'AIzaSyBMMBBn6lGE7PUp8zQNbs2hVvej5tVmVOo',
   authDomain: 'saudade-65a6b.firebaseapp.com',
   projectId: 'saudade-65a6b',
   storageBucket: 'saudade-65a6b.appspot.com',
   messagingSenderId: '981149743720',
   appId: '1:981149743720:web:34b1feb31b39e2c79399dd',
   measurementId: 'G-TCN7LTTV55'
 };
firebase.initializeApp(firebaseConfig);
const enviar = () => {
  const email = document.getElementById('mailInput').value
  const pass = document.getElementById('passInput').value
 firebase.auth().createUserWithEmailAndPassword(email, pass)
  .then((userCredential) => {
    var user = userCredential.user;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    alert(errorMessage)
  })}
 sendRegisterBtn.addEventListener('click', ()=> {
   enviar();
 })