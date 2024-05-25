Instrucciones para correr este Proyecto

1. Realizar el comando npm install desde la terminal.
2. Realizar el comando npm start para iniciar el proyecto
    esto nos abrira una ventana en nuestro navegador
3. Podemos navegar en la opciones 'task' o 'goal'
    para agregar el tipo de tarea que quedamos
4. primero ingresemos un nombre de la tarea o meta
5. agreguemos una descipcion de dicha actividad
6. por ultimo agregemos una fecha en la cual debemos realizar 
    esa actividad
7. al presionar el boton 'add goal' debera mostrar de lado
    derecho nuestra tarea ingresada.
8. Para remover la tarea presionar el boton 'remove' 

Actualizacion 1.1

9. Se incorporo el backend a la aplicacion
10. para obtener los resultados esperados, primero se debe inicializar el backend
11. agregar 1  tarea y 1 meta desde postman
12. al inicalizar este proyecto se hara una peticion GET automaticamente y se mostrara en pantalla las tareas creadas
desde el postman.

Actualizacion 1.2
13. Se crea el archivo Dockerfile
14. Primero se utiliza la imagen de node 20 como builder y la imagen de nginx como servidor
15. para crear la imagen de nuestro proyecto usamos el siguiente comando: docker build -t docker-react-image:1.0 .
16. ya teniendo creada la imagen la podemos correr con el siguiente comando: run -p 4000:80 --name docker-react-container docker-react-image:1.0