const fs = require('fs');
const path = require('path');
console.log(fs);

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
data.baseDir = path.join(__dirname, '../.data/');

/**
 * Absoliutaus kelio konstravimas iki nurodyto failo esancio .data folderyje
 @param {string} dir sub-folder esantis .data folderyje
 @param {string} file Kuriamo failo pavadinimas be pletinio
 @returns {string} Absoliutus kelias iki failo
 */

function fullPath(dir, file) {
    return `${data.baseDir}${dir}/${file}.json`;
}

/**
 * JSON failo kurimas .data folderyje
 * @param {string} dir sub-folder esantis .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be pletinio
 * @param {Object} content JavaScript objektas pvz.: `{name: "Marsietis"}`.
 * @returns {boolean} Pozymis ar funkcija sekmingai sukure nurodyta faila
 */

data.create = (dir, fileName, content, callback) => {

    //open - sukuriame faila ir gauname prieiga prie jo
    //writeFile - irasome turini
    //close - uzbaigiame darba su failu ir atlaisviname prieiga prie jo

    fs.open(fullPath(dir, fileName), 'wx', (err, fileDescriptor) => {
        if (err || !fileDescriptor) {
            return callback('Ivyko klaida bandant sukurti faila ir prieiga');
        }

        const stringContent = JSON.stringify(content);
        fs.writeFile(fileDescriptor, stringContent, (err) => {
            if (err) {
                return callback(false, 'Ivyko klaida bandant irasyti turini i faila');
            }

            fs.close(fileDescriptor, (err) => {
                if (err) {
                    return callback(false, 'Nepavyko uzdaryti/atlaisvinti failo');
                }
                return callback(true, 'Failas sekmingai sukurtas');
            })
        })
    })
}


/**
 * JSON failo turinio nuskaitymas
 * @param {string} dir sub-folder esantis .data folderyje
 * @param {string} fileName Kuriamo failo pavadinimas be pletinio
 * @returns {Object} Isparsintas failo turinys
 */

data.read = (dir, fileName, callback) => {
    fs.readFile(fullPath(dir, fileName), 'utf8', (err, fileContent) => {
        if(err) {
            return callback(true, 'Nepavyko nuskaityti failo turinio');
        }
        return callback(false, fileContent);
    })
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