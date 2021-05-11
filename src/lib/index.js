// REGISTRO CON CORREO Y CONTRASEÑA //
export const register = (mail, pass) => {
  firebase.auth().createUserWithEmailAndPassword(mail, pass)
    .then((userCredential) => {
      const user = userCredential.user;
      window.location.hash = '#/profile';
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/invalid-email') {
        alert('Correo inválido');
      } else if (errorCode === 'auth/weak-password') {
        alert('Su contraseña debe tener minimo 6 carácteres');
      } else if (errorCode === 'auth/email-already-in-use') {
        alert('Cuenta existente');
      }
      alert(errorMessage);
    });
};
// INICIO DE SESION CON CORREO Y CONTRASEÑA //
export const access = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      window.location.hash = '#/profile';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('Correo electrónico o contraseña inválido');
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
      window.location.hash = '#/profile';
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      alert(errorMessage);
      firebase.auth().signInWithRedirect(provider);
    });
};
