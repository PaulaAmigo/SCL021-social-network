// Este es el punto de entrada de tu aplicacion

import { myFunction } from "./lib/index.js";
import { login } from "./pages/login.js";
// import { post } from './pages/post.js';

import { routes, onNavigate } from "./lib/router.js";

export const rootDiv = document.getElementById("root");
rootDiv.appendChild(routes[window.location.pathname]);
console.log(rootDiv);

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};

//document.getElementById('root').appendChild(login());
//myFunction();
