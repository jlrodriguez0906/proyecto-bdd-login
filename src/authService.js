function autenticarUsuario(email, password) {
    const usuarioValido = {
        email: "usuario@ejemplo.com",
        password: "ClaveSegura123"
    };

    if (email === usuarioValido.email && password === usuarioValido.password) {
        return {
            status: 200,
            data: {
                success: true,
                message: "Bienvenido a tu panel",
                token: "token-demo-12345",
                url: "/dashboard"
            }
        };
    }

    return {
        status: 401,
        data: {
            success: false,
            message: "Credenciales no válidas",
            token: null,
            url: "/login"
        }
    };
}

module.exports = { autenticarUsuario };