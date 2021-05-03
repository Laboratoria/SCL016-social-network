import { loginScreen } from './login.js';
import { profile } from './profile.js';
import { memorial } from './memorial.js';
import { } from './posts.js';

export const changeRoute = (hash) => {
  //   if (window.location.hash == '#/login') {
  // const divLogin = loginScreen();
  // document.getElementById('rootLogin').appendChild(divLogin);
  // }
  if (hash === '#/login') {
    return showTemplate(hash);
  } if (hash === '#/profile') {
    return showTemplate(hash);
  } if (hash === '#/memorial') {
    return showTemplate(hash);
  } if (hash === '#/posts') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('');
  containerRoot.innerHTML = loginScreen();
};
// 1.definir showTemplate
// 2.definir los a href de los botones
// 3.crear switch para cada caso
