import { signOutGoogle } from "../firebase.js";

export const post = () => {
  const container = document.createElement("div");
  const html = `
<div class= "loginView" >
<header class="headerPost">
<div class="containerLogoPost">
<img class="logo" src="./img/logo-sin-fondo.png" alt="logo" />
<h1 class="h1Post" >TRUELACHE</h1> 
</div>

<div class = "post"> 
<textarea class= "inputPost" placeholder = "Escribe aquí tu..."></textarea>
<button type="button" class= "buttonPost"><img class="imgBtnPost" src="./img/imagen 1.png"/></button>
</div> 
<button type="button" class="buttonSignOff"<img class="imgBtnSignOut" src="./img/signout.jpg"/></button>`;
  container.innerHTML = html;

  const btnSignOff = container.querySelector(".buttonSignOff");
  btnSignOff.addEventListener("click", () => {
    signOutGoogle();
    //console.log(signOutGoogle);
  });
  return container;
};
