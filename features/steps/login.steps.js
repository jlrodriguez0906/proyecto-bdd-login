const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');
const { autenticarUsuario } = require('../../src/authService');

let correoInput = '';
let passwordInput = '';
let respuestaApi = null;

Given('que la API de autenticación está disponible', function () {
    correoInput = '';
    passwordInput = '';
    respuestaApi = null;
});

When('se envía una petición de login con correo {string} y contraseña {string}', function (email, password) {
    correoInput = email;
    passwordInput = password;
    respuestaApi = autenticarUsuario(correoInput, passwordInput);
});

Then('el servicio responde con un código de estado {int}', function (statusEsperado) {
    assert.strictEqual(respuestaApi.status, statusEsperado);
});

Then('la respuesta contiene success igual a {string}', function (valorSuccess) {
    const esperado = valorSuccess === 'true';
    assert.strictEqual(respuestaApi.data.success, esperado);
});

Then('la respuesta incluye el token {string}', function (tokenEsperado) {
    assert.strictEqual(respuestaApi.data.token, tokenEsperado);
});

Then('la URL de redirección es {string}', function (urlEsperada) {
    assert.strictEqual(respuestaApi.data.url, urlEsperada);
});

Then('el mensaje de respuesta es {string}', function (mensajeEsperado) {
    assert.strictEqual(respuestaApi.data.message, mensajeEsperado);
});