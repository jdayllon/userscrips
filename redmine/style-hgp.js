// ==UserScript==
// @name         Estilizar Tickets en HGP
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Aplica estilos específicos a los tickets según su estado en la página de HGP.
// @author       Tu Nombre
// @match        https://hgp.sandetel.es/issues/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

    // Función para aplicar estilos según el estado del ticket
    function aplicarEstilos() {
        // Seleccionar todas las filas de la tabla de tickets
        const filas = document.querySelectorAll('table.issues tr.issue');

        // Iterar sobre cada fila para aplicar los estilos según el estado
        filas.forEach(fila => {
            // Obtener el texto del estado del ticket
            const estado = fila.querySelector('td.status').innerText.trim();

            // Aplicar estilos según el estado
            switch (estado) {
                case 'Final':
                case 'Cancelado':
                    // Tachar el texto del ticket
                    fila.style.textDecoration = 'line-through';
                    break;
                case 'Nuevo':
                case 'Asignado responsable':
                    // Cambiar el color del texto a gris
                    fila.style.color = 'gray';
                    break;
                case 'En curso':
                    // Subrayar el texto del ticket
                    fila.style.color = 'black';
                    break;
                case 'Bloqueo por Terceros':
                    // Añadir emoji de alerta al final del estado
                    fila.querySelector('td.status').innerText += ' ⚠️';
                    fila.style.color = 'gray';
                    break;
                case 'Detenido por Nosotros':
                    // Añadir emoji de bomba al final del estado
                    fila.querySelector('td.status').innerText += ' 💣';
                    fila.style.color = 'gray';
                    break;
                default:
                    // No hacer nada para otros estados
                    break;
            }
        });
    }

    // Esperar a que el DOM esté completamente cargado
    window.addEventListener('load', aplicarEstilos);
})();
