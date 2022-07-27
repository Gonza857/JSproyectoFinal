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

const pushCursos = (añoValor, divisionValor, turnoValor) => {
    // MOSTRAMOS FORMULARIO
    // CONSTRUCTOR
    let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
    // PUSHEAMOS EL CURSO AL ARRAY DE TODOS LOS CURSOS
    cursosTotales.push(cursoNew);
    cursosBox.innerHTML = " ";
    cursosTotales.forEach((el) => {
        let cursoComp = el.infoFull;
        let grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML = cursoComp;
        cursosBox.appendChild(grado);
    })
    // DECLARO ELEMENTOS PARA EL FORMULARIO DE ELIMINACION
    let borrarContainer = document.createElement("div");
    borrarContainer.setAttribute("class", "unCurso row justify-content-around p-0 m-0 my-1 align-content-center")
    // CREO EL DIV Y LO MANDO AL FORM
    deleteForm.appendChild(borrarContainer);
    // CREO EL P QUE VA DENTRO DEL DIV
    let cursoPorEliminar = document.createElement("p");
    cursoPorEliminar.setAttribute("class", "col-6 my-auto");
    borrarContainer.appendChild(cursoPorEliminar);
    // ACTUALIZO EL VALOR PARA EL P DENTRO DEL DIV
    cursosTotales.forEach((el) => {
        let cursoComp = el.info;
        cursoPorEliminar.innerHTML = cursoComp;
    })
    // CREO EL BOTON DE ELIMINAR Y LO ENVIO AL DIV
    borrar = document.createElement("button");
    borrar.textContent = "Borrar";
    borrar.setAttribute("class", "btn btnBorrar bg-danger col-4");
    borrarContainer.appendChild(borrar);
}

const mostrarCreador = () => {
    crearCursoContainer.style.display = "block"
}

let borrar;
const cargarEnEliminar = () => {
    crearCursoContainer.style.display = "none";
    eliminarCursoContainer.style.display = "block";
    borrar.onclick = (e) => {
        e.preventDefault();
    }
}

// --------------------------------

///// ASIGNACION DE NODOS A VARIABLES /////

let agregarCurso = document.getElementById("añadirCurso");
let cursosBox = document.getElementById("cursosBox");
let año = document.getElementById("año");
let division = document.getElementById("division");
let turno = document.getElementById("turno");
let btnAgregar = document.getElementById("btnAgregar");
let btnEliminar = document.getElementById("btnEliminar");
let btnMostrarAgregar = document.getElementById("btnMostrarAgregar");
let btnEliminarCurso = document.getElementById("eliminarCurso");
let deleteForm = document.getElementById("deleteForm");
let formulario = document.getElementById("crearCurso");
let crearCursoContainer = document.getElementById("crearCursoContainer");
crearCursoContainer.style.display = "none";
let eliminarCursoContainer = document.getElementById("eliminarCursoContainer")
eliminarCursoContainer.style.display = "none";

// --------------------------------


///// ASIGNACION DE EVENTOS A VARIABLES /////

// ASIGNO MOTRAR FORMULARIO AL TOCAR EL BOTON DE AGREGAR
agregarCurso.addEventListener("click", mostrarCreador);

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

// ASIGNO FUNCION EN EL EVENTO "CLICK"
btnEliminarCurso.addEventListener("click", cargarEnEliminar);

// --------------------------------



