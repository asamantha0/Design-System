# Design System & SaaS Components

Este proyecto es una implementación completa de un Sistema de Diseño y una librería de componentes SaaS, generada a partir de los tokens de diseño proporcionados.

## 🚀 Características

El sitio web de documentación incluye:

*   **Tokens de Diseño**: Visualización interactiva de todos los tokens del sistema (colores, espaciado, tipografía).
*   **Librería de Colores**: Paletas completas (Primarios, Neutrales, Estados) con funcionalidad de copiado rápido.
*   **Tipografía**: Escala tipográfica completa mostrando headings y cuerpos de texto.
*   **Componentes SaaS**: Una colección de componentes listos para usar:
    *   Botones (Primary, Secondary, Disabled)
    *   Campos de entrada (Texto, Email, Validación)
    *   Tarjetas (Cards) de contenido y estadísticas
    *   Alertas y notificaciones
    *   Tablas de datos
    *   Formularios completos

## 🛠 Tecnología

El proyecto está construido utilizando tecnologías web estándar, sin dependencias externas:

*   **HTML5**: Estructura semántica.
*   **CSS3**: Variables CSS (Custom Properties) para los tokens de diseño, Flexbox y Grid para layouts.
*   **JavaScript**: Vanilla JS para la navegación, renderizado dinámico de tokens y funcionalidad de copiado.

## 📂 Estructura del Proyecto

*   `index.html`: Punto de entrada de la aplicación. Contiene la estructura base y la navegación.
*   `styles.css`: Hoja de estilos principal. Define las variables CSS (tokens) y los estilos de los componentes.
*   `app.js`: Lógica de la aplicación. Maneja el enrutamiento simple, la carga de datos y las interacciones.
*   `design-system-master.json`: Archivo fuente de los tokens de diseño fusionados.
*   `Mode 1.tokens*.json`: Archivos originales de tokens de Figma.

## 🔧 Uso

1.  Abre el archivo `index.html` en tu navegador web.
2.  Navega a través de las diferentes secciones usando la barra lateral.
3.  Haz clic en cualquier token o color para copiar su valor al portapapeles.
4.  Utiliza el botón "Copiar" en la sección de componentes para obtener el código HTML listo para usar.

## 📱 Diseño Responsive

El sitio está diseñado para adaptarse a diferentes tamaños de pantalla:
*   Sidebar colapsable en dispositivos móviles.
*   Grids de componentes que se ajustan automáticamente al espacio disponible.
