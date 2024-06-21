function solve(input) {

    let result = {};
    result['model'] = input.model;

    if (input.power <= 90) {
        result['engine'] = { power: 90, volume: 1800 };
    } else if (input.power <= 120) {
        result['engine'] = { power: 120, volume: 2400 };
    } else {
        result['engine'] = { power: 200, volume: 3500 };
    }

    result['carriage'] = { type: input.carriage, color: input.color }

    input.wheelsize % 2 == 0 ? input.wheelsize-- : input.wheelsize;

    let wheels = new Array(4).fill(input.wheelsize);
    result['wheels'] = wheels;

    return result;
}
solve({
    model: 'Opel Vectra',

    power: 110,

    color: 'grey',

    carriage: 'coupe',

    wheelsize: 17
})