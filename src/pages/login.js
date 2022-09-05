export const login = () => {
  const container = document.createElement(div);
  const html = `
  <div class= "login" >
  <header>
  <img class="logo" src="./img/logo-sin-fondo.png" alt="logo" />
  <h2>Te damos la bienvenida a</h2>
  <h1>TRUELACHE</h1> 
  <h2>Dónde puedes hacer tu trueque y cambalache</h2>
</header>
<main class="login">
  <fieldset class="data">
    <div class="inputMail">
     <h3>Correo electrónico</h3>
     <input type="text" class="input" placeholder="Correo"></input>
    </div>
    <div class="inputPassword">
     <h3>Contraseña</h3>
     <input type="password" class="input" placeholder="Contraseña"></input>
     <h4>¿Olvidaste tu contraseña?</h4>
    </div>
     <button type="button" class="loginButton">Iniciar Sesión</button>
           <div class="linkCheckin">
     <h3>Regístrate aquí</h3>
     <h3>o</h3>
    </div>
     <button type="button" class="googleButton"><img class="googleLogo" src="./img/icons-google.png"/>OOGLE</button>
  </fieldset>
 
</main>

  </div> `;

  container.innerHTML = html;
  return container;
};
