# ChGiphy - GIF Search Web App

ChGiphy es una aplicación web simple y responsiva que permite a los usuarios buscar GIFs utilizando la API de Giphy. El proyecto está completamente dockerizado, lo que facilita su ejecución en cualquier sistema con Docker instalado.

Este proyecto es una aplicación web que permite buscar GIFs usando la API de Giphy. El frontend está construido con React y servido por un contenedor Nginx, mientras que el backend es una API RESTful creada con Node.js y Express que consulta la API de Giphy. El frontend hace solicitudes GET al backend para obtener los GIFs, que luego se muestran en una interfaz estilo grid con paginación y filtro por calificación. Ambos servicios están dockerizados y se ejecutan en contenedores separados.

Estilo parte de Tailwind CSS.


## Prerrequisitos

Antes de ejecutar este proyecto, asegúrate de tener:

- Docker instalado.

- Una clave de API de Giphy.

## Instalación y Ejecución
Paso 1: Clonar repositorio

```bash
git clone https://github.com/jorgesanchez98/chGiphy.git
cd chGiphy
```
Paso 2: Configurar Variables de Entorno

Crea un archivo .env en backend y agrega:

```bash
GIPHY_API_KEY=api_key
```
Asegúrate de que docker-compose.yml incluya:
```bash
    environment:
      - NODE_ENV=production
      - GIPHY_API_KEY=api_key
```
Paso 3: Construir y Ejecutar Contenedores
```bash
docker-compose up --build
```

## Características

- Buscar GIFs: Ingresa tu busqueda para encontrar GIFs relevantes.

- Filtrar por Calificación: Elige un filtro de calificación (G, PG, PG-13, R) para refinar los resultados.

- Paginación: Explora los resultados con navegación paginada.

- Despliegue con Docker: Ejecuta toda la aplicación con un solo comando.

- Completamente responsivo: Utiliza el framework Tailwind CSS para un diseño elegante y responsivo

## Diagráma de Arquitectura
![ArquitecturaCH](https://github.com/user-attachments/assets/970696cf-ec01-46ef-864e-ffac13731680)

## Posibles fallas 

Problemas con la API Key
- Asegurate de que la API key este correctamente escrita y en el lugar correcto.
- La API key posiblemente esta expirada, no es válida, o sobrepaso su límite de llamadas por hora.
- Servidores de Giphy API están abajo.

Problemas con Docker
- Asegurate que los puertos (80 y 3000) no estén siendo utilizados, de ser necesario cambialos en docker-compose.yml.

## Patrón de diseño
Arquitectura Modular de Express (Backend)
- Separación de responsabilidades: rutas, llamadas a la API, configuración.
- Gestión del entorno: mediante el archivo .env.
- Escalabilidad: se pueden agregar más rutas o incluso bases de datos en el futuro.

Arquitectura basada en Componentes (Frontend)
- Desarrollo orientado a componentes: cada componente tiene una única responsabilidad.
- Reutilización de código: componentes modulares que se pueden reutilizar en diferentes partes del proyecto.
- Estado local y global: uso de hooks para manejar el estado dentro de los componentes.

