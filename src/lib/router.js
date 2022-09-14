import { login } from '../pages/login.js';
import { post } from '../pages/post.js';

export const routes = {
    '/': login,
    '/post': post
};

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


