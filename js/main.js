// ARRAY CONTENEDOR DE CURSOS
let cursosTotales = []

///// CONSTRUCTORES /////

class Curso {
    constructor(año, division, turno) {
        this.año = año;
        this.division = division;
        this.turno = turno;
        this.alumnos = [];
        this.info = `Año: ${this.año}° - Division: ${this.division}`;
        this.infoFull = `Año: ${this.año}° - Division: ${this.division}° - Turno: ${this.turno}`;
    }
}

class Alumno {
    constructor(nombre, apellido, cursoAlumno) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.curso = cursoAlumno;
    }
}

// FUNCION DE AGREGAR ALUMNOS A CURSOS (PROXIMAMENTE A USAR)
// const crearAlumnos = () => {
//     let nombre = prompt("Nombre del alumno");
//     let apellido = prompt("Apellido del alumno");
//     let añoAlumno = parseInt(prompt("¿Que año es?"))
//     let divisionAlumno = parseInt(prompt("¿Que divison es?"))
//     let cursoAlumno = `${añoAlumno}/${divisionAlumno}`;
//     let alumnoNew = new Alumno(nombre, apellido, cursoAlumno);
//     return alumnoNew;
// }

// FUNCION PARA VER LOS CURSOS QUE HAY (PROXIMAMENTE A USAR)
// const verCursosTotales = () => {
//     cursosTotales.forEach(curso => console.log(curso))
// }

// FUNCION PARA SABER CUANTOS CURSOS HAY, Y CUALES SON (PROXIMAMENTE A USAR)
// const saberCursos = () => {
//     let cantidadCursos = cursosTotales.length;
//     let cantidad = `Cantidad de cursos:${cantidadCursos}.`;
//     alert(cantidad);
//     cursosTotales.forEach(curso => {
//         alert(`${curso.año}/${curso.division}`);
//     })
// }

// FUNCION PARA BUSCAR UN CURSO, POR AÑO, DIVISION Y TURNO. (PROXIMAMENTE A USAR)
// const buscaCurso = () => {
//     let pregAño = parseInt(prompt("Año"));
//     let pregDiv = parseInt(prompt("Division"));
//     let pregTurn = prompt("turno");
//     let resBus = cursosTotales.filter(curso => curso.año == pregAño && curso.division == pregDiv && curso.turno == pregTurn)
//     return resBus;
// }

// FUCNCION QUE CREA LOS CURSOS Y LOS GUARDA EN EL ARRAY Y CREA EL P EN EL HTML CON AÑO, DIVISION Y TURNO
const pushCursos = (añoValor, divisionValor, turnoValor) => {
<<<<<<< HEAD
    localStorage.removeItem("cursos");
=======
    // localStorage.removeItem("cursos");
>>>>>>> 92a034d44e66dcc1bb279dcae1b855c641451722
    // CONSTRUYE CURSO
    let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
    // PUSHEAMOS EL CURSO AL ARRAY DE TODOS LOS CURSOS
    cursosTotales.push(cursoNew);
    cursosBox.innerHTML = " ";
    cursosTotales.forEach((el) => {
        cursoComp = el.infoFull;
        grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML = cursoComp;
        cursosBox.appendChild(grado);
    })
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

// FUNCION QUE MUESTRA EL FORMULARIO PARA AGREGAR
const cargarPushForm = () => {
    crearCursoContainer.style.transition = "all 1s ease";
    crearCursoContainer.style.display = "block"
    eliminarCursoContainer.style.display = "none";
}

// FUNCION QUE ESCONDE EL FORMULARIO PARA AGREGAR Y MUESTRA EL DE ELIMINAR
const cargarDeleteForm = () => {
    crearCursoContainer.style.display = "none";
    eliminarCursoContainer.style.display = "block";
}

// FUNCION PARA CARGAR DATOS DEL LOCALSTORAGE
const cargarDatos = () => {
<<<<<<< HEAD
    cursosTotales = JSON.parse(localStorage.getItem("cursos"));
=======
    cursosTotales = JSON.parse(localStorage.getItem("cursos"))
>>>>>>> 92a034d44e66dcc1bb279dcae1b855c641451722
    cursosTotales.forEach((el) => {
        cursoComp = el.infoFull;
        grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML = cursoComp;
        cursosBox.appendChild(grado);
    })
}

// --------------------------------

///// ASIGNACION DE NODOS A VARIABLES /////

// BOTONES DE NAVBAR
let btnEliminarCursos = document.getElementById("eliminarCurso");
let btnAgregarCursos = document.getElementById("añadirCurso");

// DIV CONTAINER DE CURSOS AÑADIDOS Y DIV DE CURSOS
let cursosBox = document.getElementById("cursosBox");
// CONTAINER DE CURSOS AGREGADOS
let existentes = document.getElementById("cursosBox");

// FORMULARIO PARA AGREGAR
// INPUTS
let año = document.getElementById("año");
let division = document.getElementById("division");
let turno = document.getElementById("turno");
// BOTON
let btnAgregar = document.getElementById("btnAgregar");
// CONTENEDOR DEL FORMLARIO
let crearCursoContainer = document.getElementById("crearCursoContainer");
// FORMULARIO
let formulario = document.getElementById("crearCurso");
crearCursoContainer.style.display = "none";

// CONTENEDOR DE FORMULARIO PARA ELIMINAR
let eliminarCursoContainer = document.getElementById("eliminarCursoContainer")
eliminarCursoContainer.style.display = "none";
// FORMULARIO PARA ELIMINAR
let deleteForm = document.getElementById("deleteForm");
// INPUTS
let añoBorrar = document.getElementById("añoBorrar");
let divisionBorrar = document.getElementById("divisionBorrar");
// BOTON
let btnBorrarCurso = document.getElementById("btnBorrarCurso");

// AL CARGAR, CARGA LOS CURSOS DEL LOCALSTORAGE
window.addEventListener("load", cargarDatos);


// --------------------------------


///// ASIGNACION DE EVENTOS A VARIABLES /////

// ASIGNO MOTRAR FORMULARIO AL TOCAR EL BOTON DE AGREGAR
btnAgregarCursos.addEventListener("click", cargarPushForm);

// ASIGNO FUNCION EN EL EVENTO "CLICK"
btnEliminarCursos.addEventListener("click", cargarDeleteForm);

btnBorrarCurso.onclick = (e) => {
    localStorage.removeItem("cursos");
    e.preventDefault();
    // SI EL VALOR DE LOS INPUTS SON DIFERENTES A VACIO, VA A BUSCAR
    if (añoBorrar.value != "" || divisionBorrar.value != "") {
        let posicionObjeto = cursosTotales.findIndex((el) => el.año == añoBorrar.value && el.division == divisionBorrar.value);
        // SI EL OBJETO BUSCADO DA -1 (NO EXISTE) TIRA ALERT
        if (posicionObjeto == -1) {
            alert("No existe el curso que queres borrar");
        } else {
            // BORRA EL CURSO BUSCADO
            console.log(cursosTotales);
            cursosTotales.splice(posicionObjeto, 1);
            console.log(cursosTotales);
            cursosBox.innerHTML = " ";
            cursosTotales.forEach((el) => {
                cursoComp = el.infoFull;
                grado = document.createElement("p");
                grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
                grado.innerHTML = cursoComp;
                cursosBox.appendChild(grado);
            })
            localStorage.setItem("cursos", JSON.stringify(cursosTotales));
            añoBorrar.value = "";
            divisionBorrar.value = "";
        }
    } else {
        // SI NO COMPLETA LOS INPUTS
        alert("Faltan datos")
    }
}

// ASIGNO DATOS Y FLUJO AL ACCIONAR EL BOTON PARA PUSHEAR CURSOS, JUNTO CON VALIDACION SI ALGUN DATO ESTA VACIO
btnAgregar.onclick = (e) => {
    eliminarCursoContainer.style.display = "none";
    e.preventDefault();
    let añoValor = año.value;
    let divisionValor = division.value;
    let turnoValor = turno.value
    if (añoValor != "" && divisionValor != "" && turnoValor != "") {
        crearCursoContainer.style.display = "none";
        pushCursos(añoValor, divisionValor, turnoValor);
        año.value = "";
        division.value = "";
        turno.value = "";
    } else {
        alert(`Faltan datos`)
    }
}

// --------------------------------

///// CONFIGURACION DE LOCAL STORAGE /////

// localStorage.setItem("key", variable, "string", number, boolean)
// localStorage.setItem("key", JSON.stringify(variable))

// localStorage.setItem("cursos", JSON.stringify(cursosTotales));

<<<<<<< HEAD
// --------------------------------
=======
// --------------------------------
>>>>>>> 92a034d44e66dcc1bb279dcae1b855c641451722
