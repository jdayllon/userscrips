// ==UserScript==
// @name         Abrir enlaces externos en nueva pestaña
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Abre enlaces externos en una nueva pestaña
// @author       Microsoft Copilot
// @match        https://hgp.sandetel.es/issues/*
// @match        https://redmine-attgap.juntadeandalucia.es/issues/*
// @match        https://teo.i-administracion.junta-andalucia.es/issues/*
// @match        https://ws148.juntadeandalucia.es/gp-sae/issues/*
// @grant        none
// @uploadURL    https://drive.usercontent.google.com/download?id=1Xy4IGnwTwMvXkfhVP-FPRmrl4Z1Fv6MU&export=download&authuser=0&confirm=t&uuid=446e13b3-3dac-428b-91f5-55abc26e52e9&at=AENtkXajM1_2P7qsKaCuQUVFGaEE%3A1731061260637
// @downloadURL  https://drive.usercontent.google.com/download?id=1Xy4IGnwTwMvXkfhVP-FPRmrl4Z1Fv6MU&export=download&authuser=0&confirm=t&uuid=446e13b3-3dac-428b-91f5-55abc26e52e9&at=AENtkXajM1_2P7qsKaCuQUVFGaEE%3A1731061260637
// ==/UserScript==

(function() {
    'use strict';

    // Obtiene todos los enlaces de la página
    var enlaces = document.getElementsByTagName('a');

    for (var i = 0; i < enlaces.length; i++) {
        var enlace = enlaces[i];

        // Comprueba si el enlace es externo
        if (enlace.hostname !== window.location.hostname) {
            // Si es externo, abre en una nueva pestaña
            enlace.target = '_blank';
        }
    }
})();
