const fs = require('fs');

let inputFiles = [
    'input/a_example.in',
    'input/b_little_bit_of_everything.in',
    'input/c_many_ingredients.in',
    'input/d_many_pizzas.in',
    'input/e_many_teams.in',
];
let outputFiles = [
    'output/a_example.out',
    'output/b_little_bit_of_everything.out',
    'output/c_many_ingredients.out',
    'output/d_many_pizzas.out',
    'output/e_many_teams.out',
];

let numberOfPizzas = 0;
let pizzas = [];
let teams = { 2 : 0, 3 : 0, 4 : 0 };
let score = 0;

// get pizza with the least overlapping ingredients to add to the current order
const getNextPizza = (ingredients) => {
    // find a pizza with the least amount of overlap in ingredients
    let uniqueIngredients = new Set(ingredients);
    let maxIngredients = 0;
    let nextPizzaIndex = -1;
    let currentIngredients = [];
    let allIngredients = [];
    let allUniqueIngredients = new Set();
    for (let i = 0; i < pizzas.length; i++) {
        currentIngredients = [...pizzas[i]];
        currentIngredients.shift();
        currentIngredients.shift();
        // if we have fewer ingredients on our pizzas to reach maxIngredients
        if (maxIngredients - uniqueIngredients.size > currentIngredients.length) {
            continue;
        }
        allIngredients = [...ingredients];
        allIngredients.push(...currentIngredients);
        allUniqueIngredients = new Set(allIngredients);
        if (allUniqueIngredients.size >= maxIngredients) {
            maxIngredients = allUniqueIngredients.size;
            nextPizzaIndex = i;
        }
    }
    return pizzas.splice(nextPizzaIndex, 1)[0];
}

// get pizzas for a team
const getPizzas = (teamSize) => {
    let ingredients = [];
    let currentOrder = [];
    let pizza = [];
    let pizzaIngredients = [];
    for (let i = 0; i < teamSize; i++) {
        pizza = getNextPizza(ingredients);
        currentOrder.push(pizza.shift());
        pizza.shift();
        ingredients.push(...pizza);
    }
    //add our score of we have completed an order
    let uniqueIngredients = new Set(ingredients);
    score += uniqueIngredients.size ** 2;
    currentOrder.unshift(teamSize);
    return currentOrder.join(' ');
}

const main = () => {

    // loop through our input files to make our submissions
    for (let f = 0; f < inputFiles.length; f++) {

        let submission = [];
        score = 0;

        console.log('\n--- Input File: ' + inputFiles[f] + ' ---\n');

        // read the data from the text file
        const data = fs.readFileSync(inputFiles[f], 'utf8');
        const lines = data.split(/\r?\n/);
        let  columns = [];

        // save number of teams
        const header = lines[0].split(' ');
        numberOfPizzas = header[0];
        teams[2] = header[1];
        teams[3] = header[2];
        teams[4] = header[3];

        // save data for pizzas
        pizzas = [];
        for (let i = 1; i < lines.length - 1; i++) {
            columns = lines[i].split(' ');
            columns.unshift(i - 1);
            pizzas.push(columns);
        }

        // sort the pizzas by number of ingredients
        pizzas.sort((a, b) => {
            if (a[1] === b[1]) return 0;
            else return (a[1] > b[1]) ? -1 : 1;
        });

        // make our submissions based on team sizes
        let totalTeams = [4, 3, 2];
        for (let i = 0; i < totalTeams.length; i++) {
            let teamSize = totalTeams[i];
            let numberOfTeams = Math.min(Math.floor(numberOfPizzas / teamSize), teams[teamSize]);
            console.log('we can use ' +  numberOfTeams + ' team(s) of ' + teamSize);
            for (let j = 0; j < numberOfTeams && numberOfPizzas >= teamSize; j++) {
                submission.push(getPizzas(teamSize));
                numberOfPizzas -= teamSize;
            }
        }

        // add number of teams to submission
        submission.unshift(submission.length);

        // show our submission file
        console.log('\n--- Submission (' + score + ') ---\n');
        console.log(submission);

        // write our submission file
        fs.writeFileSync(outputFiles[f], submission.join('\r\n'));

    }

}

main();