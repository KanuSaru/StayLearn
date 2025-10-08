# StayLearn - Sistema de Detección y Prevención de Deserción Estudiantil

![StayLearn Banner](https://img.shields.io/badge/StayLearn-Sistema%20Educativo-4F46E5?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css)

> Sistema web integral para la detección temprana y prevención de la deserción estudiantil en instituciones educativas colombianas.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías](#tecnologías)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Credenciales de Prueba](#credenciales-de-prueba)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Roadmap](#roadmap)
- [Contribuir](#contribuir)
- [Autores](#autores)

## Descripción

**StayLearn** es una solución tecnológica diseñada para ayudar a instituciones educativas a identificar estudiantes en riesgo de deserción mediante el análisis de factores académicos, económicos y psicológicos. El sistema proporciona alertas tempranas y herramientas de seguimiento para implementar medidas preventivas oportunas.

### Problema que Resuelve

La deserción estudiantil es uno de los problemas más críticos en el ámbito educativo colombiano. StayLearn aborda esta problemática mediante:

- **Detección Temprana**: Identificación proactiva de estudiantes en riesgo
- **Análisis Multifactorial**: Evaluación integral de factores académicos, económicos y psicológicos
- **Visualización Intuitiva**: Dashboard interactivo con métricas clave
- **Seguimiento Personalizado**: Herramientas para monitorear la efectividad de las intervenciones

## Características

### Funcionalidades Principales

- **Sistema de Autenticación Seguro**
  - Login con validación de credenciales
  - Gestión de sesiones
  - Recuperación de contraseña

- **Dashboard Analítico**
  - KPIs en tiempo real (Alto Riesgo, Riesgo Medio, Bajo Riesgo, Alertas Activas)
  - Gráficos de distribución de riesgo por facultad
  - Tendencias históricas de deserción
  - Filtros avanzados por facultad y nivel de riesgo

- **Gestión de Estudiantes**
  - Tabla interactiva con información detallada
  - Índice de riesgo personalizado (StayLearn Risk Index)
  - Búsqueda por nombre o ID
  - Factores de riesgo desglosados (Académico, Económico, Psicológico)

- **Visualización de Datos**
  - Gráficos de barras para distribución por facultad
  - Gráficos de línea para tendencias temporales
  - Sistema de colores intuitivo (Rojo: Alto, Amarillo: Medio, Verde: Bajo)

- **Actualización en Tiempo Real**
  - Botón de actualización manual de datos
  - Timestamp de última actualización

## Tecnologías

### Frontend

| Tecnología | Versión | Uso |
|------------|---------|-----|
| **React** | 18.3.1 | Framework principal |
| **Vite** | 7.1.7 | Build tool y dev server |
| **TailwindCSS** | 3.4.17 | Estilos y diseño responsive |
| **Recharts** | 2.10.0 | Visualización de gráficos |
| **Lucide React** | 0.263.1 | Iconografía |
| **React Router** | 6.x | Navegación y rutas |

### Herramientas de Desarrollo

- **PostCSS** - Procesamiento de CSS
- **Autoprefixer** - Compatibilidad de navegadores
- **ESLint** - Linting de código

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** (versión 18 o superior)
- **npm** (versión 9 o superior)
- **Git**

Verifica las versiones instaladas:

```bash
node --version
npm --version
git --version
```

## Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/staylearn.git
cd staylearn
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Configurar variables de entorno (opcional)

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=StayLearn
```

### 4. Iniciar el servidor de desarrollo

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## Uso

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar build de producción
npm run preview

# Linting
npm run lint
```

### Flujo de Usuario

1. **Login**: Accede con las credenciales institucionales
2. **Dashboard**: Visualiza las métricas principales y alertas
3. **Filtrado**: Utiliza los filtros para segmentar por facultad o nivel de riesgo
4. **Búsqueda**: Encuentra estudiantes específicos por nombre o ID
5. **Detalle**: Haz clic en "Ver detalles" para información completa del estudiante

## Estructura del Proyecto

```
staylearn/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── KPICard.jsx
│   │   │   ├── StudentTable.jsx
│   │   │   └── Charts.jsx
│   │   ├── Layout/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   └── common/
│   │       ├── Button.jsx
│   │       └── Modal.jsx
│   ├── pages/
│   │   └── Login.jsx
│   ├── services/
│   │   └── api/
│   │       └── apiClient.js
│   ├── styles/
│   │   └── index.css
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── .env.example
├── .gitignore
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Credenciales de Prueba

Para acceder al sistema en modo de desarrollo:

```
Email: admin@staylearn.edu.co
Contraseña: admin123
```

> **Nota**: Estas credenciales son solo para desarrollo. En producción, implementa un sistema de autenticación robusto.

## Capturas de Pantalla

### Página de Login
![Login](./docs/screenshots/login.png)

### Dashboard Principal
![Dashboard](./docs/screenshots/dashboard.png)

### Vista de Estudiantes
![Students](./docs/screenshots/students.png)

## Roadmap

### Versión 1.0 (Actual)
- [x] Sistema de autenticación
- [x] Dashboard con KPIs
- [x] Visualización de datos
- [x] Filtros y búsqueda
- [x] Diseño responsive

### Versión 1.1 (Próximamente)
- [ ] Integración con API backend
- [ ] Sistema de notificaciones
- [ ] Exportación de reportes (PDF, Excel)
- [ ] Perfil detallado de estudiantes
- [ ] Historial de intervenciones

### Versión 2.0 (Futuro)
- [ ] Machine Learning para predicción de riesgo
- [ ] Sistema de recomendaciones automáticas
- [ ] Integración con sistemas institucionales (SIS)
- [ ] Módulo de comunicación con estudiantes
- [ ] Dashboard para estudiantes

## Contribuir

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### Guías de Contribución

- Sigue las convenciones de código establecidas
- Escribe mensajes de commit descriptivos
- Documenta nuevas funcionalidades
- Incluye tests cuando sea posible

## Autores

- **Erick Donado** - [GitHub](https://github.com/KanuSaru)
- **Leonardo Escorcia** - [GitHub](https://github.com/l30xd)
- **Natalia Díaz** - [GitHub](https://github.com/nathymayo939-source)

### Profesor Guía
- **Mario Antonio Vergara Sotelo** - Universidad Simón Bolívar
