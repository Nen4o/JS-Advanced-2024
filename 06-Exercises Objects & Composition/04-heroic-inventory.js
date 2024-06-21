function solve(input) {
    let herosArray = [];

    for (const lineElement of input) {
        let [name, level, items] = lineElement.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        // items = items.split(', ');
        let heroData = {
            name,
            level,
            items
        };
        herosArray.push(heroData);
    }
    return JSON.stringify(herosArray);

}
let res = solve(['Jake / 1000 / Gauss, HolidayGrenade']);
console.log(res);