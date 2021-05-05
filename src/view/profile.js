import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';

export const profile = () => {
  // <!-- PAGINA DE PERFIL -->
  const profileView = `

<main>
  <div id="creationProfile">
    <figure>
      <input type="file" id="uploadPhoto" class="uploadPhoto">
    </figure>
    <div id="dataPersonal">
      <input type="text" id="newName" class="newName">
      <input type="text" id="residency" class="recidency">
      <input type="text" id="extra" class="extra">
    </div>
<hr>
    <div id="memorialsCreated">
      <h3>Memoriales Creados</h3>
    </div>
<hr>
    <div id="memorialesFollowed">
      <h3>Memoriales Seguidos</h3>
    </div>
  </div>
</main>
`;
  const divProfile = document.createElement('div');
  divProfile.setAttribute('class', 'ViewProfile');
  const divProfileContainer = document.createElement('div');
  divProfile.innerHTML = profileView;
  divProfileContainer.appendChild(header());
  divProfileContainer.appendChild(divProfile);
  divProfileContainer.appendChild(footer());

  return divProfileContainer;
};
