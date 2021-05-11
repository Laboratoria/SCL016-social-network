export const comments = () => {
  const commentsView = `
  <div id="commentsBox"> </div>
  `;
  const divComments = document.createElement('div');
  divComments.setAttribute('class', 'divComments');
  divComments.innerHTML = commentsView;

  const db = firebase.firestore();
  db.collection('posts').get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      const commentsUser = doc.data();
      // doc.data() is never undefined for query doc snapshots
      //dentro de divcomment podemos imprimir el usuario pero debemos tener primero q nada el nombre del usuario ejemplo commentsUser.user
      divComments.innerHTML += `<div class="styleComments"><h5>${commentsUser.text}</h5></div>`;
    });
  });
  return divComments;
};
