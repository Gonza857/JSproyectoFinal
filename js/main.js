// ARRAY CONTENEDOR DE CURSOS
let cursosTotales = JSON.parse(localStorage.getItem("cursos")) || [];

// --------------------------------

// VARIABLES VACIAS
let nombreAlumnoValue;
let apellidoAlumnoValue;
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

// --------------------------------
cursosTotales.forEach((el) => {
    cursoComp = el.infoFull;
    grado = document.createElement("p");
    grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
    grado.innerHTML = cursoComp;
    cursosBox.appendChild(grado);
})
// --------------------------------

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
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        //     this.curso = cursoAlumno;
    }
}

// --------------------------------


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




// // FUCNCION QUE CREA LOS CURSOS Y LOS GUARDA EN EL ARRAY Y CREA EL P EN EL HTML CON AÑO, DIVISION Y TURNO
// const pushCursos = (añoValor, divisionValor, turnoValor) => {
//     // LIMPIAMOS EL LOCAL STORAGE
//     localStorage.removeItem("cursos");
//     // CONSTRUYE CURSO
//     let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
//     // PUSHEAMOS EL CURSO AL ARRAY DE TODOS LOS CURSOS
//     cursosTotales.push(cursoNew);
//     sumarCursoHTML();

//     //  FUNCION EN DESARROLLO
//     // nombreAlumnoValue = nombreAlumno.value;
//     // apellidoAlumnoValue = apellidoAlumno.value;
//     // let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
//     // if (nombreAlumnoValue != "" && apellidoAlumnoValue != "") {
//     //     el.alumnos.push(alumno)
//     //     console.log("cargue el alumno")
//     // } else {
//     // console.log("no cargue el alumno")
//     // }

//     localStorage.setItem("cursos", JSON.stringify(cursosTotales));
// }

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


// --------------------------------







// --------------------------------

///// CONFIGURACION DE LOCAL STORAGE /////

// localStorage.setItem("key", variable, "string", number, boolean)
// localStorage.setItem("key", JSON.stringify(variable))

// localStorage.setItem("cursos", JSON.stringify(cursosTotales));

// --------------------------------


// EN DESARROLLO
// FORMULARIO PARA AGREGAR ALUMNOS
// DIV CONTENEDOR
let agregarAlumnosBox = document.getElementById("agregarAlumnosBox");
// BOTON
let agregarAlumnosBtn = document.getElementById("agregarAlumnosBtn");
//FORM CONTENEDOR DE INPUTS
let agregarAlumnosFormBox = document.getElementById("agregarAlumnosFormBox");
agregarAlumnosFormBox.style.display = "none";
// INPUTS
// CONTENEDOR DE INPUTS
let agregarAlumnosInputs = document.getElementById("agregarAlumnosInputs");
agregarAlumnosInputs.style.display = "none";
let nombreAlumno = document.getElementById("nombreAlumno");
let apellidoAlumno = document.getElementById("apellidoAlumno");
let cantidadAlumnos = document.getElementById("cantidadAlumnos")
// BOTON DE AGREGAR AMBAS COSAS
let btnAgregarA = document.getElementById("btnAgregarA");
btnAgregarA.style.display = "none"
let todo = document.getElementById("todo");
todo.style.display = "none";

// FUCNCION QUE CREA LOS CURSOS Y LOS GUARDA EN EL ARRAY Y CREA EL P EN EL HTML CON AÑO, DIVISION Y TURNO
const pushCursos = (añoValor, divisionValor, turnoValor) => {
    localStorage.removeItem("cursos");
    let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
    cursosTotales.push(cursoNew);
    sumarCursoHTML();
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

const pushCA = (añoValor, divisionValor, turnoValor) => {
    localStorage.removeItem("cursos");
    let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
    sumarAlumnoAlCurso(cursoNew)
    cursosTotales.push(cursoNew);
    sumarCursoHTML();
    localStorage.setItem("cursos", JSON.stringify(cursosTotales));
}

const sumarCursoHTML = () => {
    cursosBox.innerHTML = " ";
    cursosTotales.forEach((el) => {
        cursoComp = el.infoFull;
        grado = document.createElement("p");
        grado.setAttribute("class", "cajaCurso p-0 m-0 mt-1 p-2");
        grado.innerHTML = cursoComp;
        cursosBox.appendChild(grado);
    })
}

// 
let preguntarContainer = document.getElementById("preguntarContainer");
preguntarContainer.style.display = "none";
let preguntaAñador = document.getElementById("preguntarAñadir");
let si = document.getElementById("si");
let no = document.getElementById("no");

///// ASIGNACION DE EVENTOS A VARIABLES /////

// ASIGNO MOTRAR FORMULARIO AL TOCAR EL BOTON DE AGREGAR
btnAgregarCursos.addEventListener("click", cargarPushForm);

// ASIGNO FUNCION EN EL EVENTO "CLICK"
btnEliminarCursos.addEventListener("click", cargarDeleteForm);

/* AL TOCAR BOTON:
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
            alert("No existe el curso que queres borrar");
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
        alert("Faltan datos")
    }
}

/* 
AL TOCAR EL BOTON:
- toma valores de los inputs
- si estan completos, guarda el curso usando constuctor en una variable y resetea los inputs
- despues esconde el formulario de crear, y muestra si quiere agregar alumnos, si o no.
- si toca en "si", lee inputs y si estan completos, crea el alumno, los sube a la variable del curso en el array de alumnos. y sube el curso creado al array.
- si toca en "no", cierra el formulario de alumnos y vuelve al de crear, y sube el curso al array, pero sin alumnos
*/

agregarAlumnosBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let añoValor = año.value;
    let divisionValor = division.value;
    let turnoValor = turno.value
    if (añoValor != "" && divisionValor != "" && turnoValor != "") {
        crearCursoContainer.style.display = "none";
        let cursoNew = new Curso(añoValor, divisionValor, turnoValor);
        año.value = "";
        division.value = "";
        turno.value = "";
        // sasa
        crearCursoContainer.style.display = "none";
        preguntarContainer.style.display = "block";
        si.onclick = (e, cursoNew) => {
            // boton si (muestra otro from)
            e.preventDefault();
            agregarAlumnosFormBox.style.display = "block";
            btnAgregarA.style.display = "block";
            // form
            btnAgregarAlumno.onclick = () => {
                let nombreAlumnoValue = nombreAlumno.value;
                let apellidoAlumnoValue = apellidoAlumno.value;
                if (nombreAlumnoValue != "" && apellidoAlumno != "") {
                    let alumno = new Alumno(nombreAlumnoValue, apellidoAlumnoValue);
                    cursoNew.alumno.push(alumno)
                    cursosTotales.push(cursoNew);
                } else {
                    alert(`Faltan datos`)
                }
            }
        }
        no.onclick = (e) => {
            e.preventDefault();
            preguntarContainer.style.display = "none";
            crearCursoContainer.style.display = "block";
            cursosTotales.push(cursoNew);

        }
    } else {
        alert(`Faltan datos`)
    }
})