export const profile = () => {
  // <!-- PAGINA DE PERFIL -->
  const profileView = `
    <header>
  <nav class="menuPricipal ">
    <ul class="container">
      <li ><i class="far fa-user-circle fa-lg " ></i>
        <div class="submenu">
          <ul>
            <li class = "submenu_item"><i class="far fa-user-circle "></i></li>
            <li class = "submenu_item">Nombre de Usuario</li>
            <li class = "submenu_item">Correo electronico</li>
          </ul> 
          <ul class = "b_item">
            <li class = "submenu_item1">Editar perfil</li>
            <li>Ver Manifiesto</li>
          </ul>
          <ul class = "b_item">
            <li>Cerrar Sesion</li>
            <li>Eliminar perfil</li>
          </ul>
        </div>
      </li>
      <li><img src="IMAGES/SMALL LOGO.png" class="headerLogo" width="90" alt="Logo "></li>
      <li><i class="fas fa-search fa-lg "></i> <i class="fas fa-bell fa-lg" ></i></li>
    </ul>
  </nav>
</header>

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

<footer> <hr> Diseñado y creado por F.A.B ©
</footer>
`;
  const divProfile = document.createElement('div');
  divProfile.setAttribute('class', 'ViewProfile');
  divProfile.innerHTML = profileView;

  return divProfile;
};
