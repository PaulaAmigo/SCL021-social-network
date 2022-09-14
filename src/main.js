// Este es el punto de entrada de tu aplicacion

//import { myFunction } from './lib/index.js';

import { routes } from './lib/router.js';

const rootDiv = document.getElementById('root');
rootDiv.appendChild(routes[window.location.pathname]);
console.log(rootDiv);

//document.getElementById('root').appendChild(login());
//myFunction();
