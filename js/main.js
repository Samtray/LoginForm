//imports
import { auth } from './services/user.js';

//events
window.addEventListener('load', () => { init(); });


//Variables
const SUCCESS = "#68E06C";
const FAILED = "#FD8E8E";

function init() {
    console.log('Initializing document...');
    document.getElementById('button-sign-in').addEventListener('click', () => { login() });
}

function showMessage(status, result){
    let message = document.getElementById('message');
    message.innerHTML = result.message
    message.style.backgroundColor = status;
    message.style.visibility = "visible";
    message.style.animation = "fadeIn 0.2s"

}

//login
function login() {
    console.log('Login...')
    let username = document.getElementById('input-username').value;
    let password = document.getElementById('input-password').value;

    auth(username, password).then((result) => {
        switch (result.status){
            case 0: showMessage(SUCCESS, result); break;
            case 1: showMessage(FAILED, result); break;
            default: showMessage(FAILED, result); break;
        }
           
    });
}