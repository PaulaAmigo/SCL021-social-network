export const post = () => {
  const container = document.createElement('div');
  const html = `
<div class= "loginView" >
<header>
<div class="containerLogo">
<img class="logo" src="./img/logo-sin-fondo.png" alt="logo" />
</div>
<div class="welcome">
<h2>Te damos la bienvenida a</h2>
<h1>TRUELACHE</h1> 
<hr>
<footer>
<p> © 2022</p>
<a href="https://github.com/AshleyBustosE"> Ashley Bustos </a>
<a href="https://github.com/PaulaAmigo"> Paula Amigo </a>
<a href="https://github.com/DanielaRamirezCanquiz"> Daniela Ramírez </a>
</footer> `;
  container.innerHTML = html;
  return container;
};
