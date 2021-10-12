/*

Failu sistemos CRUD

C - create
R - read
U - update
D - delete

*/

const data = {};

data.create = (dir, fileName, content) => {
    console.log('Kuriamas failas...');
}

data.read = (dir, fileName) => {
    console.log('Skaitomas failas...');
}

data.update = (dir, fileName, content) => {
    console.log('Atnaujinamas failas...');
}

data.delete = (dir, fileName) => {
    console.log('Trinamas failas...');
}

module.exports = data;