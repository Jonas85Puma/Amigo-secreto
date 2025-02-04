# Amigo Secreto

Este proyecto es una aplicación web para organizar un sorteo de amigo secreto. Permite a los usuarios agregar nombres de amigos y luego sortear aleatoriamente un amigo secreto.

## Descripción

La aplicación consta de una interfaz simple donde los usuarios pueden ingresar nombres de amigos y agregarlos a una lista. Una vez que se han agregado todos los nombres, los usuarios pueden sortear aleatoriamente un amigo secreto de la lista.

## Características

- Agregar nombres de amigos a una lista.
- Mostrar la lista de amigos agregados.
- Sortear aleatoriamente un amigo secreto de la lista.
- Mostrar el resultado del sorteo.

## Tecnologías Utilizadas

- HTML
- CSS
- JavaScript

## Estructura del Proyecto

- `index.html`: Contiene la estructura HTML de la aplicación.
- `style.css`: Contiene los estilos CSS para la aplicación.
- `app.js`: Contiene la lógica JavaScript para agregar amigos y sortear el amigo secreto.

## Funciones Principales

### agregarAmigo()

Esta función se ejecuta cuando el usuario hace clic en el botón "Añadir". Obtiene el valor del input, lo agrega al array `amigos`, limpia el input y actualiza la lista de amigos en el DOM.

### actualizarListaAmigos()

Esta función actualiza la lista de amigos en el DOM. Limpia la lista existente y agrega cada nombre del array `amigos` como un elemento `<li>`.

### sortearAmigo()

Esta función se ejecuta cuando el usuario hace clic en el botón "Sortear amigo". Selecciona aleatoriamente un nombre del array `amigos` y muestra el resultado en el DOM.
