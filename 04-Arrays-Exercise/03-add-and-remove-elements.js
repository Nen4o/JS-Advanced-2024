function solve(array) {
    /**
     Write a JS function that adds and removes numbers to/from an array.
     You will receive a command which can either be "add" or "remove".
     The initial number is 1.
     Upon receiving an "add" command you should add the current number to your array.
     Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
     Each input command should increase that number, regardless of what it is.
    */

    let result = [];

    array.forEach((element, index) => {
        switch (element) {
            case 'add':
                result.push(index + 1);
                break;
            case 'remove':
                result.pop(index)
                break;
        }
    });

    if (result.length == 0) {
        console.log('Empty');
    } else {
        console.log(result.join('\n'));
    }

}
solve(['add',

    'add',

    'add',

    'add']);

solve(['add', 'add', 'remove', 'add', 'add']);
solve(['remove', 'remove', 'remove'])