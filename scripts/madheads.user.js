// ==UserScript==
// @name         Madheads Coffee Filter
// @namespace    https://github.com/kristobaljunta/userscripts
// @version      0.1
// @description  Filter MadHeads coffee based on roast type
// @author       KristobalJunta
// @match        https://madheadscoffee.com/product-category/coffee/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=madheadscoffee.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const VALUE_ALL = 'Усі'
    const VALUE_ESPRESSO = 'Еспресо'
    const VALUE_FILTER = 'Фільтр'

    const prodsSelector = '.products > li'
    const roastSelector = '[name="attribute_obsmazhuvannya"]'

    let selectEl = document.createElement('select')
    for (let opt of [VALUE_ALL, VALUE_ESPRESSO, VALUE_FILTER]) {
        let optionEl = document.createElement('option')
        optionEl.value = opt
        optionEl.text = opt
        selectEl.appendChild(optionEl)
    }

    document.querySelector('h1.page-title').appendChild(selectEl)

    selectEl.addEventListener('change', e => {
        for (let prod of document.querySelectorAll(prodsSelector)) {
            if (selectEl.value == VALUE_ALL) {
                prod.style.display = ''
                continue
            }

            let roastSelect = prod.querySelector(roastSelector)
            if (Array.from(roastSelect.options).map(opt => opt.value).includes(e.target.value)) {
                roastSelect.value = e.target.value
                prod.style.display = ''
            } else {
                prod.style.display = 'none'
            }
        }
    })

})();