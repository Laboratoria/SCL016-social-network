export const comments = () => {
  const divComments = document.createElement('div');
  divComments.setAttribute('class', 'divComments');

  const db = firebase.firestore();

  const deleteCommentsUser = (id) => db.collection('posts').doc(id).delete();
  // const getPost = (id) => db.collection('posts').doc(id).get();

  db.collection('posts').onSnapshot((querySnapshot) => {
    divComments.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const commentsUser = doc.data();
      commentsUser.id = doc.id;
      divComments.innerHTML += `
      <main class="commentsBox">
      <div id="styleComments" class="styleComments"> <span class="a">  ${commentsUser.name} </span> <span class="b">  ${commentsUser.text} </span>
      </div>
      <div class="styleCrudButtons">
        <button class="btnDelete crudBtn" data-id="${commentsUser.id}">Eliminar</button>
        <button class="btnEdit crudBtn" data-id="${commentsUser.id}" >Editar</button>
      </div>
      </main>
      `;

      // BOTON PARA ELIMINAR COMENTARIO
      const btnsDelete = document.querySelectorAll('.btnDelete');
      btnsDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          deleteCommentsUser(e.target.dataset.id);
        });
      });

      // // // BOTON PARA EDITAR COMENTARIO
      const btnsEdit = document.querySelectorAll('.btnEdit');
      btnsEdit.forEach((e) => {
        const commentsUser = doc.data();
        commentsUser.id = doc.id;
        e.addEventListener('click', (id, text) => {
          document.getElementById('postText').value = text;
          console.log(btnsEdit);
          const btn = document.getElementById('btnPost');
          btn.innerHTML = 'Editar';
          const clickEdit = () => {
            const washingtonRef = db.collection('posts').doc(id);
            // Set the "capital" field of the city 'DC'
            const postComment = doc.data().text;
            console.log(postComment);
            return washingtonRef.update({
              text: commentsUser,
            })
              .then(() => {
                console.log('Document successfully updated!');
                btn.innerHTML = 'Comentar';
              })
              .catch((error) => {
              // The document probably doesn't exist.
                console.error('Error updating document: ', error);
              });
          };
          return clickEdit;
        });
      });
    });
  });
  return divComments;
};
