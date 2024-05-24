import inquirer from "inquirer";

let c_value: {[key: string]: number} = {
    PKR: 278.4,
    AED: 3.67,
    USD: 1,
    QAR: 3.64,
    INR: 83.3649,
    KWD: 0.3088,
    EUR: 0.9382,

}

let ans = await inquirer.prompt([{
type: "list",
name: "from",
message: "Converting From",
choices: ['PKR','AED','USD','INR','QAR','KWD','EUR']
},
{
    type: "list",
    name: "to",
    message: "Converting to",
    choices: ['PKR','AED','USD','INR','QAR','KWD','EUR']
    },
{
    type: "number",
    name: "amount",
    message: "Your amount to convert",
}
])


console.log(c_value[ans.to] / c_value[ans.from] * ans.amount);