// VARIABLES CON VALOR
let registrados = [{
        nombre: "facundo",
        apellido: "casal"
    },
    {
        nombre: "yael",
        apellido: "roufe"
    }, {
        nombre: "gonzalo",
        apellido: "ramos"
    }
];
let alumnosObjeto = [];

// VARIABLES SIN DEFINIR
let cursosTotales = [];
let arrayAlumnos;
let nombreAlumnoValue;
let apellidoAlumnoValue;

// --------------------------------

///// ASIGNACION DE NODOS A VARIABLES /////

// -------- NAVBAR --------
// CONTENEDOR DE BOTONES FUNCIONALES
let controlBox = document.getElementById("controlBox");
controlBox.style.display = "none";
// BOTONES
// BOTON MOSTRAR FORMULARIO PARA ELIMINAR CURSO (FUNCIONA CON LOS DEL LOCAL STORAGE)
let btnEliminarCursos = document.getElementById("eliminarCurso");
// BOTON MOSTRAR FORMULARIO PARA AÑADIR CURSO
let btnAgregarCursos = document.getElementById("añadirCurso");
// BOTON CERRAR SESION
let btnCerrarSesion = document.getElementById("cerrarSesion");

// CONTENEDOR DE BOTONES PARA LOGIN
let loginBox = document.getElementById("loginBox");
loginBox.style.display = "none";
// BOTONES 
// BOTON PARA INICIAR SESION
let btnIniciarSesion = document.getElementById("iniciarSesion");
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
//----------------------------------------------------------------------------------------------------



//----------------------------------------------------------------------------------------------------


// -------- CONTENEDOR DE ALUMNOS AGREGADOS --------
let alumnosAgregadosBox = document.getElementById("alumnosAgregadosBox");
alumnosAgregadosBox.style.display = "none";

// DESARROLLO PARA BUSCAR CURSOS

// CONTENEDOR FORMULARIO BUSCAR CURSO
let buscarCursoBox = document.getElementById("buscarCursoBox");
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

// --------------------------------

///// CONSTRUCTORES /////

class Curso {
    constructor(año, division, turno) {
        this.año = año;
        this.division = division;
        this.turno = turno;
        this.alumnos = [];
        this.cantidad_alumnos = this.alumnos.length;
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

// CARGA LOS CURSOS SI LOS HAY
const cargarCursosLocal = (cursosTotales) => {
    console.log(cursosTotales);
    cursosTotales = JSON.parse(localStorage.getItem("cursos"));
    console.log(cursosTotales);
    cursosTotales.forEach((el) => {
        sumarHTML(el);
    })
}

// DE FORMA ASINCRONICA, TRAEMOS LOS CURSOS
const cargarCursosFetch = async () => {
    // intenta esto
    try {
        let response = await fetch("./cursos.json");
        let result = await response.json();
        result.forEach((el) => {
            sumarHTML(el);
        })
    }
    // si hay error hace esto (catch)
    catch (error) {
        console.log(error);
    }
}

/* FUNCION PARA CREAR CURSOS (NO SUMA AL ARRAY NI HTML)
1) TOMA VALORES DE INPUTS
2) CREA EL CURSO CON ESOS VALORES
3) SE USA PARA GUARDAR LA FUNCION EN UNA VARIABLE PORQUE RETORNA EL CURSO CREADO
*/
const preCargaCurso = () => {
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
    return cursoNew;
}

// FUNCION PARA ACTUALIZAR EL LOCAL STORAGE ANTE CAMBIOS
const actualizarLocal = () => {
    localStorage.removeItem("cursos");
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

// CONTENEDOR FORM
let textoEditado = document.getElementById("textoEditado")
let editarCursoForm = document.getElementById("editarCursoForm");
editarCursoForm.style.display = "none"
// FORM
let editarCurso = document.getElementById("editarCurso");
// INPUTS
let editarCursoAño = document.getElementById("editarCursoAño");
let editarCursoDivision = document.getElementById("editarCursoDivision");
let editarCursoTurno = document.getElementById("editarCursoTurno");
// BOTONES
let btnEditarCursoGuardar = document.getElementById("btnEditarCursoGuardar");
let btnEditarCursoCancelar = document.getElementById("btnEditarCursoCancelar");

/* SUMAR CURSOS AL HTML
1) CREA ETIQUETAS Y ASIGNA ATRIBUTOS
2) COMPARA SI EL CURSO DEL ARRAY TIENE ALUMNOS, SI NO TIENE MUESTRA "NO HAY". SI TIENE MUESTRA LA CANTIDAD Y EL BOTON PARA VERLOS
3) USA LA INFORMACION DEL CURSO PARA INYECTARLA AL HTML
*/
const sumarHTML = (el) => {
    console.log(el)
    // DIV CURSO - INFO Y LISTA
    let cursoCreado = document.createElement("div");
    cursoCreado.setAttribute("class", "my-1");
    // CONTAINER INFO ALUM
    let divInfoBtn = document.createElement("div");
    divInfoBtn.setAttribute("class", "d-flex");
    // PARRAFO INFO CURSO
    let cursoInfo = document.createElement("p");
    cursoInfo.setAttribute("class", "cajaCurso p-0 m-0 my-1 p-2");
    cursoInfo.textContent = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
    // BOTON VER ALUMNOS
    // BOTON EDITAR CURSO
    let btnEditar = document.createElement("button");
    btnEditar.setAttribute("class", "btn-ver")
    // ICONO EDITAR CURSO
    let iconoEditar = document.createElement("i");
    iconoEditar.setAttribute("class", "fas fa-edit");
    btnEditar.appendChild(iconoEditar);
    // CONTAINER LISTA ALUM
    let divAlumList = document.createElement("div");
    // LISTA ALUMNOS DEL CURSO
    let listaAlumnos = document.createElement("ul");
    // VARIABLES SIN DEFINIR
    let iconoCerrar;
    let btnVer;
    let btnCerrar;
    let btnEliminarA;

    divInfoBtn.appendChild(cursoInfo)
    divInfoBtn.appendChild(btnEditar);
    cursoCreado.appendChild(divInfoBtn);

    if (el.alumnos.length !== 0) {
        // tomamos la propiedad alumnos del objeto curso
        let {
            alumnos
        } = el;
        // asignamos la info del curso
        // por cada alumno lo sumammos a la lista y agregamos su boton
        alumnos.forEach((alum) => {
            // creas li, atributos, contenido
            let alumno = document.createElement("li");
            alumno.setAttribute("class", "alums my-1");
            alumno.textContent = `${alum.nombre} ${alum.apellido}`;
            // agregas alumno (li) a la lista (ul)
            listaAlumnos.appendChild(alumno)
            // creo button, atributo y contenido
            iconoCerrar = document.createElement("i")
            iconoCerrar.setAttribute("class", "fas fa-times");
            btnEliminarA = document.createElement("button");
            btnEliminarA.classList.add("btn-x")
            btnEliminarA.appendChild(iconoCerrar);
            alumno.appendChild(btnEliminarA)
            // funcion boton eliminar
            btnEliminarA.onclick = (e) => {
                e.preventDefault();
                listaAlumnos.removeChild(alumno);
                let borrarA = alumnos.findIndex(alumno => alumno.nombre == alum.nombre);
                alumnos.splice(borrarA, 1);
                el.alumnos = alumnos;
                cursoInfo.textContent = `${el.infoFull} - Alumnos: ${alumnos.length}`;
                btnCerrar.style.display = "none";
                btnVer.style.display = "block"
                // listaAlumnos.style.display = "none";
                actualizarLocal();
                if (el.alumnos.length == 0) {
                    cursoInfo.textContent = `${el.infoFull} - Alumnos: No hay`;
                    btnVer.style.display = "none"
                }
            }
        })
        divAlumList.appendChild(listaAlumnos);
        cursoCreado.appendChild(divAlumList);
        listaAlumnos.style.display = "none";
        // BOTON VER
        let iconoOjo = document.createElement("i")
        iconoOjo.setAttribute("class", "fas fa-eye p-0 m-0");
        btnVer = document.createElement("button");
        btnVer.setAttribute("class", "btn-ver ms-2");
        btnVer.appendChild(iconoOjo);
        divInfoBtn.appendChild(btnVer);
        btnVer.onclick = (e) => {
            e.preventDefault();
            btnVer.style.display = "none";
            btnCerrar.style.display = "block";
            listaAlumnos.style.display = "block";
        }
        // BOTON CERRAR
        iconoCerrar = document.createElement("i")
        iconoCerrar.setAttribute("class", "fas fa-times");
        btnCerrar = document.createElement("button");
        btnCerrar.setAttribute("class", "btn-ver")
        btnCerrar.appendChild(iconoCerrar);
        divInfoBtn.appendChild(btnCerrar);
        btnCerrar.style.display = "none";
        btnCerrar.onclick = (e) => {
            e.preventDefault();
            btnCerrar.style.display = "none";
            btnVer.style.display = "block"
            listaAlumnos.style.display = "none";
            actualizarLocal();
        }
    } else {
        cursoInfo.textContent = `${el.infoFull} - Alumnos: No hay`;
    }
    cursosBox.appendChild(cursoCreado);
    btnEditar.onclick = (e) => {
        e.preventDefault();
        editarCursoForm.style.display = "block";
        textoEditado.textContent = el.infoFull;
        console.log(el.infoFull)
        btnEditarCursoGuardar.onclick = (e) => {
            e.preventDefault()
            let editarCursoAñoValue = editarCursoAño.value;
            let editarCursoDivisionValue = editarCursoDivision.value;
            let editarCursoTurnoValue = editarCursoTurno.value;
            el.año = editarCursoAñoValue;
            el.division = editarCursoDivisionValue;
            el.turno = editarCursoTurnoValue;
            el.infoFull = `Año: ${el.año}° - Division: ${el.division}° - Turno: ${el.turno}`;
            cursoInfo.textContent = `${el.infoFull} - Alumnos: ${el.alumnos.length}`;
            actualizarLocal();
            editarCursoAño.value = "";
            editarCursoDivision.value = "";
            editarCursoTurno.value = "";
            Swal.fire("Editaste el curso correctamente")
        }
    }
    btnEditarCursoCancelar.onclick = (e) => {
        e.preventDefault()
        editarCursoForm.style.display = "none";
        textoEditado.style.display = "none";
        editarCursoAño.value = "";
        editarCursoDivision.value = "";
        editarCursoTurno.value = "";
    }
}

// FUNCION QUE MUESTRA EL FORMULARIO PARA AGREGAR
const cargarFormularioAgregarC = () => {
    agregarAlumnosFormBox.style.display = "none";
    crearCursoContainer.style.display = "block"
    eliminarCursoContainer.style.display = "none";
    btnAgregarA.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
    preguntarContainer.style.display = "none";
    buscarCursoBox.classList.add("esconder");
}

// FUNCION QUE ESCONDE EL FORMULARIO PARA AGREGAR Y MUESTRA EL DE ELIMINAR
const cargarFormularioEliminarC = () => {
    crearCursoContainer.style.display = "none";
    eliminarCursoContainer.style.display = "block";
    agregarAlumnosFormBox.style.display = "none";
    preguntarContainer.style.display = "none";
    buscarCursoBox.classList.add("esconder");
}

// FUNCION QUE AGREGA ALUMNOS Y CURSO AL HTML
const agregarAyC = (alumnosObjeto) => {
    if (alumnosObjeto == []) {
        Swal.fire("No agregaste alumnos")
    } else {
        let cursoNew = preCargaCurso();
        let {
            alumnos
        } = cursoNew;
        alumnosObjeto.forEach((alumno) => {
            alumnos.push(alumno)
        })
        cursosTotales.push(cursoNew);
        localStorage.removeItem("cursos");
        cursosTotales.forEach((curso) => {
            sumarHTML(curso);
        })
        localStorage.setItem("cursos", JSON.stringify(cursosTotales));
        alumnosObjeto = []
    }
}

// FUNCION PARA AGREGAGR ALUMNOS AL ARRAY, PERO NO LO SUBE AL OBJETO CURSO EN EL ARRAY DE CURSOS TOTALES
const agregarA = (nombreAlumnoValue, apellidoAlumnoValue, alumnosObjeto) => {
    if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
        let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
        alumnosObjeto.push(alumno);
    }
    mostrarAlumnos(alumnosObjeto);
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

/* FUNCION PARA VERIFICAR LOGIN
1) TOMA VALORES DE INPUTS COMO PARAMETROS
2) BUSCA SI LOS VALORES INGRESADOS COINCIDEN CON LOS USUARIOS ESTABLECIDOS
3) SI LO ENCUENTRA, MUESTRA TODO EL DISPLAY DE LA APP
4) CARGA LOS CURSOS (FETCH)
5) CARGA LOS CURSOS (LOCALSTORAGE)
6) MUESTRA LOS CURSOS EN EL HTML
7) CAMBIA EL VALOR DE QUE HAY UN USUARIO EN SESION, Y LO GUARDA EN EL LOCAL. AL CERRAR SESION ESE VALOR CAMBIA Y SI ES FALSE, PIDE INICIAR SESION, SI NO CERRO SESION, ES TRUE Y MUESTRA DIRECTAMENTE EL DISPLAY. TODO ESTO PARA NO INICIAR SESION CADA VEZ QUE SE CARGA LA PAGINA
8) MUESTRA ALERTA CON SALUDO
9) SI LOS DATOS SON INCORRECTOS, DEVUELVE ALERTA
*/
const verificarRegistrado = (nombreUsuarioValue, apellidoUsuarioValue) => {
    let buscar = registrados.some(usuario => usuario.nombre == nombreUsuarioValue && usuario.apellido == apellidoUsuarioValue);
    if (buscar) {
        controlBox.style.display = "flex";
        btnIniciarSesion.style.display = "none"
        btnCerrarSesion.style.display = "block";
        iniciarSesionBox.style.display = "none";
        contenidoLeftCol.style.display = "block";
        cargarCursosFetch();
        cursosTotales = JSON.parse(localStorage.getItem("cursos")) || [];
        cursosTotales.forEach((curso) => {
            sumarHTML(curso);
        })
        inicio = true;
        localStorage.setItem("inicio", inicio)
        let nombreMayus = nombreUsuarioValue[0].toUpperCase() + nombreUsuarioValue.substring(1);
        let apellidoMayus = apellidoUsuarioValue[0].toUpperCase() + apellidoUsuarioValue.substring(1);
        Swal.fire(`¡Bienvenido ${nombreMayus} ${apellidoMayus}!`)
    } else {
        Swal.fire("Los datos ingresados son incorrectos")
    }
}

// AL TOCAR EL BOTON DE CERRAR SESION, REMUEVE EL ITEM DE SESION INICIADA, ASI LA PROXIMA VEZ  Y RECARGA PAGINA
const borrarSesion = () => {
    localStorage.removeItem("inicio");
    window.location.reload();
}

// --------------------------------

///// ASIGNACION DE EVENTOS A VARIABLES /////

// MOSTRAR FORMULARIO PARA AGREGAR CURSO
btnAgregarCursos.addEventListener("click", cargarFormularioAgregarC);

// MOSTRAR FORMULARIO PARA ELIMINAR CURSOS
btnEliminarCursos.addEventListener("click", cargarFormularioEliminarC);

/* BORRAR CURSOS
1) REMUEVE EL CURSO INSERTADO DEL LOCAL STORAGE
2) VALIDA SI LOS INPUTS ESTAN COMPLETOS, SI NO, TIRA ALERTA
3) SI NO ENCUENTRA, DEVUELVE ALERT. SI ENCUENTRA, LO RECORTA E IMPRIME NUEVAMENTE EL ARRAY DE CURSOS Y TRAE EL FETCH
IMPORTANTE ACLARACION AL PROFESOR/TUTOR: NO ELIMINA LOS CURSOS QUE TRAE EL FETCH, SOLO ELIMINA LOS QUE CREAMOS NOSOTROS USANDO LA APP.
*/
btnBorrarCurso.onclick = (e) => {
    localStorage.removeItem("cursos");
    e.preventDefault();
    if (añoBorrar.value != "" || divisionBorrar.value != "") {
        let posicionObjeto = cursosTotales.findIndex((el) => el.año == añoBorrar.value && el.division == divisionBorrar.value);
        if (posicionObjeto == -1) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No existe el curso que queres borrar',
            })
        } else {
            cursosTotales.splice(posicionObjeto, 1);
            cursosBox.innerHTML = "";
            cargarCursosFetch();
            localStorage.removeItem("cursos");
            cursosTotales.forEach((curso) => {
                sumarHTML(curso);
            })
            localStorage.setItem("cursos", JSON.stringify(cursosTotales));
            añoBorrar.value = "";
            divisionBorrar.value = "";
            Swal.fire({
                icon: "success",
                text: "¡Se borro correctamente el curso!"
            })
        }
    } else {
        // SI NO COMPLETA LOS INPUTS
        Swal.fire("Faltan datos");
    }
}

/* AGREGAR CURSOS
1) TOMA EL VALOR DE LOS INPUTS
2) SI NO ESTAN VACIOS, MUESTRA PARA ELEGIR SI AGREGAR ALUMNOS
3) SI ESTA VACIO, TIRA ALERT
*/
btnAgregar.onclick = (e) => {
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
}

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
    let cursoCreado = preCargaCurso(); // OK
    preguntarContainer.style.display = "none";
    crearCursoContainer.style.display = "block";
    // suma el curso creado pero sin alumnos al array de cursos totales
    cursosTotales.push(cursoCreado);
    // suma el curso al contenedor cursosBox
    cursosTotales.forEach((curso) => {
        sumarHTML(curso);
    })
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

/* BOTON PARA AÑADIR ALUMNO
1) TOMA LOS VALORES DE LOS INPUTS
2) SI TIENEN DATOS, Y CREA UN ALUMNO CON UNA CLASE Y LO SUMA AL ARRAY DE ALUMNOS ADEMAS DE MOSTRAR EN EL HTML CUANTOS ALUMNOS MOSTRAMOS
3) SI NO TIENEN DATOS, TIRO ERROR
*/
btnAgregarAlumno.onclick = (e) => {
    e.preventDefault();
    alumnosAgregados.style.display = "block";
    nombreAlumnoValue = nombreAlumno.value;
    apellidoAlumnoValue = apellidoAlumno.value;
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

// AGREGA EL ARRAY DE ALUMNOS A LA PROPIEDAD DE ALUMNOS, DEL CURSO POR CREAR
btnAgregarAyC.onclick = () => {
    agregarAyC(alumnosObjeto);
    cursosBox.innerHTML = "";
    cargarCursosFetch();
    cursosTotales.forEach((curso) => {
        sumarHTML(curso);
    })
    agregarAlumnosFormBox.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
}

/* BUSCA CURSOS
1) TOMA LOS VALORES DE INPUTS
2) BUSCA SI EXISTE Y LO MUESTRA EN EL HTML
 */
btnBuscarC.onclick = (e) => {
    e.preventDefault();
    buscarCursoAñoValue = buscarCursoAño.value;
    buscarCursoDivision = buscarCursoDivision.value;
    let cursoBuscado = cursosTotales.filter((curso) => curso.año == buscarCursoAñoValue && curso.division == buscarCursoDivision);
    cursosBox.innerHTML = "";
    cursoBuscado.forEach((curso) => sumarHTML(curso));
    tituloColumnaR.textContent = "Cursos encontrados";
}

btnVolver.onclick = () => {
    cursosBox.innerHTML = "";
    cursosTotales.forEach((curso) => sumarHTML(curso))
    buscarCursoBox.classList.add("esconder");
}

buscarCurso.onclick = (e) => {
    e.preventDefault();
    agregarAlumnosFormBox.style.display = "none";
    crearCursoContainer.style.display = "none"
    eliminarCursoContainer.style.display = "none";
    btnAgregarA.style.display = "none";
    alumnosAgregadosBox.style.display = "none";
    preguntarContainer.style.display = "none";
    buscarCursoBox.classList.add("mostrar");

}

// tomamos el <p> (titulo) del rightCol
let tituloColumnaR = document.querySelector(".tituloAñadidos");


// mostramos en la parte derecha lo que encontro cambiando el texto de la etiqueta <p> que primeramente dice "cursos añadidos", la cambiamos por "cursos encontrados" e inyectamos un contenedor con <p> que tengan los cursos buscados, usando un forEach de el array de cursos buscados que se busco

// mostrar un boton al lado de cada curso para ver los alumnos que hay

let inicio = localStorage.getItem("inicio") || false;
console.log(inicio);

if (inicio) {
    console.log("Hay un usuario")
    loginBox.style.display = "flex";
    btnCerrarSesion.style.display = "block"
    btnIniciarSesion.style.display = "none";
    controlBox.style.display = "flex";
    cargarCursosFetch();
    cursosTotales = JSON.parse(localStorage.getItem("cursos")) || [];
    cursosTotales.forEach((curso) => {
        sumarHTML(curso);
    })
} else {
    console.log("No entro nadie antes")
    buscarCursoBox.classList.add("esconder");
    loginBox.style.display = "flex";
    btnIniciarSesion.style.display = "block";
    btnCerrarSesion.style.display = "none";
}

btnIniciarSesionForm.onclick = (e) => {
    e.preventDefault()
    let nombreUsuarioValue = nombreUsuario.value.toLowerCase();
    let apellidoUsuarioValue = apellidoUsuario.value.toLowerCase();
    verificarRegistrado(nombreUsuarioValue, apellidoUsuarioValue);
    nombreUsuario.value = "";
    apellidoUsuario.value = "";
}

btnIniciarSesion.onclick = (e) => {
    e.preventDefault();
    iniciarSesionBox.style.display = "block";
}

btnCerrarSesion.onclick = (e) => {
    e.preventDefault();
    borrarSesion();
}

// preguntarContainer.style.display = "block";


// FORMULARIO PARA BUSCAR ALUMNOS / MUESTRA CURSOS QUE CONTENGAN ESE NOOMBRE Y/O APELLIDO
// BOTON DE BARRA
let btnBuscarAlumno = document.getElementById("buscarAlumno");
btnBuscarAlumno.onclick = (e) => {
    e.preventDefault();
    buscarAlumnoBox.classList.add("mostrar");
    buscarCursoBox.classList.add("esconder");

}
// CONTENEDOR 
let buscarAlumnoBox = document.getElementById("buscarAlumnoBox");
buscarAlumnoBox.classList.add("esconder");
// PARRAFO 
// DIV CONTENEDOR DE FORM
// FORM
// INPUTS
let buscarAlumnoNombre = document.getElementById("buscarAlumnoNombre");
let buscarAlumnoApellido = document.getElementById("buscarAlumnoApellido");
// BOTONES
let btnBuscarA = document.getElementById("btnBuscarA");
btnBuscarA.onclick = (e) => {
    tituloColumnaR.textContent = "Nombre o apellido encontrado en estos cursos";
    e.preventDefault();
    let buscarAlumnoNombreValue = buscarAlumnoNombre.value;
    let buscarAlumnoApellidoValue = buscarAlumnoApellido.value;
    let resultado = [];
    cursosTotales.forEach((curso) => {
        let {
            alumnos
        } = curso;
        let buscaAlumuno = alumnos.filter((alumno) => alumno.nombre == buscarAlumnoNombreValue || alumno.apellido == buscarAlumnoApellidoValue);
        console.log(buscaAlumuno);
        console.log(buscaAlumuno.length);
        if (buscaAlumuno.length > 0) {
            console.log("encontre algo");
            resultado.push(curso);
            console.log("SUME UN CURSO AL ARRAY RESULTADO")
        }
        console.log(resultado);
        cursosBox.innerHTML = "";
        resultado.forEach((cursoEncontrado) => {
            sumarHTML(cursoEncontrado);
        })

    })



}