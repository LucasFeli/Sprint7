# Star Wars App

## Descripción

Esta aplicación de Star Wars permite a los usuarios registrarse, iniciar sesión y explorar las naves espaciales del universo de Star Wars. Las rutas protegidas aseguran que solo los usuarios autenticados puedan acceder a ciertas partes de la aplicación.

## Características

- Registro de usuario
- Inicio de sesión de usuario
- Protección de rutas con autenticación
- Exploración de naves espaciales
- Detalles de naves espaciales

## Tecnologías Utilizadas

- React
- Firebase (Autenticación y Firestore)
- React Router
- Redux (para manejo del estado)

## Instalación

1. Clona este repositorio:
   ```sh
   https://github.com/LucasFeli/Sprint7.git
   ```

2. Navega al directorio del proyecto:

   - cd Sprint7

3. Instala las dependencias:
    ```sh
    - npm install
    ```

##  Configuracion de Firebase

1. Ve a Firebase Console y crea un nuevo proyecto.
2. Agrega una nueva aplicación web al proyecto y copia la configuración de Firebase.
3. Crea un archivo firebaseConfig.js en el directorio src/firebase y pega tu configuración de Firebase:


```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_AUTH_DOMAIN",
  projectId: "TU_PROJECT_ID",
  storageBucket: "TU_STORAGE_BUCKET",
  messagingSenderId: "TU_MESSAGING_SENDER_ID",
  appId: "TU_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
```

<br>


## Uso 

Para iniciar la aplicación en modo de desarrollo:

```sh
npm start
```

- La aplicación estará disponible en http://localhost:5173.

## Estructura del Proyecto

src/
├── api/ # Configuración de la API
│ └── shipsApi.jsx
├── assets/ # Imágenes y recursos estáticos
├── components/ # Componentes de React
│ ├── Firebase.js
│ ├── Login.jsx
│ ├── Navbar.jsx
│ ├── Navigation.jsx
│ ├── Pagination.jsx
│ ├── PrivateRoute.jsx
│ ├── Register.jsx
│ ├── Starship.jsx
│ └── StarshipDetails.jsx
├── context/ # Contextos de React
│ └── AuthContext.js
├── features/ # Configuración de Redux slices
│ └── starshipsSlice.jsx
├── pages/ # Configuración de páginas de la aplicación
│ ├── IntroPage/
│ │ └── IntroPage.jsx
│ ├── movies/
│ │ └── Movies.jsx
│ ├── pilots/
│ │ └── Pilots.jsx
│ └── starships/
│ └── StarshipsView.jsx
├── store/ # Configuración de Redux
│ └── store.js
├── App.css # Estilos
├── App.jsx # Componente principal de la aplicación
├── index.css # Estilos globales
└── index.js # Punto de entrada de React

# Rutas


"/" - Página de introducción
"/register "- Página de registro de usuario
"/login" - Página de inicio de sesión de usuario
"/starships" - Página de exploración de naves espaciales (ruta protegida)
"/starships/:id "- Página de detalles de una nave espacial específica (ruta protegida)

- Pagina de introduccion

![alt text](image.png)

- Pagina de registro

![alt text](image-1.png)

- Pagina de Inicio de sesion

![alt text](image-2.png)

- Pagina de exploracion de naves espaciales

![alt text](image-3.png)

- Pagina de detalles de una nave espacial específica
    ![alt text](image-5.png)

# Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para cualquier mejora o corrección.





