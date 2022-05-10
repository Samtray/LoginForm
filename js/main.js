//imports
import { auth } from './services/user.js';

//events
window.addEventListener('load', () => { init(); });

function init() {
    console.log('Initializing document...');
    document.getElementById('button-sign-in').addEventListener('click', () => { login() });
}

//login
function login() {
    console.log('Login...')
    auth('admin', 'password').then((result) => {
        let message = document.getElementById('message');
        if (result.status = 0)
            message.innerHTML = result.message
        message.style.backgroundColor = "#4CAF50";
        message.style.visibility = "visible";
        setTimeout(() => {
            document.getElementById('message').style.visibility = "hidden";
        }, 1000)
    });
}