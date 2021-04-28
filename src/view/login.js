
export const loginView = () => {
   const root = document.getElementById('rootLogin');
   const btnLogin = document.createElement('button');
   btnLogin.className = 'loginButton';
   btnLogin.setAttribute('id','btnMail');
   btnLogin.innerHTML = 'Iniciar sesión con Correo electrónico';
   const btnGoogle = document.createElement('button');
   btnGoogle.className = 'loginButton';
   btnGoogle.setAttribute('id','btnGoogle');
   btnGoogle.innerHTML = 'Iniciar sesión con Google';
   const btnRegister = document.createElement('button');
   btnRegister.className = 'registerButton';
   btnRegister.setAttribute('id','btnRegister')
   btnRegister.innerHTML = 'Registrarse';
    root.appendChild(btnLogin);
    root.appendChild(btnGoogle);
    root.appendChild(btnRegister);
}

export const loginInput = () => {
    const root = document.getElementById('rootLogin');
    const inputMail = document.createElement('input');
    inputMail.className = 'loginInput';
    inputMail.setAttribute('id','mailLogin');
    inputMail.setAttribute('placeholder','Correo electrónico');
    const inputPass = document.createElement('input');
    inputPass.className = 'loginInput';
    inputPass.setAttribute('id','passLogin');
    inputPass.setAttribute('placeholder','Contraseña');
    const btnSend = document.createElement('button');
    btnSend.className = 'btnGo';
    btnSend.setAttribute('id','btnLogin');
    root.appendChild(inputMail);
    root.appendChild(inputPass);
    root.appendChild(btnSend);
}

export const registerInput = () => {
    const root = document.getElementById('rootLogin');
    const inputRegisterMail = document.createElement('input');
    inputRegisterMail.className = 'loginInput';
    inputRegisterMail.setAttribute('id','mailInput');
    inputRegisterMail.setAttribute('placeholder','Correo electrónico');
    const inputRegisterPass = document.createElement('input');
    inputRegisterPass.className = 'loginInput';
    inputRegisterPass.setAttribute('id','passLogin');
    inputRegisterPass.setAttribute('placeholder','Contraseña');
    const btnRegisterSend = document.createElement('button');
    btnRegisterSend.className = 'btnGo';
    btnRegisterSend.setAttribute('id','btnGo');
    root.appendChild(inputRegisterMail);
    root.appendChild(inputRegisterPass);
    root.appendChild(btnRegisterSend);
}