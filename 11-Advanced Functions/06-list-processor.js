function solve(input) {
    let result = [];

    for (const line of input) {
        const [command, string] = line.split(' ');

        if (command == 'add') {
            add(string);
        } else if (command == 'remove') {
            remove(string)
        } else if (command == 'print') {
            print();
        }
    }

    function add(string) {
        return result.push(string);
    }
    function remove(string) {
        for (let i = 0; i < result.length; i++) {
            if (result[i] == string) {
                result.splice(i, 1);
            }
        }
    }
    function print() {
        console.log(result.join(','));
    }
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])