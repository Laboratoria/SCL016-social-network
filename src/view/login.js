import { register } from '../lib/index.js'

export const loginScreen = () => {
    const LoginView = `
  <div class="login">
      <button id="btnMail" class="mailButton">Iniciar con correo electrónico</button>
      <button id="btnGoogle" class="googleButton">Iniciar sesión con Google</button>
      <button id="btnRegister" class="registerButton">Registrarse </button>
    </div>
    <div id="login" class="loginButtons">
      <input type="email" id="mailLogin" placeholder="Correo electrónico">
      <input type="password" id="passLogin" placeholder="Contraseña">
      <button id="btnLogin" class="btnLogin">Ir</button>
    </div>
    <div id="register" class="registerButtons">
      <input type="email" id="mailInput" class="mailRegister" placeholder="Correo Electrónico">
      <input id="nameInput" class="nameRegister" placeholder="Nombre y Apellido">
      <input type= "password" id="passInput" class="passRegister" placeholder="Contraseña">
      <button id="btnGo" class="btnGo">Ir</button>
    </div>`;

    const divLogin = document.createElement('div');
    divLogin.setAttribute('class', 'ViewContainer');
    divLogin.innerHTML = LoginView;
    const btnRegisterGo = divLogin.querySelector('#btnGo');
    btnRegisterGo.addEventListener('click', () => {
        const mail = document.getElementById('mailInput').value;
        const pass = document.getElementById('passInput').value;
        register(mail, pass);
    });
    return divLogin;
}
