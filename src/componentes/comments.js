export const comments = () => {
  const divComments = document.createElement('div');
  divComments.setAttribute('class', 'divComments');

  const db = firebase.firestore();

  db.collection('posts').onSnapshot((querySnapshot) => {
    divComments.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const commentsUser = doc.data();

      divComments.innerHTML += `
      <div class="styleComments">
      <h5>${commentsUser.text}</h5>
      </div>
      `;
    });
  });
  return divComments;
};
