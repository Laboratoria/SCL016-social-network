// REGISTRO CON CORREO Y CONTRASEÑA //
export const register = () => {
  const email = document.getElementById('mailInput').value;
  const pass = document.getElementById('passInput').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      let user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    })
}
// INICIO DE SESION CON CORREO Y CONTRASEÑA //
export const access = () => {
  let email = document.getElementById('mailLogin').value;
  let password = document.getElementById('passLogin').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage);
    });
}
// AUTENTICACION CON GOOGLE //
export const authWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // @type
      let credential = result.credential;
      let token = credential.accessToken;
      let user = result.user;
    }).catch((error) => {
      let errorCode = error.code;
      let errorMessage = error.message;
      let email = error.email;
      let credential = error.credential;
      alert(errorMessage);
      firebase.auth().signInWithRedirect(provider);
    })
}