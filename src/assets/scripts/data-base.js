import transformDate from './transform-date';

const db = require('../../data/database.json');

function refreshDate() {

    for (let i = 0; i < db.length; i++) {
        const td = transformDate(db[i].date);

        db[i].date = td;
    }

    return db;
}

const rd = refreshDate();

console.log(rd);

// const templ = {
//     date: '1 Ноября',
//     id: {
//         564564867361360: {
//             type: 'Приход',
//             image: ['ссылка 1', 'ссылка 2'],
//             name: ['название 1', 'название 2'],
//             price: ['цена 1', 'цена 2'],
//             quantity: ['количество 1', 'количество 2'],
//             removed: [0, 1]
//         },
//         564564867361361: {
//             type: 'Расход',
//             image: ['ссылка 3', 'ссылка 4'],
//             name: ['название 3', 'название 4'],
//             price: ['цена 3', 'цена 4'],
//             quantity: ['количество 3', 'количество 4'],
//             removed: [1, 1]
//         }
//     }
// }

function dataBase() {
    let array = [];
    for (let i = 0; i < rd.length; i++) {

    }
}
dataBase();