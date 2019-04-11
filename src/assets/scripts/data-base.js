import transformDate from './transform-date';

const db = require('../../data/database.json');

function refreshDate() {

    for (let i = 0; i < db.length; i++) {
        const td = transformDate(db[i].date);

        db[i].date = td;
    }

    return db;
}

function sortRemoved() {
    const rd = refreshDate();
    let arr = [];

    for (let i = 0; i < rd.length; i++) {
        if (rd[i].removed != 1) {
            arr.push(rd[i]);
        }
    }
    return arr;
}

function results() {
    const sortRem = sortRemoved();
    const result = {};

    sortRem.forEach(item => {

        if (!result[item.date]) {
            result[item.date] = {
                date: item.date,
                items: {}
            }
        }

        if (!result[item.date].items[item.id]) {
            result[item.date].items[item.id] = {
                type: item.type,
                id: item.id,
                item: []
            }
        }

        result[item.date].items[item.id].item.push({
            image: item.image,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            total: (Math.round((item.price * item.quantity) * 100) / 100)
        })
    })

    return Object.keys(result).map(key => {
        result[key].items = Object.keys(result[key].items).map(key2 => result[key].items[key2])
        return result[key]
    });
}

const resultDB = results();

// for (let i = 0; i < resultDB.length; i++) {
//     const one = resultDB[i];
//     // console.log(one);
//     let sum = 0;
//     console.log(sum);

//     for (let i = 0; i < one.items.length; i++) {
//         const two = one.items[i];
//         // console.log(two);

//         for (let i = 0; i < two.item.length; i++) {
//             const three = two.item[i];
//             // console.log(three.total);
//             for (let key in three) {
//                 console.log(key);
//                 // console.log(three[key]);
//                 sum += three[key];
//             }
//         }
//     }
// }

function test() {
    const wList = document.querySelector('#whouse__list');
    
    let obj = {};
        obj.list = resultDB;

    console.log(obj);

    const template = require('../templates/whouse/whouse-item.hbs');
    const result = template(obj);

    wList.innerHTML = result;
}
test();