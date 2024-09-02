### APLICACIÓN DE TAREAS BÁSICAS

Este proyecto consiste en dos partes principales: un backend con Django y un cliente con React.

## Backend - Djangorestframework

Este es el backend del proyecto, construido con Django y djangoFramework. Proporciona la API que el cliente consume (cómo las peticiones GET, POST, PUT, DELETE).

### Requisitos

- Python 3.12.5
- Django
- djangorestframework

- ### Instalación

   1) git clone [https://github.com/NathansinDrake/Django-api/edit/main/](https://github.com/NathansinDrake/Django-api.git)

   2) Navega al directorio del proyecto:
     ejemplo: cd backend o cd django-api

   3) Crea un entorno virtual:
      python -m venv venv (en visual studio code puedes usar la tecla f1 y seguido buscar python:Selec Interpreter, buscar el entorno que te diga python{3.1x.xx} venv y hacer
      click en él, también puedes ver que en la parte izquierda te saldrá una estrella o un texto que dice recommended, hacer click ahí)

   4) Ejecuta las migraciones y el servidor:
      python manage.py migrate
      python manage.py runserver

- Siguiendo estos pasos sólo quedaría clonar el cliente, construido con Vite usando React. Consume la API proporcionada por el backend.

## Frontend - Client-React

  ### Requisitos

- Node.js (v16 o superior recomendado)
- npm o yarn  

  ### Instalación

Sigue estos pasos para configurar el proyecto en tu entorno local:

  1) Clona el Repositorio:

   Clona el repositorio a tu máquina local:
    git clone [https://github.com/NathansinDrake/Cliente-de-Tareas.git](https://github.com/NathansinDrake/Cliente-de-Tareas.git)

  2) Navega al Directorio del Proyecto:
      Entra en el Directorio usando por ejemplo: cd client  o cd cliente

  3) Instala las Dependencias:
      Usa npm o yarn para instalar las dependencias del proyecto por ejemplo:
        npm install
        yarn install

   4) Ejecutar el cliente:
      Usando estos comandos de ejemplo la aplicación deberia estar lista para su lanzamiento
       npm run dev
       yarn run dev

- Esto generará los archivos de construcción optimizados en el directorio dist. Y con eso podrias ver algo como esto


![image](https://github.com/user-attachments/assets/fa167831-d9c6-4fc6-9d46-6d2f1537366a)



   - Para entrar al cliente debes ir al navegador y entrar a la siguiente dirección: [http://localhost:5173/tasks](http://localhost:5173) 

   - Para entrar al servidor y ver la documentación debes ir al navegador y entrar a la siguiente dirección: [http://localhost:8000/docs/](http://localhost:8000/docs/)

   - Para agregar una nueva tarea solo tiene que undir en el botón crear tarea


![image](https://github.com/user-attachments/assets/6af4222a-b50d-41b8-9e36-645bb4a45d25)
