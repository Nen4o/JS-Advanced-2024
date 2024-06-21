function solve(data, criteria) {
    const employeesList = JSON.parse(data);
    const splitCriteria = criteria.split('-');

    let index = 0;
    for (const employeeData of employeesList) {
        if (employeeData[splitCriteria[0]] == splitCriteria[1]) {
            console.log(`${index}. ${employeeData.first_name} ${employeeData.last_name} - ${employeeData.email}`);
            index++;
        }
    }
}
solve(`[{

"id": "1",

"first_name": "Kaylee",

"last_name": "Johnson",

"email": "k0@cnn.com",

"gender": "Female"

}, {

"id": "2",

"first_name": "Kizzee",

"last_name": "Johnson",

"email": "kjost1@forbes.com",

"gender": "Female"

}, {

"id": "3","first_name": "Evanne", "last_name": "Maldin", "email": "emaldin2@hostgator.com", "gender": "Male" }, { "id": "4", "first_name": "Evanne", "last_name": "Johnson", "email": "ev2@hostgator.com", "gender": "Male" }]`, 'last_name-Johnson')