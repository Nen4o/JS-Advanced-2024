function area() {
    return Math.abs(this.x * this.y);
}
function vol() {
    return Math.abs(this.x * this.y * this.z);
}
function solve(area, vol, input) {
    let data = JSON.parse(input);
    let result = [];
    for (const line of data) {
        let calkArea = area.bind(line);
        let calkVol = vol.bind(line);
        result.push({
            area: calkArea(),
            volume: calkVol(),
        })
    }
    return result;
}

solve(area, vol, `[ {"x":"1","y":"2","z":"10"}, {"x":"7","y":"7","z":"10"}, {"x":"5","y":"2","z":"10"} ]`);