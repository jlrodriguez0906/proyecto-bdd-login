function login(email, password) {
    if (email === "usuario@ejemplo.com" && password === "ClaveSegura123") {
        return { success: true, message: "Bienvenido a tu panel", url: "/dashboard" };
    }
    return { success: false, message: "Credenciales no válidas", url: "/login" };
}

module.exports = { login };