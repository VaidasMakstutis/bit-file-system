/*

Failu sistemos CRUD

C - create
R - read
U - update
D - delete

*/

/**
 * Darbiniu funkciju su failu sistema objektas
 */
const data = {};

/**
 * JSON failo kurimas .data folderyje
 * @param {string} dir sub-folder esantis .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be pletinio
 * @param {Object} content JavaScript objektas pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis ar funkcija sekmingai sukure nurodyta faila
 */

data.create = (dir, fileName, content) => {
    console.log('Kuriamas failas...');
    return true;
}


/**
 * JSON failo turinio nuskaitymas
 * @param {string} dir sub-folder esantis .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be pletinio
 * @returns {Object} Isparsintas failo turinys
 */

data.read = (dir, fileName) => {
    console.log('Skaitomas failas...');
}


/**
 * JSON failo kurimas .data folderyje
 * @param {string} dir sub-folder esantis .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be pletinio
 * @param {Object} content JavaScript objektas pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis ar sekmingai atnaujintas failas
 */

data.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
    return true;
}


/**
 * JSON failo istrynimas .data folderyje
 * @param {string} dir sub-folder esantis .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be pletinio
 * @returns {boolean} Pozymis ar sekmingai istrintas failas
 */

data.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

module.exports = data;