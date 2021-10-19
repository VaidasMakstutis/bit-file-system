const data = require('./lib/async-data.js');
const utils = require('./lib/utils.js');

(async () => {
    const duGaideliai = await data.read('books', 'du-gaideliai');
    console.log(duGaideliai);

    const jonas = {
        name: 'Jonas',
        age: 88,
        phone: 'Nokia 3310',
    }
    const jonasCreate = await data.create('users', 'jonas', jonas);
    console.log(jonasCreate);

    const jonasObj = await data.read('users', 'jonas');
    console.log(jonasObj);

    const klaidaObj = await data.read('users', 'klaida');
    console.log(klaidaObj);

    const jonasUpdate = await data.update('users', 'jonas', { ...jonas, city: 'Rojaus soduose' });
    console.log(jonasUpdate);

    const jonasObj2 = await data.read('users', 'jonas');
    console.log(jonasObj2);

    const jonasDelete = await data.delete('users', 'jonas');
    console.log(jonasDelete);

    const jonasObj3 = await data.read('users', 'jonas');
    console.log(jonasObj3);

    const books = await data.folderContent('books');
    console.log(books);

    const paslaptis = 'pomidoras';
    const slaptaPaslaptis = utils.hash(paslaptis);
    console.log(paslaptis);
    console.log(slaptaPaslaptis);

    console.log(utils.hash('labas'));
    console.log(utils.hash('Labas'));
    console.log(utils.hash('labs'));
    console.log(utils.hash('labas '));
    console.log(utils.hash(' labas'));
})();
