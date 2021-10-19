const data = require('./lib/async-data.js');

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
})();

