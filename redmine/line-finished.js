// ==UserScript==
// @name         Tacha lineas con TD
// @namespace    http://tampermonkey.net/
// @version      2024-05-16
// @description  try to take over the world!
// @author       You
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?query_id=*
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?per_page=*&query_id=11986
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues?query_id=*
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues?per_page=*&query_id=11986
// @match        https://ws148.juntadeandalucia.es/gp-sae/projects/explotacion-de-datos/issues?query_id=10296
// @match        https://ws148.juntadeandalucia.es/gp-sae/projects/explotacion-de-datos/issues?per_page=*&query_id=10296
// @uploadURL    https://drive.usercontent.google.com/download?id=11RmgSEQO5z7YHOnGB98Lp7N4S-VKwfH2&export=download&authuser=0&confirm=t&uuid=368a7e59-3de4-46e1-9d51-31a8cc936195&at=AENtkXaGMrugITCeQxCsX7yv3k7i%3A1731061911603
// @downloadURL  https://drive.usercontent.google.com/download?id=11RmgSEQO5z7YHOnGB98Lp7N4S-VKwfH2&export=download&authuser=0&confirm=t&uuid=368a7e59-3de4-46e1-9d51-31a8cc936195&at=AENtkXaGMrugITCeQxCsX7yv3k7i%3A1731061911603
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Función para tachar el texto de una fila
    function tacharTexto(fila) {
        var celdas = fila.getElementsByTagName('td');
        for (var i = 0; i < celdas.length; i++) {
            celdas[i].style.textDecoration = 'line-through';
        }
    }

    // Buscar todas las filas de la tabla
    var filas = document.getElementsByTagName('tr');

    // Recorrer todas las filas
    for (var i = 0; i < filas.length; i++) {
        var fila = filas[i];
        var celdas = fila.getElementsByTagName('td');

        // Recorrer todas las celdas de la fila
        for (var j = 0; j < celdas.length; j++) {
            var celda = celdas[j];

            // Si la celda tiene la clase 'status' y su texto es 'Final', tachar el texto de la fila
            if (celda.className === 'status' && celda.textContent.trim() === 'Final' || celda.textContent.trim() === "Cancelado" || celda.textContent.trim() === "Cancelada") {
                tacharTexto(fila);
                break;
            }
        }
    }
})();