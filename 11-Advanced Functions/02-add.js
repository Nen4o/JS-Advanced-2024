function solution(num) {

    return function sumNum(sumNum) {
        return num + sumNum;
    }
    
}

let add7 = solution(7);

console.log(add7(2));

console.log(add7(3));