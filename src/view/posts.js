import { comments } from './comments.js';
import { header } from '../componentes/header.js';

export const postsScreen = () => {
  const postsView = `
<div id="postedContent" class="postedCont">
<img id="postedPhoto">
<div class="description">
<p id="usernamePost"></p>
<p id="postedDescription"></p>
</div>
<p id="flowers" class="flowers">
<img id="giveFlowers" class="flowerButton">
</div>
<div id="postContainer" class"postContainer">
<textarea id="postText"  placeholder="Escribe un comentario"></textarea>
<button id="btnPost" class="postButton">Comentar</button>
</div>
<div id"comments">
<p id="postUser" class "postUser"></p>
<p id="postedComments" class="postedComments"></p>
</div>
`;
  const divPosts = document.createElement('div');
  divPosts.setAttribute('class', 'viewPosts');
  const divPostsContainer = document.createElement('div');
  divPosts.innerHTML = postsView;
  divPostsContainer.appendChild(header());
  divPostsContainer.appendChild(divPosts);
  const btnPost = divPosts.querySelector('#btnPost');

  divPostsContainer.appendChild(comments());

  btnPost.addEventListener('click', () => {
    const postComment = divPosts.querySelector('#postText').value;
    const comment = divPosts.querySelector('#postedComments');

    const db = firebase.firestore();
    db.collection('posts').add({
      text: postComment,
    })
      .then((docRef) => {
        console.log('Document written with ID: ', docRef.id);
        comment.innerHTML = postComment;
      })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });

  return divPostsContainer;
};
