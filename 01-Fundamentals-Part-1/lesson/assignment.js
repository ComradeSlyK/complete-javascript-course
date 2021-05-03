console.log("assignment.js")

const country = 'Italy';
const continent = 'Europe';
let population = 70 * (10 ** 6);  // This might change in near future
const isIsland = false;
const language = 'Italian';

console.log(`Country: ${country} (${typeof country})`);
console.log(`Continent: ${continent} (${typeof continent})`);
console.log(`Population: ${population} (${typeof population})`);
console.log(`Is island: ${isIsland} (${typeof isIsland})`);
console.log(`Language: ${language} (${typeof language})`);

let halfPopulation = population / 2;
console.log(`Half population: ${population}`);

population++;
console.log(`Population: ${population}`);
population--;

const finlandPopulation = 6 * (10 ** 6);
console.log(`${country} has more people than Finland: ${population > finlandPopulation}`);

const avgPopulation = 33 * (10 ** 6);
console.log(`${country} is more populated than the average: ${population > avgPopulation}`);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}`
console.log(description)
