
# Social Network
En la actualidad las redes sociales forman parte de nuestras vidas. Dando un ejemplo clave, en el último tiempo, desde la propagación de la pandemia por Covid-19, la forma más rápida de estar cerca de tus seres queridos fue por las redes sociales como Instagram o Facebook.  
## Saudade :tulip:
Mi proyecto se llama Saudade y es una red social creada para recordar a nuestros seres queridos que fallecieron. La idea nace del recuerdo de una persona con quien compartí en mi infancia, y que falleció hace algunos años cuando ya habíamos perdido contacto. No tengo ningún recuerdo tangible de esa persona y eso me llevó a pensar en crear un espacio digital que sirva como memorial de esas personas que ya no están.
## Consideraciones técnicas
Saudade es una aplicación web construida como una [Single-page Application (SPA) responsive](https://es.wikipedia.org/wiki/Single-page_application), pensada para ser usada como aplicación web [Movil First](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/). 
En la página podemos crear una cuenta, iniciar sesión o ingresar con nuestra cuenta de Gmail. Podemos crear memoriales de las personas fallecidas o podemos vincularnos a sus memoriales, enviando una solicitud a la persona que crea el memorial. Dentro de dichos memoriales podemos compartir fotos o relatos y finalmente comentar los post. 
## Prototipos :speech_balloon:
### 1. Prototipo de baja fidelidad
Tenemos cuatro vistas, siendo la inicial la página de registro/ingreso. Luego vamos a nuestro perfil, donde visualizamos los memoriales creados y vinculados. En la vista tres, vemos el memorial con los datos de la persona fallecida y los post compartidos. Finalmente podemos clickear un post para poder visualizar los comentarios y comentar.

![](https://i.imgur.com/5Q86h23.jpg)


### 2. Prototipo de alta fidelidad
Para comenzar a crear el prototipo de alta fidelidad, comenzamos creando vistas diferentes, las cuales fueron probadas en usuarios reales.

Primera prueba de vista de registro/ingreso.

![](https://i.imgur.com/fUZQaAi.jpg)

Pruebas de colores y diseño de botones y detalles estéticos y funcionales.

![](https://i.imgur.com/e4anYVz.jpg)

Pruebas de color para el diseño de las vistas dos, tres y cuatro.

![](https://i.imgur.com/Mt9vMT9.jpg)


### Diseño visual y usuarios
En el diseño de mi página decidí usar un diseño simple, minimalista y sobrio. Según las encuentas que hicimos decidimos usar colores suaves en tonos cálidos ya que tienen relación con la calma y la paz.
Los usuarios a los que apunta la página son personas sin límite de edad, pero que utilicen redes sociales con regularidad y que sientan la necesidad de acudir a la memoria de las personas que perdieron. 
Entendemos que existen redes sociales, como Facebook, donde podemos hacer un memorial de un perfil ya creado, cuando la persona fallece. Sin embargo, esta aplicación está enfocada al 100% a ser un memorial, teniendo consideraciones visuales y estéticos que no salen de esta temática.

 En el siguiente [link](https://www.figma.com/file/eaHeqtBfhcxKCfqmiKrvOO/III.-Social-network---Memorial) podemos encontrar el prototipo en Figma realizado. 
 
 #### Manifiesto Saudade
 Decidí agregar un modal donde se pueda visualizar  el Manifiesto de la página, con el fin de transparentar que sé que es un tema delicado, que será tratado con el respeto que debe tener.
 
 ![](https://i.imgur.com/Ps3byGX.jpg)


 ## Historias de Usuario.

#### Historia de usuario I.
Yo como usuario quiero poder crear/ingresar a mi perfil para usar la app.

 Criterios de aceptación.
* Entro a la página y puedo crear mi perfil con correo electrónico y contraseña o con mi cuenta de Gmail.
* Si tengo cuenta creada, puedo ingresar usando mi correo electrónico y contraseña.
* En la sección *Ver manifiesto* puedo visualizar el modal donde se despliega el Manifiesto Saudade.


#### Historia de usuario II.
Yo como usuario quiero visualizar mi perfil qara acceder de forma ordenada a los Memoriales disponibles.

 Criterios de aceptación.
* Al ingresar soy redirigido a mi perfil personal.
* Visualizo mi perfil, puedo editar datos.
* Veo los memoriales creados y seguidos.

#### Historia de usuario III.
Yo como usuario quiero interactuar con los Memoriales para escribir post, subir fotos, dar like en Los Memoriales disponibles.

 Criterios de aceptación.
* Puedo entrar en un Memorial Creado o Vinculado.
* Puedo ver los datos del perfil y las publicaciones (post o fotos).
* Puedo escribir un comentario o agregar una foto en el memorial.
* Puedo interactuar con los post o fotos (dejar flores, dejar comentarios, editarlos/eliminar)

#### Historia de usuario IV.
Yo como usuario quiero crear un Memorial para que otros usuarios puedan interactuar con ellos.

 Criterios de aceptación.
* Puedo agregar un Memorial para una persona vinculada conmigo que haya fallecido.
* Puedo completar sus datos personales y agregar foto de perfil.
* Puedo agregar vínculo con la persona, elegir la privacidad del perfil, aceptar los términos y condiciones.

## Link del proyecto :computer:
[Saudade](https://saudade-65a6b.web.app/#/login), un lugar para la memoria.

---

## Construido con :hammer:

* [JavaScript](https://www.javascript.com/) - Lenguaje de programación.
* [HTML semántico](https://es.wikipedia.org/wiki/HTML) - Single page aplication.
* [CSS](https://es.wikipedia.org/wiki/CSS_Flexible_Box_Layout) - Flexbox CSS.
* [Firebase](https://firebase.google.com/) - Firebase Authentication y Firestore.
* [Figma](www.figma.com) - Diseño de prototipos de alta fidelidad.
* [Github](www.github.com) - Hosting de repositorios.
* [Trello](Trello) - Organización de proyectos con interfaz web.

## Creado por :gem:
Desarrollo, diseño e documentación
* [Bárbara Sagredo](https://github.com/barbarasagredo)
* [Ana Vidal](https://github.com/ana-225)

### Agradecimientos :video_game:
Equipo de Laboratoria - Chile.


---