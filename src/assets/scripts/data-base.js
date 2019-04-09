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

// console.log(rd);


const templ = [
    {
        date: "1 Ноября",
        items: [
            {
                id: 564564867361360,
                type: "Приход",
                item: [
                    {
                        image: "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
                        name: "Молочный 200",
                        price: 180,
                        quantity: 4,
                        removed: 1
                    },
                    {
                        image: "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
                        name: "Груша 200",
                        price: 186,
                        quantity: 5,
                        removed: 1
                    }
                ]
            },
            {
                id: 564564867361361,
                type: "Расход",
                item: [
                    {
                        image: "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
                        name: "Молочный Груша",
                        price: 111,
                        quantity: 12,
                        removed: 1
                    },
                    {
                        image: "https://images.ua.prom.st/50389447_w640_h640_ncheskaya_s_grushej_200_g..jpg",
                        name: "Молочный",
                        price: 222,
                        quantity: 14,
                        removed: 0
                    }
                ]
            }
        ]
    }
]

// const wList = document.querySelector('#whouse__list');

// function test() {
//     let obj = {};
//         obj.list = rd;

//     const template = require('../templates/whouse/whouse-item.hbs');
//     const result = template(obj);

//     wList.innerHTML = result;
//     console.log(result);
// }
// test();

function sortRemoved() {
    let arr = [];

    for (let i = 0; i < rd.length; i++) {
        if (rd[i].removed != 0) {
            arr.push(rd[i]);
        }
    }
    return arr;
}

const sortRem = sortRemoved();

function results() {
    const result = {}

    sortRem.forEach(item => {

        if (!result[item.date]) {
            result[item.date] = {
                date: item.date,
                items: {},
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
                quantity: item.quantity
            })
    })

    return Object.keys(result).map(key => {
        result[key].items = Object.keys(result[key].items).map(key2 => result[key].items[key2])
        return result[key]
    });
}
results();
console.log(results());