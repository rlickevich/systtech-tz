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

function test() {
    const wList = document.querySelector('#whouse__list');
    const resultDB = results();
    let obj = {};
        obj.list = resultDB;

    console.log(obj);

    const template = require('../templates/whouse/whouse-item.hbs');
    const result = template(obj);

    wList.innerHTML = result;
}
test();