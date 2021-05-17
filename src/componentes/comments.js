import { editPostFirebase, getPostByID } from '../lib/index.js';

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
      <div id="styleComments" class="styleComments">
        <h5  id = "postText">${commentsUser.text}</h5>
      </div>
      <div>
        <button class="btnDelete" data-id="${commentsUser.id}">Eliminar</button>
        <button class="btnEdit" data-id="${commentsUser.id}">Editar</button>
      </div>`;

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

        e.addEventListener('click', (event) => {
          console.log(event.target);
          const textP = divComments.querySelector('#postText');
          console.log(commentsUser);
          console.log(textP);
          console.log(btnsEdit);
          getPostByID(event.currentTarget.dataset.id)
            .then((post) => {
              const postData = post.data();
              console.log(postData);
              const textarea = document.getElementById('postText');

              textarea.value = postData.text;
            });
          console.log(getPostByID(commentsUser.id));
          const btn = document.getElementById('btnPost');
          btn.innerHTML = 'Editar';

          const editPostFirebase = () => {
            const washingtonRef = db.collection('posts').doc(id);
            // Set the "capital" field of the city 'DC'
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
        });
        const btnComment = document.getElementById('btnPost');
        btnComment.addEventListener('click', () => {
          const textareaEdit = document.getElementById('postText');
          console.log(textareaEdit);
        });
      });
      // const btnsEdit = document.querySelectorAll('.btnEdit');
      // btnsEdit.forEach((btn) => {
      //   btn.addEventListener('click', async (e) => {
      //     const doc = await getPost(e.target.dataset.id);
      //     console.log(doc.data());
      //     const postE = doc.data();
      //   });
      // });
    });
  });
  return divComments;
};
