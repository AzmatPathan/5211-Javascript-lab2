"use strict";
window.onload = loginForm;
function loginForm() {
    var formHandle = document.forms.login_Form;
    formHandle.onsubmit = processForm;

    function processForm() {

        var username = document.getElementById("login__username");
        var password = document.getElementById("login__password");
        var oUsername = document.getElementById("output__username");
        var oPassword = document.getElementById("output__password");

        if (username.value === "") {
            username.className = "login__txt login__txt_error";
        } else {
            username.className = "login__txt";
        }
        if (password.value === "") {
            password.className = "login__txt login__txt_error";
        } else {
            password.className = "login__txt";
        }

        if (username.value && password.value) {
            document.getElementById("output").style.display = "block";
            oUsername.innerText = username.value;
            oPassword.innerText = password.value;
        }
        return false;
    }

}