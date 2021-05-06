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
<div id="postContainer">
<textarea id="postText" placeholder="Escribe un comentario"></textarea>
<button id="btnPost" class="postButton">Comentar</button>
</div>
<div id"comments">
<p id="postUser" class "postUser"></p>
<p id="postedComments" class="postedComments"></p>
</div>
`

const divPosts = document.createElement('div');
divPosts.setAttribute('class','posts');
divPosts.innerHTML = postsView; 
const btnPost = divPosts.querySelector('#btnPost');
btnPost.addEventListener('click', () => {
    const postComment = divPosts.querySelector('#postText').value;
    const comment = divPosts.querySelector('#postedComments');
    comment.innerHTML = postComment
})
return divPosts;
}