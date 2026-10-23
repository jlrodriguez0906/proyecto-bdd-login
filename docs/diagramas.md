# Documentación de Diseño: Módulo de Autenticación (HU-101)

Este documento contiene los modelos conceptuales del proceso de autenticación.

---

## 1. Diagrama de Proceso (BPMN - Flowchart)

Mapea el flujo de control, la validación y los posibles estados de respuesta.

```mermaid
flowchart TD
    A[Inicio: Usuario solicita ingresar] --> B(Ingresar email y password)
    B --> C[Enviar peticion POST /api/v1/auth/login]
    C --> D{¿Credenciales validas?}
    D -->
 E[Generar Token de Sesion]
    E --> F[Retornar estado 200 OK con Token y URL /dashboard]
    F --> G([Fin: Inicio de Sesion Exitoso])
    D -->
 H[Registrar intento fallido]
    H --> I[Retornar estado 401 Unauthorized]
    I --> J([Fin: Acceso Denegado])
```

---

## 2. Diagrama de Clases (Modelo de Dominio)

Define las entidades, objetos de transferencia de datos y la relación entre componentes.

```mermaid
classDiagram
    class Usuario {
        +String email
        -String passwordHash
        +String nombre
        +validarPassword(String password) bool
    }

    class SolicitudLogin {
        +String email
        +String password
    }

    class RespuestaLogin {
        +bool success
        +String message
        +String token
        +String url
    }

    class SesionUsuario {
        +String token
        +String emailUsuario
        +DateTime fechaCreacion
        +esValida() bool
    }

    Usuario "1" -- "0..*" SesionUsuario : genera >
    SolicitudLogin ..> Usuario : procesa
    RespuestaLogin ..> SesionUsuario : retorna
```