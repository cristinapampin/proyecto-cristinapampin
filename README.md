# Proyecto

**Objetivo:** Practicar los conceptos aprendidos creando una aplicación usable realista.

**20 horas** en 4 sesiones de 5 horas

## Explorador de datos del Banco Mundial

Desarrollar una aplicación web con Angular y estética Material Design que muestre datos básicos de los países consultando el api oficial del Banco Mundial.


### Características

- Trabajo individual

- Colaboración y ayuda entre el alumnado permitida.

- Consulta de documentación online y al profesor permitida.

- Libertad estética pero usando Material Design.

### Guía

- [Estructura y funcionalidad esperadas](./estructura.md)

- [Recursos](./recursos.md)



# Tareas:

:white_check_mark: `/` Mostrar un listado de todos los países <br/>
:white_check_mark: `/country/:COD3` Ver datos básicos de un país <br/>
:white_check_mark: `/search` Mostrar un selector de niveles de ingreso <br/>
:white_check_mark: `/search` Filtrar los países por nivel de ingresos <br/>
:white_check_mark: `/search` Mostrar un grupo de opciones por tipo de deuda <br/>
:white_check_mark: `/search` Filtrar los países también por tipo de deuda <br/>
:white_check_mark: `/search` Mostrar un selector de regiones geográficas <br/>
:white_check_mark: `/search` Filtrar los países también por regiones geográficas <br/>
:white_check_mark: `/regions` `/regions/:COD3` Lista de regiones y ficha con la lista de sus países <br/>
- [ ] `/country/:COD3` Mostrar indicadores avanzados en la ficha de un país


### Características del proyecto Explorador

- Todo el proyecto ha sido construido dentro de **`/`Explorador**

- Al ejecutarlo con npm run start se abre el **explorador** en el **puerto 4261**

- En el `/`home está la lista de países, pide al API del banco mundial

- Al hacer click en uno de los países, se redirige a una página `/`country en la que se visualiza la información de ese país

- En el nav lateral hay acceso a: Home, Regions y Search

- Cuando se accede a `/`regions se visualiza una lista de regiones 

- Al hacer click en una de las regiones se redirige a una página `/`region en la que se visualiza la información de esa región

- Cuando se accede a `/`search se carga un formulario que filtra la información de los países según: income level, lending type y region. 
Puede clasificarse por 1, 2 o los 3 filtros. 
Para buscar hay que hacer click en el botón SEARCH, que recoge las opciones seleccionadas y filtra la lista de países.

