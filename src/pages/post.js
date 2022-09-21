import { signOutGoogle } from "../firebase.js";

export const post = () => {
  const container = document.createElement('div');
  const html = `
<div class= "loginView" >
<header>
<div class="containerLogo">
<img class="logo" src="./img/logo-sin-fondo.png" alt="logo" />
</div>
<h1>TRUELACHE</h1> 
<div class = "post"> 
<input type="text" class= "inputPost" placeholder = "Escribe aquí tu..."></input>
<button type="button" class= "buttonPost"><img class="imgBtnPost" src="./img/send1.jpg"/></button>
</div> 
<button type="button" class="buttonSignOff">Cerrar Sesión</button>`;
  container.innerHTML = html;
  
  const btnSignOff = container.querySelector('.buttonSignOff');
  btnSignOff.addEventListener('click', () =>{
    signOutGoogle();
     //console.log(signOutGoogle);
     
  });
  return container;
};


