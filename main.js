#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\WellCome To CodeWithNoor -CLI Number Guessing Game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: " Enter your guessed number(number list from 1 to 5):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! You guessed the correct number.");
}
else {
    console.log("Sorry, You guessed the wrong number.");
}
