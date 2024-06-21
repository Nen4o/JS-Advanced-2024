function solve(n, k) {
    /**
    You are given two integers n and k. Write a JS function that generates and return the following sequence:
    · The first element is 1
    · Every following element equals the sum of the previous k elements
    · The length of the sequence is n elements
    */
    let result = [1];
    let sum;

    for (let i = 1; i < n; i++) {
        sum = 0;

        let reversedArray = result.reverse();
        let cut = reversedArray.slice(0, k);
        result.reverse();

        for (const el of cut) {
            sum += el;
        }
        result.push(sum);
    }
    return result;

}
solve(6, 3)
solve(8, 2);