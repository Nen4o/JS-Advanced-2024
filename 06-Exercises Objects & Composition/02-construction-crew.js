function solve(input) {

    if (!input.dizziness) {
        return input;
    }

    let requiredAmount = 0.1 * input.weight * input.experience;
    input.levelOfHydrated += requiredAmount;
    input.dizziness = false;

    return input;

}
let res = solve({
    weight: 95,

    experience: 3,

    levelOfHydrated: 0,

    dizziness: false
});

console.log(res);