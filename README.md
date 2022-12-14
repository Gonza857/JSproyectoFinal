## Proyecto Final -  Javascript CoderHouse

# Obejtivo del sistema

- El objetivo es llevar un registro de los alumnos en la institución, tanto la información del curso al que asisten como su cantidad.

# Funcionamiento del sistema

- Crear cursos, usando información como el año, la división y el turno. Tambíen podemos agregar alumnos a cada curso.
- Buscar curso/s entre los cursos, utilizando la información como el año o la división del curso buscado.
- Buscar alumno/s de algún curso, utilizando su nombre o su apellido en la busqueda.
- Eliminar curso/s, utilizando la información como el año y la division para quitarlo.
- Ver y consultar información de cada curso, tanto año, divisón o turno. Asi como tambien cuantos alumnos dispone cada curso y la posibilidad de eliminarlos.

# Herramientas usadas en Javascript para el desarrollo:
 
 - Variables
 - Condicionales
 - Funciones
 - Clases
 - DOM:
    - Modificación de visibilidad de formularios 
    - Mostrar información de cada curso y alumnos
 - Fetch (relativo)
 - Promesas
 - Librerias (para alertas)
 - Local Storage
 - Objetos
 - Arrays
 - Eventos

# Aclaraciones de funcionamiento ⚠️

- Los cursos traidos por el fetch, pueden ser editados, tanto la información como los alumnos. Pero se aclara que no se guardan estos cambios. Entonces al recargar la página no veremos aplicados dichos cambios. Tampoco pueden ser eliminados, ya que el JSON al cual hacemos fetch no puede ser modificado. La idea es que trabajando con bases de datos enviemos la información actualizada con el metodo POST, pero al no tener una base de datos, simulamos que editamos los cambios.
- Los cursos que SI son creados por el usuario en el sistema, si son editables y modificables sus alumnos. Estos cambios SI se guardan en el sistema usando el Local Storage ya sea al agregar o eliminar cursos o editar datos del curso o sus alumnos.
- Entonces para cerrar las aclaraciones, la idea seria interactuar con una base de datos pero al no tenerla trabajamos con lo que tenemos y podemos simular el funcionamiento principal, no es porque el sistema funciona mal, sino que intentamos trabajar en base a las herramientas que tenemos.
    # - Importante:
    - Se accede con nombre y apellido:
        - Yael Roufe
        - Facundo Casal
        - Gonzalo Ramos 
    - No hay diferencia en usar mayusculas o minusculas porque son automaticamente convertidas.

# Teconologias utilizadas

- Javascript
- Librerias: SweetAlert2
- HTML
- CSS
- SASS
- Git & Github

## Autor
- Gonzalo Ramos

