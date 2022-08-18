// ARRAY CONTENEDOR DE CURSOS
let cursosTotales = JSON.parse(localStorage.getItem("cursos")) || [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];


// DE FORMA ASINCRONICA, TRAEMOS LOS CURSOS
const cargarCursos = async () => {
    // intenta esto
    try {
        let response = await fetch("./cursos.json");
        let result = await response.json();
        result.forEach((el) => {
            cursoComp = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
            grado = document.createElement("p");
            grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
            grado.innerHTML += cursoComp;
            cursosBox.appendChild(grado);
        })
    }
    // si hay error hace esto (catch)
    catch (error) {
        console.log(error)
    }
}
cargarCursos();

let onN;
let onSurN;

console.log(onN + onSurN)

// ------------------------------

// VARIABLES VACIAS
let nombreAlumnoValue;
let apellidoAlumnoValue;
let alumnosObjeto = [];

// --------------------------------

///// ASIGNACION DE NODOS A VARIABLES /////

// -------- NAVBAR --------
// CONTENEDOR DE BOTONES FUNCIONALES
let controlBox = document.getElementById("controlBox");
controlBox.style.display = "none";
// BOTONES
let btnEliminarCursos = document.getElementById("eliminarCurso");
let btnAgregarCursos = document.getElementById("añadirCurso");
let btnCerrarSesion = document.getElementById("cerrarSesion");

// CONTENEDOR DE BOTONES PARA LOGIN
let loginBox = document.getElementById("loginBox");
loginBox.style.display = "none";
// BOTONES 
let btnIniciarSesion = document.getElementById("iniciarSesion");
btnIniciarSesion.style.display = "none";
let btnCrearUsuario = document.getElementById("crearUsuario");
btnCrearUsuario.style.display = "none";

// -------- SECCION PARA VER CURSOS --------
// DIV CONTAINER DE CURSOS AÑADIDOS Y DIV DE CURSOS
let cursosBox = document.getElementById("cursosBox");
// CONTAINER DE CURSOS AGREGADOS

// -------- FORUMLARIO PARA AGREGAR CURSOS --------
// INPUTS
let año = document.getElementById("año");
let division = document.getElementById("division");
let turno = document.getElementById("turno");
// BOTON
let btnAgregar = document.getElementById("btnAgregar");
// CONTENEDOR DEL FORMULARIO
let crearCursoContainer = document.getElementById("crearCursoContainer");
crearCursoContainer.style.display = "none";
// FORMULARIO
let formulario = document.getElementById("crearCurso");

// -------- FORMULARIO PARA ELIMINAR CURSOS --------
// CONTENEDOR DE FORMULARIO PARA ELIMINAR CURSOS
let eliminarCursoContainer = document.getElementById("eliminarCursoContainer")
eliminarCursoContainer.style.display = "none";
// FORMULARIO PARA ELIMINAR
let deleteForm = document.getElementById("deleteForm");
// INPUTS
let añoBorrar = document.getElementById("añoBorrar");
let divisionBorrar = document.getElementById("divisionBorrar");
// BOTON
let btnBorrarCurso = document.getElementById("btnBorrarCurso");

// -------- FORMULARIO PARA AGREGAR ALUMNOS --------
// CONTENEDOR
let agregarAlumnosBox = document.getElementById("agregarAlumnosBox");
// BOTON
let agregarAlumnosBtn = document.getElementById("agregarAlumnosBtn");
//FORM CONTENEDOR DE INPUTS
let agregarAlumnosFormBox = document.getElementById("agregarAlumnosFormBox");
agregarAlumnosFormBox.style.display = "none";
// INPUTS
// CONTENEDOR DE INPUTS
let nombreAlumno = document.getElementById("nombreAlumno");
let apellidoAlumno = document.getElementById("apellidoAlumno");
let cantidadAlumnos = document.getElementById("cantidadAlumnos");
// BOTON PARA SUMAR ALUMNOS AL ARRAY 
let btnAgregarA = document.getElementById("btnAgregarA");
btnAgregarA.style.display = "none";
// BOTON PARA SUBIR ALUMNO Y CURSOS AL OBJETO
let btnAgregarAyC = document.getElementById("btnAgregarAyC");

// -------- FORMULARIO PARA PREGUNTAR SI QUIERE AÑADIR ALUMNOS --------
// CONTENEDOR
let preguntarContainer = document.getElementById("preguntarContainer");
preguntarContainer.style.display = "none";
// PARRAFO CON TEXTO
let preguntaAñador = document.getElementById("preguntarAñadir");
// BOTONES
let si = document.getElementById("si");
let no = document.getElementById("no");

// -------- FORMULARIO PARA INICIAR SESION --------
// CONTENEDOR
//CONTENEDOR DE FORM
let iniciarSesionBox = document.getElementById("iniciarSesionBox");
iniciarSesionBox.style.display = "none";
// FORM
// INPUTS DEL FORM
let nombreUsuario = document.getElementById("nombreUsuario");
let apellidoUsuario = document.getElementById("apellidoUsuario");
// BOTON DEL FORM
let btnIniciarSesionForm = document.getElementById("btnIniciarSesionForm");

// -------- FORMULARIO PARA CREAR USUARIO --------
// CONTENEDOR
// CONTENEDOR DE FORM
let crearUsuarioBox = document.getElementById("crearUsuarioBox");
crearUsuarioBox.style.display = "none";
// FORM
// INPUTS DEL FORM
let nombreCrearUsuario = document.getElementById("nombreCrearUsuario");
let apellidoCrearUsuario = document.getElementById("apellidoCrearUsuario");
// BOTON DEL FORM
let btnCrearUsuarioForm = document.getElementById("btnCrearUsuarioForm");

// -------- CONTENEDOR DE ALUMNOS AGREGADOS --------
let alumnosAgregadosBox = document.getElementById("alumnosAgregadosBox");
alumnosAgregadosBox.style.display = "none";

// --------------------------------

if (usuarios.length === 0) {
    // Swal.fire("Array de usuarios vacio");
    console.log(usuarios);
    controlBox.style.display = "none";
    loginBox.style.display = "block";
    btnIniciarSesion.style.display = "none";
    btnCerrarSesion.style.display = "none";
    btnCrearUsuario.style.display = "inline-block";
} else {
    console.log(usuarios);
    // Swal.fire("Array de usuarios, contiene algo");
    loginBox.style.display = "block";
    btnIniciarSesion.style.display = "block";
    controlBox.style.display = "block";
}

btnCrearUsuario.onclick = (e) => {
    e.preventDefault();
    crearCursoContainer.style.display = "none";
    eliminarCursoContainer.style.display = "none";
    agregarAlumnosFormBox.style.display = "none";
    buscarCursoContainer.style.display = "none";
    crearUsuarioBox.style.display = "block";
}

btnCerrarSesion.onclick = (e) => {
    e.preventDefault();
}

btnCrearUsuarioForm.onclick = (e) => {
    e.preventDefault();
    fnCrearUsuario();
}

btnIniciarSesion.onclick = (e) => {
    e.preventDefault();
    crearCursoContainer.style.display = "none";
    eliminarCursoContainer.style.display = "none";
    agregarAlumnosFormBox.style.display = "none";
    buscarCursoContainer.style.display = "none";
    iniciarSesionBox.style.display = "block";
}

let nombreUsuarioValue = nombreUsuario.value;
let apellidoUsuarioValue = apellidoUsuario.value;

// btnIniciarSesionForm.onclick = (e) => {
//     e.preventDefault(e)
//     if (usuarios != []) {
//         if (nombreUsuarioValue != "" && apellidoUsuarioValue != "") {
//             let usuarioIngresado = usuarios.filter(usuario => usuario.nombre == nombreAlumnoValue && usuario.apellido == apellidoUsuarioValue);
//             controlBox.style.display = "block";
//         } else {
//             Swal.fire("Faltan datos")
//         }
//     }
// }

const fnCerrarSesion = () => {
    let casa = usuarios.find(usuario => usuario.nombre == onN && usuario.apellido == onSurN);
    console.log(casa)
}
fnCerrarSesion();

///// CONSTRUCTORES /////

class Curso {
    constructor(año, division, turno) {
        this.año = año;
        this.division = division;
        this.turno = turno;
        this.alumnos = [];
        this.cantidad_alumnos = this.alumnos.length;
        this.info = `Año: ${this.año}° - Division: ${this.division}`;
        this.infoFull = `Año: ${this.año}° - Division: ${this.division}° - Turno: ${this.turno}`;
    }
}

class Alumno {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        //     this.curso = cursoAlumno;
    }
}

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

// --------------------------------

///// FUNCIONES /////
let arrayAlumnos;
// CARGA LOS CURSOS SI LOS HAY
cursosTotales.forEach((el) => {
    cursoComp = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
    grado = document.createElement("p");
    grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
    grado.innerHTML = cursoComp;
    cursosBox.appendChild(grado);

    let btnVerA = document.createElement("button");
    btnVerA.setAttribute("class", "mx-2");
    btnVerA.setAttribute("id", "btnVerA")
    btnVerA.textContent = "Ver alumnos";
    grado.appendChild(btnVerA);

    let btnCerrarA = document.createElement("button");
    btnCerrarA.setAttribute("class", "mx-2");
    btnCerrarA.setAttribute("id", "btnCerrarA");
    btnCerrarA.textContent = "Cerrar";

    let {
        alumnos
    } = el;
    console.log(alumnos)

    let listaA = document.createElement("ul");
    grado.appendChild(listaA);

    btnVerA.onclick = (e) => {
        e.preventDefault();
        alumnos.forEach((alumno) => {
            let datoA = `${alumno.nombre} ${alumno.apellido}`
            let alumnito = document.createElement("li");
            alumnito.textContent = datoA;
            listaA.appendChild(alumnito);
        })
        grado.appendChild(btnCerrarA);

    }

})



// FUNCION PARA BUSCAR UN CURSO, POR AÑO, DIVISION Y TURNO. (PROXIMAMENTE A USAR)
// const buscaCurso = () => {
//     let pregAño = parseInt(prompt("Año"));
//     let pregDiv = parseInt(prompt("Division"));
//     let pregTurn = prompt("turno");
//     let resBus = cursosTotales.filter(curso => curso.año == pregAño && curso.division == pregDiv && curso.turno == pregTurn)
//     return resBus;
// }

// FUNCION QUE MUESTRA EL FORMULARIO PARA AGREGAR
const cargarFormularioAgregarC = () => {
    agregarAlumnosFormBox.style.display = "none";
    crearCursoContainer.style.display = "block"
    eliminarCursoContainer.style.display = "none";
    btnAgregarA.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
    preguntarContainer.style.display = "none";
    buscarCursoContainer.style.display = "none";
}

// FUNCION QUE ESCONDE EL FORMULARIO PARA AGREGAR Y MUESTRA EL DE ELIMINAR
const cargarFormularioEliminarC = () => {
    crearCursoContainer.style.display = "none";
    eliminarCursoContainer.style.display = "block";
    agregarAlumnosFormBox.style.display = "none";
    preguntarContainer.style.display = "none";
    buscarCursoContainer.style.display = "none";
}

// FUCNCION QUE CREA LOS CURSOS Y LOS GUARDA EN EL ARRAY Y CREA EL <P> CON AÑO, DIVISION Y TURNO
const pushCursos = (añoValor, divisionValor, turnoValor) => {
    localStorage.removeItem("cursos");
    let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
    cursosTotales.push(cursoNew);
    sumarCursoHTML();
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

// ???
const pushCA = (añoValor, divisionValor, turnoValor) => {
    localStorage.removeItem("cursos");
    let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
    sumarAlumnoAlCurso(cursoNew)
    cursosTotales.push(cursoNew);
    sumarCursoHTML();
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

// FUNCION PARA INYECTAR LOS CURSOS AL HTML
const sumarCursoHTML = () => {
    cursosBox.innerHTML = " ";
    cursosTotales.forEach((el) => {
        cursoComp = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
        grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML += cursoComp;
        cursosBox.appendChild(grado);

        botonVerA = document.createElement("button");
        botonVerA.textContent = "Ver alumnos";
    })
}

// FUNCION PARA CREAR CURSOS
/* 
- toma valores de los inputs
- si estan completos, guarda el curso usando constuctor en una variable y resetea los inputs
- despues esconde el formulario de crear, y muestra si quiere agregar alumnos, si o no.
- si toca en "si", lee inputs y si estan completos, crea el alumno, los sube a la variable del curso en el array de alumnos. y sube el curso creado al array.
- si toca en "no", cierra el formulario de alumnos y vuelve al de crear, y sube el curso al array, pero sin alumnos
*/
const creadorCurso = () => {
    let añoValor = año.value;
    let divisionValor = division.value;
    let turnoValor = turno.value;
    let cursoNew;
    if (añoValor != "" && divisionValor != "" && turnoValor != "") {
        crearCursoContainer.style.display = "none";
        cursoNew = new Curso(añoValor, divisionValor, turnoValor);
        año.value = "";
        division.value = "";
        turno.value = "";
    }
    console.log(cursoNew);
    return cursoNew;
}

// FUNCION QUE AGREGA ALUMNOS Y CURSO AL HTML
const agregarAyC = (alumnosObjeto) => {
    console.log(alumnosObjeto);
    if (alumnosObjeto == []) {
        Swal.fire("No agregaste alumnos")
    } else {
        let cursoNew = creadorCurso();
        console.log(cursoNew)
        let {
            alumnos
        } = cursoNew;
        alumnosObjeto.forEach((alumno) => {
            console.log(alumno);
            alumnos.push(alumno)
        })
        console.log(alumnosObjeto);
        console.log(cursoNew.alumnos);
        cursosTotales.push(cursoNew);
        sumarCursoHTML();
        localStorage.setItem("cursos", JSON.stringify(cursosTotales));
        alumnosObjeto = []
    }
}

// FUNCION PARA AGREGAGR ALUMNOS AL ARRAY, PERO NO LO SUBE AL OBJETO CURSO EN EL ARRAY DE CURSOS TOTALES
const agregarA = (nombreAlumnoValue, apellidoAlumnoValue, alumnosObjeto) => {
    if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
        console.log(alumnosObjeto);
        let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
        alumnosObjeto.push(alumno);
        console.log(alumnosObjeto);
    }
    mostrarAlumnos(alumnosObjeto);
    console.log(alumnosObjeto);
    return alumnosObjeto;
}

// FUNCION PARA SUMUMAR LOS ALUMNOS AGREGADOS AL OBJETO CURSO EN LA PROPIEDAD ALUMNOS
const mostrarAlumnos = (alumnosArray) => {
    alumnosAgregados.innerHTML = ""
    alumnosArray.forEach((alumno) => {
        let alumnoInfo = `${alumno.nombre} ${alumno.apellido}`;
        let alumnoParrafo = document.createElement("p")
        alumnoParrafo.innerText = alumnoInfo;
        alumnosAgregados.appendChild(alumnoParrafo);
    })
}

// FUNCION PARA CREAR USUARIO
const fnCrearUsuario = () => {
    let nombreCrearUsuarioValue = nombreCrearUsuario.value;
    let apellidoCrearUsuarioValue = apellidoCrearUsuario.value;
    console.log(nombreCrearUsuarioValue);
    console.log(apellidoCrearUsuarioValue);
    if (nombreCrearUsuarioValue != "" && apellidoCrearUsuarioValue != "") {
        let usuarioNew = new Usuario(nombreCrearUsuarioValue, apellidoCrearUsuarioValue);
        usuarios.push(usuarioNew);
        console.log(usuarioNew);
        console.log(usuarios);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        Swal.fire("Usuario creado");
        onN = usuarioNew.nombre;
        onSurN = usuarioNew.apellido;
    } else {
        Swal.fire("Faltan datos")
    }
}

// --------------------------------

///// ASIGNACION DE EVENTOS A VARIABLES /////

// MOSTRAR FORMULARIO PARA AGREGAR CURSO
btnAgregarCursos.addEventListener("click", cargarFormularioAgregarC);

// MOSTRAR FORMULARIO PARA ELIMINAR CURSOS
btnEliminarCursos.addEventListener("click", cargarFormularioEliminarC);

// BORRAR CURSOS
/*
- remueve los cursos del localStorage
- analiza si los inputs del curso que queremos borrar estan completos. Si no estan vacios, busca el curso con los datos en el array de cursos totales.
- si es -1 (no existe) devuelve alert.
- si lo encuentra, lo recorta. Luego borra el html y lo imprime con el array nuevo
- Luego carga nuevamente el array en el local storage y resetea los inputs 
*/
btnBorrarCurso.onclick = (e) => {
    localStorage.removeItem("cursos");
    e.preventDefault();
    // SI EL VALOR DE LOS INPUTS SON DIFERENTES A VACIO, VA A BUSCAR
    if (añoBorrar.value != "" || divisionBorrar.value != "") {
        let posicionObjeto = cursosTotales.findIndex((el) => el.año == añoBorrar.value && el.division == divisionBorrar.value);
        // SI EL OBJETO BUSCADO DA -1 (NO EXISTE) TIRA ALERT
        if (posicionObjeto == -1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No existe el curso que queres borrar',
            })
        } else {
            // BORRA EL CURSO BUSCADO
            console.log(cursosTotales);
            cursosTotales.splice(posicionObjeto, 1);
            // VOLVEMOS A CARGAR LOS CURSOS QUE QUEDARON
            sumarCursoHTML();
            console.log(cursosTotales);
            localStorage.setItem("cursos", JSON.stringify(cursosTotales));
            añoBorrar.value = "";
            divisionBorrar.value = "";
        }
    } else {
        // SI NO COMPLETA LOS INPUTS
        Swal.fire("Faltan datos");
    }
}

btnAgregar.addEventListener("click", (e) => {
    e.preventDefault();
    let añoValor = año.value;
    let divisionValor = division.value;
    let turnoValor = turno.value;
    // ESCONDE EL FORMULARIO DE CREAR CURSOS Y MUESTRA EL FORMULARIO PARA AGREGAR ALUMNOS
    if (añoValor != "" && divisionValor != "" && turnoValor != "") {
        crearCursoContainer.style.display = "none";
        preguntarContainer.style.display = "block";
    } else {
        Swal.fire("Faltan datos para agregar el curso")
    }
})

// MUESTRA EL FORMULARIO PARA AGREGAR ALUMNOS
si.onclick = (e) => {
    e.preventDefault();
    // MUESTRA EL FORMULARIO PARA AGREGAR ALUMNOS
    agregarAlumnosFormBox.style.display = "block";
    btnAgregarA.style.display = "block";
    preguntarContainer.style.display = "none";
    alumnosAgregadosBox.style.display = "block"

}

// AL NO CARGAR ALUMNOS, SUBE EL CURSO CREADO PERO SIN ALUMNOS
no.onclick = (e) => {
    e.preventDefault();
    let cursoCreado = creadorCurso();
    preguntarContainer.style.display = "none";
    crearCursoContainer.style.display = "block";
    cursosTotales.push(cursoCreado);
    sumarCursoHTML();
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

btnAgregarAlumno.onclick = () => {
    alumnosAgregados.style.display = "block";
    nombreAlumnoValue = nombreAlumno.value;
    apellidoAlumnoValue = apellidoAlumno.value;
    if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
        if (alumnosObjeto == []) {
            agregarA(nombreAlumnoValue, apellidoAlumnoValue, alumnosObjeto);
        } else {
            if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
                let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
                alumnosObjeto.push(alumno);
                mostrarAlumnos(alumnosObjeto);
                apellidoAlumno.value = "";
                nombreAlumno.value = "";
            } else {
                Swal.fire("Faltan datos del alumno")
            }
        }
    } else {
        Swal.fire("Faltan datos del alumno")
    }
}

btnAgregarAyC.onclick = () => {
    agregarAyC(alumnosObjeto);
    agregarAlumnosFormBox.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
}

// DESARROLLO PARA BUSCAR CURSOS

// CONTENEDOR FORMULARIO BUSCAR CURSO
let buscarCursoContainer = document.getElementById("buscarCursoContainer");
// FORMULARIO
// INPUTS
let buscarCursoAño = document.getElementById("buscarCursoAño");
let buscarCursoDivision = document.getElementById("buscarCursoDivision");
// VARIABLE PARA VALUES DE INPUTS
let buscarCursoAñoValue;
let buscarCursoDivisionValue;
// BOTON PARA BUSCAR
let btnBuscarC = document.getElementById("btnBuscarC");
// BOTON PARA VOLVER Y MOSTRAR LOS CURSOS DEL ARRAY cursosTotales nuevamente
let btnVolver = document.getElementById("btnVolver");

btnBuscarC.onclick = (e) => {
    e.preventDefault();
    buscarCursoAñoValue = buscarCursoAño.value;
    buscarCursoDivision = buscarCursoDivision.value;
    let cursoBuscado = cursosTotales.filter((curso) => curso.año == buscarCursoAñoValue && curso.division == buscarCursoDivision);

    cursosBox.innerHTML = "";

    cursoBuscado.forEach((el) => {
        cursoComp = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
        grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML = cursoComp;
        cursosBox.appendChild(grado);
    })

    tituloColumnaR.textContent = "Cursos encontrados";
}

btnVolver.onclick = () => {
    cursosBox.innerHTML = "";
    cursosTotales.forEach((el) => {
        cursoComp = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
        grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML = cursoComp;
        cursosBox.appendChild(grado);
    })

    buscarCursoContainer.style.display = "none";
}

buscarCurso.onclick = (e) => {
    e.preventDefault();
    agregarAlumnosFormBox.style.display = "none";
    crearCursoContainer.style.display = "none"
    eliminarCursoContainer.style.display = "none";
    btnAgregarA.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
    preguntarContainer.style.display = "none";
    buscarCursoContainer.style.display = "block";
}

// tomamos el <p> (titulo) del rightCol
let tituloColumnaR = document.querySelector(".tituloAñadidos");


// mostramos en la parte derecha lo que encontro cambiando el texto de la etiqueta <p> que primeramente dice "cursos añadidos", la cambiamos por "cursos encontrados" e inyectamos un contenedor con <p> que tengan los cursos buscados, usando un forEach de el array de cursos buscados que se busco

// mostrar un boton al lado de cada curso para ver los alumnos que hay