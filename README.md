### Guía Básica de Git y GitHub

Git es el mejor sistema de control de versiones del mundo y con esta guía básica aprenderás comandos simples para poder empezar a trabajar con tu equipo y subir tus proyectos de forma fácil y rápida.
En este post hablaremos de que es Git y Github, además de como usar la terminal de Git Bash para los usuarios de Windows y así poder trabajar colaborativamente con tu equipo.

### Primer uso de Git Bash

1.git init : Todo lo que se escriba dentro de la carpeta va a estar dentro del .git
Allí va el historial de versiones y está oculto dentro de la carpeta.
→ Solo una vez.
2. git add : Lleva el control de los archivos que se agregan luego de escribir ese comando.
2.1 git add . : Es para todo agregar pero no es recomendable.
3. git commit : Comando que indica que esta lista alguna funcionalidad para que sea una versión del código.
4. git commit — m “Mi primer commit”
→ Se repite n veces cada vez se cambia el código.
Nota :
Se tiene que detallar muy bien lo que se pone en el comentario es una buena práctica para que nuestro equipo colaborativo nos pueda entender y solucionar errores en caso sucediera.
Cuando coinciden las líneas entre una persona y la otra pueden ocurrir conflictos.
Push
Básicamente lo que realiza un push es publicar lo que se encuentra en nuestro servidor local y llevarlo al servidor remoto de Github
El push empuja lo de nuestro servidor local al servidor remoto en github
Pull
El pull trae los cambios de nuestro repositorio remoto y los actualiza al repositorio local.
5. git remote add origin [URL DEL REPOSITORIO EN GITHUB]
6. git push origin master : Es el nombre que se le pone al repositorio remoto al que se conecta.

Puedes conocer mas acerca de esta guía, visitando el repositorio o <a href="https://lawebdegit.xyz">lawebdegit.xyz</a> 