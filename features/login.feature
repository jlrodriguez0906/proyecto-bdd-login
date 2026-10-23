# language: es
@HU-1 @api @autenticacion
Característica: API de autenticación de usuarios
  Como usuario registrado
  Quiero autenticarme en el endpoint de la API
  Para obtener acceso al sistema y mi token de sesión

  Escenario: Autenticación exitosa mediante API
    Dado que la API de autenticación está disponible
    Cuando se envía una petición de login con correo "usuario@ejemplo.com" y contraseña "ClaveSegura123"
    Entonces el servicio responde con un código de estado 200
    Y la respuesta contiene success igual a "true"
    Y la respuesta incluye el token "token-demo-12345"
    Y la URL de redirección es "/dashboard"

  Escenario: Intento de autenticación con credenciales erróneas
    Dado que la API de autenticación está disponible
    Cuando se envía una petición de login con correo "usuario@ejemplo.com" y contraseña "ClaveIncorrecta"
    Entonces el servicio responde con un código de estado 401
    Y la respuesta contiene success igual a "false"
    Y el mensaje de respuesta es "Credenciales no válidas"