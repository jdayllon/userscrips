// ==UserScript==
// @name         Alerta por Estado y Horas
// @namespace    http://tampermonkey.net/
// @version      2024-07-03
// @description  Muestra un emoji de alerta y reloj cuando la celda "status" es "Asignado responsable" o "Nuevo" y "spent_hours" tiene un valor superior a 0
// @author       You
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?query_id=*
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?per_page=*&query_id=11986
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sandetel.es
// @uploadURL    https://gist.githubusercontent.com/jdayllon/cd0c14b520cfa49695e2eba18a1c3bd3/raw/hgp-tags-tasks-notrun-alert.js
// @downloadURL  https://gist.githubusercontent.com/jdayllon/cd0c14b520cfa49695e2eba18a1c3bd3/raw/hgp-tags-tasks-notrun-alert.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para verificar el estado y horas gastadas y anexar los emojis de alerta y reloj
    function verificarYAnexarAlerta() {
        var filas = document.getElementsByTagName('tr');

        for (var i = 0; i < filas.length; i++) {
            var fila = filas[i];
            var statusCelda = fila.getElementsByClassName('status')[0];
            var hoursCelda = fila.getElementsByClassName('spent_hours')[0];

            if (statusCelda && hoursCelda) {
                var statusTexto = statusCelda.textContent.trim();
                var hoursValor = parseFloat(hoursCelda.textContent.trim());

                if ((statusTexto === 'Asignado responsable' || statusTexto === 'Nuevo') && hoursValor > 0) {
                    // Crear los emojis de alerta y reloj
                    var alerta = document.createElement('span');
                    alerta.textContent = '🚨⏰';
                    alerta.style.marginLeft = '5px';

                    // Añadir los emojis al lado del texto de estado
                    statusCelda.appendChild(alerta);
                }
            }
        }
    }

    // Ejecutar la función para verificar y anexar los emojis de alerta y reloj
    verificarYAnexarAlerta();
})();