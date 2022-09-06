export const login = () => {
  const container = document.createElement("div");
  const html = `
  <div class= "loginView" >
  <header>
  <div class="containerLogo">
  <img class="logo" src="./img/logo-sin-fondo.png" alt="logo" />
  </div>
  <div class="welcome">
  <h2>Te damos la bienvenida a</h2>
  <h1>TRUELACHE</h1> 
  <h2>Dónde puedes hacer tu trueque y cambalache</h2>
  </div>
  </header>
<main class="login">
  <fieldset class="data">
    <div class="inputMail">
     <h3>Correo electrónico</h3>
     <input type="email" class="input" placeholder="TuCorreo@example.com"></input>
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
     <button type="button" class="googleButton"><img class="googleLogo" src="./img/icons-google.png"/>oogle</button>
  </fieldset>
 
</main>

  </div> `;

  container.innerHTML = html;
  return container;
};
