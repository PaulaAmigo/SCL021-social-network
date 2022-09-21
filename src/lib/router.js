import { login } from "../pages/login.js";
import { post } from "../pages/post.js";

// const rootDiv = document.getElementById('root');
export const routes = {

    '/': login(),
    '/post': post(),
};

// export const onNavigate = (pathname) => {
//     window.history.pushState(
//       {},
//       pathname,
//       window.location.origin + pathname
//     )
//     rootDiv.innerHTML = routes[pathname];
//   }
  
// export const routes = {
//     login: {
//         path: '/',
//         pages: login(),
//     },
//     post: {
//         path: '/post',
//         pages: post(),
//     }
// };
