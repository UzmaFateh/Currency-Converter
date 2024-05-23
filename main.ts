#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

const currency:any = {
    USD: 1,  //base currency
    EUR: 0.91,
    GBP: 0.79,
    INR: 74.57,
    PKR: 280,
    AED: 3.67,
    KWD: 0.31,
    JPY: 156.91

};

let user_answer = await inquirer.prompt(
    [
        {
            name: "from",
            message: chalk.green("\nEnter From Currency\n\n"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED", "KWD", "JPY"]
        },
        {
            name: "to",
            message: chalk.green("\nEnter To Currency\n\n"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "INR", "PKR", "AED", "KWD", "JPY"]
        },
        {
            name: "amount",
            message: chalk.green("\nEnter Your Amount\n\n"),
            type: "number",

        }

      


    ]
  

)


let userFromCurrency = user_answer.from
let userToCurrency = user_answer.to
let fromAmount = currency[userFromCurrency]  // exchange rate
let toAmount = currency[userToCurrency]    //exchange rate
let amount = user_answer.amount
let baseAmount =amount / fromAmount //USD base currency  
let convertedAmount = baseAmount * toAmount
console.log(convertedAmount);
