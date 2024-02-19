Country App - README
Este es un proyecto de una aplicación Angular llamada Country App que proporciona información sobre países del mundo. A continuación, se describen brevemente los aspectos más destacados del proyecto y cómo ejecutarlo.

-Inicio del Proyecto
    Se ha creado un nuevo proyecto Angular llamado Country App.
    Se ha añadido Bootstrap a través de su CDN para proporcionar estilos globales a la aplicación.
    Se han creado las carpetas countries y shared, esta última con subcarpetas component y pages.
Enrutamiento
    Se ha configurado el enrutamiento para las páginas principales: inicio, acerca de y contacto.
    Por defecto, cualquier URL lleva al componente de inicio.
Barra Lateral
    Se ha creado el componente sidebar dentro de la carpeta shared/component.
    La barra lateral contiene enlaces a las páginas de inicio y acerca de.
    Se ha utilizado la directiva routerLink para configurar los enlaces correctamente.
Nuevos Componentes en Countries
    Se han creado componentes para diferentes páginas relacionadas con la búsqueda de países: byCapitalPage, byCountryPage, byRegionPage, y countryPage.
    Se ha implementado el lazy-loading para cargar las rutas del módulo countries.routes.ts.
Búsqueda de Países
    Se ha desarrollado el componente searchBox en shared/components para la búsqueda de países.
    Se ha conectado el componente de búsqueda con el componente byCapitalPage.
Backend y Servicio de Conexión
    Se ha configurado un servicio para conectarse a la API-Rest de restcountries.com y obtener información sobre países.
    Se han definido interfaces para los datos de país y se ha implementado el servicio correspondiente.
Vista Detallada de la Información
    Se ha creado el componente country-table en countries/components para presentar los resultados de búsqueda.
    Se ha implementado la lógica para mostrar los detalles de un país seleccionado.
    Se ha añadido manejo de errores en caso de fallos en la conexión a la API-Rest.
