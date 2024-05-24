import inquirer from "inquirer"

let myBalance = 0;
let isContinue = true;
const pinCode = 1234;

const messag = "Welcome to ATM";
console.log(messag);

let pin_ans = await inquirer.prompt({
    type: "number",
    name: "ans",
    message: "Please enter pin code: "
})



if(pin_ans.ans === 1234){
    do {
        let ans= await inquirer.prompt({
            type: "list",
            name: "list",
            message: "Select any option",
            choices: ["Deposite", "withdraw", "fast cash", "balance check"]
        })
        
        // ------------------------------ Depostie ----------------------------------
        if(ans.list === "Deposite"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "Deposite_Amount",
                message: "Please Enter your Amount: "
            })
    
            if(ans.Deposite_Amount > 0){
                myBalance = myBalance + ans.Deposite_Amount
                console.log(myBalance)
            }
        }
        
        // ---------------------------------- Withdraw ------------------------------------
        else if(ans.list === "withdraw"){
            let ans = await inquirer.prompt({
                type: "number",
                name: "withdraw_amount",
                message: "Please enter Amount"
    
            })
    
            if(ans.withdraw_amount <= myBalance){
                myBalance = myBalance - ans.withdraw_amount
                console.log(myBalance);
            }else{
                console.log("Not enough Money");
            }
        }
    
        // ------------------------------ Fast Cash -------------------------------
        else if(ans.list === "fast cash"){
            let ans = await inquirer.prompt({
                type: "list",
                name: "fast_cash",
                message: "Please select one",
                choices: ["500", "1000", "5000"]
            })
            
            if(ans.fast_cash <= myBalance){
                if(ans.fast_cash === "500"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
    
                }else if(ans.fast_cash === "1000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
    
                }else if(ans.fast_cash === "5000"){
                    myBalance -= ans.fast_cash
                    console.log(myBalance);
                }
            }
    
        }
    
        // ----------------------------------- check balance -----------------------------------
        else if(ans.list === "balace check"){
            console.log(`your balance is: ${myBalance}`);
    
        }
    
        // --------------------------------- while condition ------------------------------
        let while_ans = await inquirer.prompt({
            type: "confirm",
            name: "condition",
            message: "Do you want to continue: "
        })
    
        if(while_ans.condition === false){
            isContinue = false
        }
    
    } while (isContinue);
}
else {
    console.log("Invalid PIN");
}

