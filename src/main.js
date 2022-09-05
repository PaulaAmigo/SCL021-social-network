// Este es el punto de entrada de tu aplicacion

import { myFunction } from "./lib/index.js";
import { login } from "./pages/login.js";
document.getElementById("root").innerHTML = login;
myFunction();
