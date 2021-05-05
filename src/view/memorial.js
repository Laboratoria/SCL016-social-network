import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';

export const memorial = () => {
  const memorialView = `
    <main>
      <section id="profileElements">
        <p class="inMemory">En memoria de: </p>
        <h1 class="nameMemorial">Lucy Gordon</h1>
        <h3 class="dateMemorial">mayo - septiembre</h3>
        <h2 class="cityMemorial">London</h2>
        <h2 class="quoteMemorial">"Algo"</h2>
        <img src="" alt="profile">
      </section>
      <section class="memorialElements">
          <h1>Memorial</h1>
          <div memorialPosts></div>
      </section>
     </main>
  `;

  const divMemorial = document.createElement('div');
  divMemorial.setAttribute('class', 'ViewMemorial');
  const divMemorialContainer = document.createElement('div');
  divMemorial.innerHTML = memorialView;
  divMemorialContainer.appendChild(header());
  divMemorialContainer.appendChild(divMemorial);
  divMemorialContainer.appendChild(footer());

  return divMemorialContainer;
};
