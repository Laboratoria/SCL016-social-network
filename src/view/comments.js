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
      // doc.data() is never undefined for query doc snapshots
      const postsList = document.createElement('h1');
      postsList.textContent = (doc.id, ' => ', doc.data());
      divComments.appendChild(postsList);
    });
  });
  return divComments;
};
