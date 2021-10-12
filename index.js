const data = require('./lib/data.js');

data.create('users', 'petras', { name: 'Petras', age: 99 }, (state, msg) => {
    if (state) {
        console.log(msg);
    } else {
        console.error(msg);
    }

    console.log('Sekantys zingsniai po bandymo sukurti faila....');
});