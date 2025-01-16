// ==UserScript==
// @name         Marcado de tareas con emojis
// @namespace    http://tampermonkey.net/
// @version      2024-05-16
// @description  try to take over the world!
// @author       You
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?query_id=*
// @match        https://hgp.sandetel.es/projects/sds-hgp-01911-6/issues?per_page=*&query_id=*
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues?query_id=*
// @match        https://hgp.sandetel.es/projects/sds-hgp-01935-8/issues?per_page=*&query_id=*
// @match        https://ws148.juntadeandalucia.es/gp-sae/projects/explotacion-de-datos/issues?query_id=10296&per_page=*
// @match        https://ws148.juntadeandalucia.es/gp-sae/projects/explotacion-de-datos/issues?query_id=10296
// @grant        none
// ==/UserScript==

(function() {
    'use strict';


    var rows = document.querySelectorAll('tr');
    rows.forEach(function(row) {
        var spentHoursCell = row.querySelector('.spent_hours');
        var estimatedHoursCell = row.querySelector('.estimated_hours');
        var dateCell = row.querySelector('.cf_43.date');

        if (estimatedHoursCell && spentHoursCell) {
            var spentHours = parseFloat(spentHoursCell.innerText);
            var estimatedHours = parseFloat(estimatedHoursCell.innerText);

            if (isNaN(estimatedHours)) {
                estimatedHoursCell.innerHTML += ' 💣';
            } else if (spentHours > estimatedHours) {
                spentHoursCell.innerHTML += ' 🔴'; // Emoji de pelota roja
            } else if (spentHours / estimatedHours >= 0.8) {
                spentHoursCell.innerHTML += ' 🟡'; // Emoji de pelota amarilla
            } else {
                spentHoursCell.innerHTML += ' 🟢'; // Emoji de pelota verde
            }
        }

        if (dateCell) {
            var dateValue = new Date(dateCell.innerText);
            var now = new Date();
            var oneWeekLater = new Date();
            oneWeekLater.setDate(now.getDate() + 7);

            if (isNaN(dateValue.getTime())) {
                dateCell.innerHTML += ' 💣';
            } else if (dateValue < oneWeekLater) {
                dateCell.innerHTML += ' 🏁';
            }
        }
    });

})();