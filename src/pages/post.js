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
<hr>`;
  container.innerHTML = html;
  return container;
};
