#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1, //base currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.30,
    PKR: 277.54,
    KWD: 0.31,
    SAR: 3.75,
    DHs: 3.67,
    CAD: 1.36
};
let user_answer = await inquirer.prompt([
    {
        name: 'from',
        message: "enter from currency",
        type: "list",
        choices: ['PKR', 'EUR', 'GBP', 'INR', 'USD', 'DIN', 'SAR', 'DHs', `CAD`]
    },
    {
        name: 'to',
        message: "enter to currency",
        type: "list",
        choices: ['PKR', 'EUR', 'GBD', 'INR', 'USD', 'DIN', 'SAR', 'DHs', `CAD`]
    },
    {
        name: 'amount',
        message: "enter your Amount",
        type: "number",
    }
]);
let userfromCurrency = user_answer.from;
let fromAmount = currency[user_answer.from]; //exchange rate
let toAmount = currency[user_answer.to]; //exchange rate
let amount = user_answer.amount;
let baseAmmount = amount / fromAmount; //USD base currency 
let convertedAmmount = baseAmmount * toAmount;
console.log(convertedAmmount);
