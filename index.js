const data = require('./lib/data.js');


// data.create('books', 'du-gaideliai', { text: 'Baltus zirnius kule' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// data.create('books', 'anyksciu-silelis', { text: 'Zibintai zibinteliai' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// data.create('books', 'dievu-miskas', { text: 'Amen' }, (err, msg) => {
//     console.log(err, msg);
//     console.log('Sekantys zingsniai po bandymo sukurti faila....');
// });

// const initialDataPetras = { name: 'Petras', age: 99 };
// data.create('users', 'petras', initialDataPetras, (err, msg) => {
//     console.log('CREATE 1:', err, msg);

//     // pirminis perskaitymas
//     data.read('users', 'petras', (err, content) => {
//         const fileData = JSON.parse(content);
//         console.log('READ 1:', fileData);

//         // prie Petro objekto prideti megsta spalva: red
//         data.update('users', 'petras', { ...initialDataPetras, favoriteColor: 'red' }, (err, msg) => {
//             console.log('UPDATE 1:', err, msg);

//             // dar karta perskaitom
//             data.read('users', 'petras', (err, content) => {
//                 const fileData = JSON.parse(content);
//                 console.log('READ 2:', fileData);

//                 data.delete('users', 'petras', (err, msg) => {
//                     console.log('DELETE 1:', err, msg);
//                 })
//             })
//         })
//     })
// });

// data.folderContent('books', (err, content) => {
//     console.log(err);
//     console.log(content);
//     if (!err) {
//         // eiti per failu sarasa ir kiekviena ju perskaityti
//         for (const book of content) {
//             data.read('books', book, (err, bookContent) => {
//                 console.log(err, bookContent);
//             })
//         }
//     }
// });

// const pirmasKioskas = {
//     name: 'Pirmas kioskas',
//     size: 20,
//     price: 5000
// }
// data.appendToArray('shop', 'kioskas', pirmasKioskas, (err, content) => {
//     // tikimasi, jog sekmes atveju, grazinamas turinys
//     // bus atnaujinta failo turinio versija
//     // turesim matyti:
//     // [{"name":"Pirmas kioskas","size":20,"price":5000}]
//     console.log(err, content);

//     const antrasKioskas = {
//         name: 'Antras kioskas',
//         size: 15,
//         price: 4000
//     }
//     data.appendToArray('shop', 'kioskas', antrasKioskas, (err, content) => {
//         // tikimasi, jog sekmes atveju, grazinamas turinys
//         // bus atnaujinta failo turinio versija
//         // turesim matyti:
//         // [{"name":"Pirmas kioskas","size":20,"price":5000},{"name":"Antras kioskas","size":15,"price":4000}]
//         console.log(err, content);
//     })
// })

data.updateArrayValue('shop', 'kioskas', 2, 'name', 'Trecias kioskas', (err, msg) => {
    console.log(err, msg);

    data.updateArrayValue('shop', 'kioskas', 3, 'name', 'Ketvirtas kioskas', (err, msg) => {
        console.log(err, msg);

        data.updateArrayValue('shop', 'kioskas', 0, 'size', 50, (err, msg) => {
            console.log(err, msg);

            data.updateArrayValue('shop', 'kioskas', 0, 'color', 'golden', (err, msg) => {
                console.log(err, msg);
            })
        })
    })
})