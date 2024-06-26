function cityTaxes(name, population, treasury) {
    let cityObject = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor((this.population * percentage) / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(treasury * (percentage / 100));
        }
    }

    return cityObject;
}
const city =

    cityTaxes('Tortuga',

        7000,

        15000);

city.collectTaxes();

console.log(city.treasury);

city.applyGrowth(5);

console.log(city.population);