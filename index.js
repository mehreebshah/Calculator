#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter your First number", type: "number", name: "firstnumber" },
    {
        message: "enter your Second number",
        type: "number",
        name: "secondnumber",
    },
    {
        message: "Select One of the Operator for perfome operation",
        type: "list",
        name: "Operator",
        choices: ["Addition", "Substraction", "Multipication", "Division"],
    },
]);
if (answer.Operator === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.Operator === "Substraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.Operator === "Multipication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.Operator === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("enter a valid number");
}
