# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Descripción del proyecto](#2-descripción-del-proyecto)
* [3. Descripción de usuario y prototipos](#3-descripción-de-usuario-y-prototipos)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

## 1. Preámbulo

Las redes sociales deben estar al servicio de las necesidades de los usuarios que las usen. Nuestra red social parte de una historia de infancia de una de las creadoras. Cuando era niña tuvo una persona que fue muy importante, con la que perdió contacto al crecer. Durante su adolescencia se enteró del fallecimiento de esa persona. Al intentar buscar algún recuerdo en redes sociales conocidas, no encontró ninguno y con el pasar de los años incluso no recordaba su rostro. 
Nuestra red social se llama "Saudade", inspirada en la palabra de origen portugués, cuyo significado es "anhelo de una persona o momento que ya no está presente". Se trata de una plataforma donde podamos compartir recuerdos en forma de fotografías o relatos de la persona que falleció, con las personas que fueron parte de su vida, como familiares o amigos. 

## 2. Descripción del proyecto

En la plataforma podemos registrarnos para crear un perfil personal, a través del que creamos "Memoriales". Las personas pueden solicitar unirse a dichos Memoriales para poder acceder a los recuerdos que otras personas hagan en el Memorial, así como compartir sus propios recuerdos a modo de Fotografías o Relatos. Al mismo tiempo, es posible dejar Flores a modo de reinterpretación del "Like" presente en las redes sociales actuales.

## 3. Descripción de usuario y prototipos

Pensamos que el usuario de nuestra red social es un adulto cuyo objetivo sea compartir los recuerdos con las personas que conoció, que además busca un lugar específico fuera de las redes sociales tradicionales. 
Lo primero a considerar es que tenemos encontrar rápidamente las redes que buscamos para poder acceder a los Memoriales. Seguiremos la navegación normal de las redes sociales, pero enfocamos el contenido importante en el área del Memorial, ahí es donde ocurre toda la interacción. 

Primer prototipo en papel.
![img](https://raw.githubusercontent.com/barbarasagredo/SCL016-social-network/Barbara/public/IMAGES/bajafidelidad.jpeg)

Al ser un lugar donde se compartan recuerdos con una temática sensible, pensamos que la página debe tener una paleta de colores suaves y para ello consultamos con distintas personas sobre propuestas de diseño  que incluyeron todas las vistas de la página.

Vista de la página principal de inicio de sesión o registro. 
![img](https://raw.githubusercontent.com/barbarasagredo/SCL016-social-network/Barbara/public/IMAGES/TEST%20HOME%20BACKGROUND.jpg)

Vista pruebas de Color Space para páginas de navegación. 
![img](https://raw.githubusercontent.com/barbarasagredo/SCL016-social-network/Barbara/public/IMAGES/TEST%20COLOR%20SPACE.jpg)

Vista de los botones de Inicio de sesión o registro.
![img](https://raw.githubusercontent.com/barbarasagredo/SCL016-social-network/Barbara/public/IMAGES/OTHER%20TEST.jpg)

## 4. Páginas a trabajar

Prototipo de alta fidelidad en Figma.
https://www.figma.com/proto/eaHeqtBfhcxKCfqmiKrvOO/III.-Social-network---Memorial?node-id=123%3A6&scaling=scale-down&page-id=0%3A1

El prototipo de alta fidelidad tiene consideradas algunas interacciones que para los efectos de conseguir los objetivos de aprendizaje fueron ignoradas en el desarrollo del código.


## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate


### 5.2 Definición del producto

En el `README.md` cuéntanos brevemente cómo descubriste las necesidades de los
usuarios y cómo llegaste a la definición final de tu producto. Es importante
que detalles:

* Quiénes son los principales usuarios de producto.
* Qué problema resuelve el producto / para qué le servirá a estos usuarios.

### 5.3 Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

