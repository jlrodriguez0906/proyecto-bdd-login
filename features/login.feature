# language: es
@HU-1 @autenticacion
Característica: Inicio de sesión de usuarios
  Como usuario registrado
  Quiero ingresar mis credenciales
  Para acceder a la plataforma

  Escenario: Inicio de sesión exitoso con credenciales válidas
    Dado que el usuario está en la página de inicio de sesión
    Cuando ingresa el correo "usuario@ejemplo.com" y la contraseña "ClaveSegura123"
    Y hace clic en el botón "Ingresar"
    Entonces debería ver el mensaje de bienvenida "Bienvenido a tu panel"
    Y la URL actual debería ser "/dashboard"

  Escenario: Intento de inicio de sesión con contraseña errónea
    Dado que el usuario está en la página de inicio de sesión
    Cuando ingresa el correo "usuario@ejemplo.com" y la contraseña "ClaveIncorrecta"
    Y hace clic en el botón "Ingresar"
    Entonces debería ver un mensaje de error "Credenciales no válidas"
    Y el usuario permanece en la página de inicio de sesión
