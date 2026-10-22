const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { login } = require('../../src/login');

let correoInput = '';
let passInput = '';
let resultado = null;

Given('que el usuario está en la página de inicio de sesión', function () {
    correoInput = '';
    passInput = '';
    resultado = null;
});

When('ingresa el correo {string} y la contraseña {string}', function (email, password) {
    correoInput = email;
    passInput = password;
});

When('hace clic en el botón {string}', function (boton) {
    if (boton === 'Ingresar') {
        resultado = login(correoInput, passInput);
    }
});

Then('debería ver el mensaje de bienvenida {string}', function (mensajeEsperado) {
    assert.strictEqual(resultado.success, true);
    assert.strictEqual(resultado.message, mensajeEsperado);
});

Then('la URL actual debería ser {string}', function (urlEsperada) {
    assert.strictEqual(resultado.url, urlEsperada);
});

Then('debería ver un mensaje de error {string}', function (errorEsperado) {
    assert.strictEqual(resultado.success, false);
    assert.strictEqual(resultado.message, errorEsperado);
});

Then('el usuario permanece en la página de inicio de sesión', function () {
    assert.strictEqual(resultado.url, '/login');
});
