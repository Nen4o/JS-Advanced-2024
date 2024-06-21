function solve(input) {

    let result = {};

    for (const line of input) {
        const [command, name, ...data] = line.split(' ');
        if (command == 'create') {
            create(name, data);
        } else if (command == 'set') {
            set(name, data);
        } else if (command == 'print') {
            print(name)
        }
    }

    function create(name, data) {
        if (data == false) {
            result[name] = [];
        } else {
            result[name] = [['isInherit', data[1]]]
        }
        //console.log(result);
    }

    function set(name, data) {
        //const [key, value] = data.slice(' ');
        result[name].push([data[0], data[1]]);
    }

    function print(name) {
        const value = result[name];
        let resArr = [];
        for (const el of value) {
            if (el.includes('isInherit')) {
                let copy = result[el[1]];
                for (const el of copy) {
                    result[name].push(el);
                }
                result[name].splice(0,1);
                //resArr.push(el.join(':'));
            }
        }
        for (const el of result[name]) {
            resArr.push(el.join(':'));
        }
        console.log(resArr.join(','));
    }
}

solve(['create pesho', 'create gosho inherit pesho', 'create stamat inherit gosho', 'set pesho rank number1', 'set gosho nick goshko', 'print stamat'])
