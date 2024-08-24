// 1. Consumo de Datos desde una API
async function obtenerUsuarios() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const usuarios = await response.json();
        console.log(usuarios);
        return usuarios;
    } catch (error) {
        console.error('Error al obtener usuarios:', error);
    }
}

// 2. Procesamiento de Datos de una API
async function imprimirNombresDeUsuarios() {
    const usuarios = await obtenerUsuarios();
    if (usuarios) {
        const nombres = usuarios.map(usuario => usuario.name);
        console.log('Nombres de usuarios:', nombres);
    }
}

// 3. Autenticación Simulada
function autenticarUsuario(credenciales) {
    const usuarioPredefinido = { usuario: 'admin', contraseña: '12345' };
    return credenciales.usuario === usuarioPredefinido.usuario &&
           credenciales.contraseña === usuarioPredefinido.contraseña;
}

// 4. Transformación de Datos
async function mapearUsuarios() {
    const usuarios = await obtenerUsuarios();
    if (usuarios) {
        const usuariosMapeados = usuarios.map(usuario => ({
            nombre: usuario.name,
            email: usuario.email
        }));
        console.log('Usuarios mapeados:', usuariosMapeados);
        return usuariosMapeados;
    }
}

// 5. Validación de Formularios
function validarFormulario(formulario) {
    const { nombre, email, password } = formulario;
    return nombre && email && password;
}

// 6. Paginación de Datos
function obtenerPagina(datos, numeroDePagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroDePagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;
    return datos.slice(inicio, fin);
}

// 7. Envío de Datos a una API
async function enviarDatos(data) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const resultado = await response.json();
        console.log('Respuesta de la API:', resultado);
        return resultado;
    } catch (error) {
        console.error('Error al enviar datos:', error);
    }
}

// 8. Búsqueda de Usuarios
function buscarUsuarioPorEmail(usuarios, email) {
    return usuarios.find(usuario => usuario.email === email);
}

// 9. Generación de Token de Autenticación
function generarToken(usuario) {
    const tokenSimulado = btoa(JSON.stringify(usuario));
    console.log('Token generado:', tokenSimulado);
    return tokenSimulado;
}

// 10. Actualización de Información del Usuario
function actualizarUsuario(usuario, cambios) {
    const usuarioActualizado = { ...usuario, ...cambios };
    console.log('Usuario actualizado:', usuarioActualizado);
    return usuarioActualizado;
}


(async () => {
    await imprimirNombresDeUsuarios();
    
    const esAutenticado = autenticarUsuario({ usuario: 'admin', contraseña: '12345' });
    console.log('Autenticación:', esAutenticado);

    const usuariosMapeados = await mapearUsuarios();
    if (usuariosMapeados) {
        const usuarioEncontrado = buscarUsuarioPorEmail(usuariosMapeados, 'Shanna@melissa.tv');
        console.log('Usuario encontrado por email:', usuarioEncontrado);
    }

    const token = generarToken({ id: 1, nombre: 'Usuario1' });
    console.log('Token:', token);

    const usuarioActualizado = actualizarUsuario({ nombre: 'Juan', email: 'juan@example.com' }, { email: 'juan.nuevo@example.com' });
    console.log('Usuario Actualizado:', usuarioActualizado);
})();
