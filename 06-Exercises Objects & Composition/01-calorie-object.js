function solve(input){
    let result = {};

    for (let i = 0; i < input.length; i += 2){
        let key = input[i];
        let value = Number(input[i + 1]);

        result[key] = value;
    }
    console.log(result);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);