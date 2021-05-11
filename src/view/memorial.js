import { footer } from '../componentes/footer.js';
import { header } from '../componentes/header.js';

export const memorial = () => {
  const memorialView = `
    <main>
      <section id="profileElements">
      <div id="personMemorial">
      <figure >
      <img src="./IMAGES/LUCY GORDON.jpeg" class="circleProfilePhoto" width="80%>
    </figure>
      </div>
      <div id="infoText">
        <p class="inMemory">En memoria de: </p>
        <h1 class="nameMemorial">Lucy Gordon</h1>
        <h3 class="dateMemorial">mayo - septiembre</h3>
        <h2 class="cityMemorial">London</h2>
        <h2 class="quoteMemorial">"Algo"</h2>
      </div>
      </section>

      <section class="memorialElements">
          <h1>Memorial</h1>
           <div memorialPosts>
            <div class="imagesMemorial">
             <img src="./IMAGES/paseo.jpg" alt="" class="imgMemorial" >
             <img src="./IMAGES/picnic.jpg" alt="" class="imgMemorial">
             <img src="./IMAGES/amigas.jpg" alt="" class="imgMemorial">
             <img src="./IMAGES/boda.jpeg" alt="" class="imgMemorial">
             <img src="./IMAGES/playa.jpg" alt="" class="imgMemorial">
             <img src="./IMAGES/trekking.jpg" alt="" class="imgMemorial">
            </div>
          </div>
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
