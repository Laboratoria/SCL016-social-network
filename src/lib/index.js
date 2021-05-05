// REGISTRO CON CORREO Y CONTRASEÑA //
export const register = () => {
  const email = document.getElementById('mailInput').value;
  const pass = document.getElementById('passInput').value;
  firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
// INICIO DE SESION CON CORREO Y CONTRASEÑA //
export const access = (email, password) => {
  // const email = document.getElementById('mailLogin').value;
  // const password = document.getElementById('passLogin').value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
// AUTENTICACION CON GOOGLE //
export const authWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // @type
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      alert(errorMessage);
      firebase.auth().signInWithRedirect(provider);
    });
};
