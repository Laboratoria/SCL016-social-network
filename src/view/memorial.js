export const memorial = () => {
  const memorialView = `
  <header>
  <nav class="menuPricipal ">
    <ul class="container">
      <li ><i class="far fa-user-circle fa-lg " ></i>
        <div class="submenu">
          <ul>
            <li><i class="far fa-user-circle "></i></li>
            <li>Nombre de Usuario</li>
            <li>Correo electronico</li>
          </ul>
          <ul>
            <li>Editar perfil</li>
            <li>Ver Manifiesto</li>
          </ul>
          <ul>
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
  <main >
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
<footer> <hr> Diseñado y creado por F.A.B © </footer>
`
}