function solution() {
    let microelementStock = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    }

    const libraryOfRecipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        },
    }

    return function (input) {
        let [command, value, quantity] = input.split(' ');

        if (command == 'restock') {
            microelementStock[value] += Number(quantity);
            return 'Success';
        } else if (command == 'prepare') {
            let microelementNeeded = libraryOfRecipes[value];
            for (const key in microelementNeeded) {
                let microelementForAll = microelementNeeded[key] * Number(quantity);
                if (microelementStock[key] < microelementForAll) {
                    return `Error: not enough ${key} in stock`
                }
                microelementStock[key] -= microelementForAll;
            }
            return 'Success';

        } else if (command == 'report') {
            let resultArray = [];
            for (const key in microelementStock) {
                resultArray.push(`${key}=${microelementStock[key]}`);
            }
            return resultArray.join(' ');
        }

    }
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report")); 