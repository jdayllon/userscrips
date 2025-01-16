// ==UserScript==
// @name         Alerta por Badge Count
// @namespace    http://tampermonkey.net/
// @version      2024-07-03
// @description  Muestra un emoji de alerta cuando una etiqueta con la clase 'badge-count' tenga un valor superior a 5
// @author       You
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?query_id=12264
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?per_page=*&query_id=12264
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues?query_id=12382
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues?per_page=*&query_id=12382
// @icon         https://www.google.com/s2/favicons?sz=64&domain=sandetel.es
// @uploadURL    https://gist.githubusercontent.com/jdayllon/cd0c14b520cfa49695e2eba18a1c3bd3/raw/hgp-tags-users-tasks-alert.js
// @downloadURL  https://gist.githubusercontent.com/jdayllon/cd0c14b520cfa49695e2eba18a1c3bd3/raw/hgp-tags-users-tasks-alert.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para verificar y mostrar el emoji de alerta
    function verificarYMostrarAlerta() {
        var badges = document.getElementsByClassName('badge-count');

        for (var i = 0; i < badges.length; i++) {
            var badge = badges[i];
            var valor = parseInt(badge.textContent.trim(), 10);

            if (valor > 5) {
                // Crear el emoji de alerta
                var alerta = document.createElement('span');
                alerta.textContent = '🚨';
                alerta.style.marginLeft = '5px';

                // Añadir el emoji al lado de la badge
                badge.appendChild(alerta);
            }
        }
    }

    // Ejecutar la función para verificar y mostrar el emoji de alerta
    verificarYMostrarAlerta();
})();