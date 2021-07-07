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
      <main class="commentsBox">
      <div id="styleComments" class="styleComments"> <span class="a">  ${commentsUser.name} </span>
       <span class="b postText" id="postText">  ${commentsUser.text} </span>
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
        e.addEventListener('click', (event) => {
          const textP = divComments.querySelector('#postText');
          getPostByID(event.currentTarget.dataset.id)
            .then((post) => {
              const postData = post.data();
              const textarea = document.getElementById('postText');
              textarea.value = postData.text;
            });
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
