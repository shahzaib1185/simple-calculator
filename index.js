#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one operator to perform operations",
        type: "list",
        name: "opertor",
        choices: [
            "addition",
            "subtraction",
            "multiplication",
            "division",
            "percantage",
        ],
    },
]);
// conditional statment
if (answer.opertor === "addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opertor === "subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opertor === "multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opertor === "division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else if (answer.opertor === "percantage") {
    console.log(answer.firstNumber % answer.secondNumber);
}
else
    console.log("invalid value");
