const data = require('./lib/data.js');

// data.create('users', 'petras', { name: 'Petras', age: 99 }, (state, msg) => {
//     if (state) {
//         console.log(msg);
//     } else {
//         console.error(msg);
//     }

//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });


// data.create('books', 'du-gaideliai', { text: 'Baltus zirnius kule' }, (state, msg) => {
//     console.log(state, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });


data.read('users', 'petras', (err, content) => {
    const fileData = JSON.parse(content);
    console.log(fileData.name);
    console.log(fileData.age);
})