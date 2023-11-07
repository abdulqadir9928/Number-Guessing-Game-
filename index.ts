import chalk from "chalk";
import inquirer from "inquirer";

let genNumber = Math.floor(Math.random()*2);

let user = await inquirer.prompt({
    name: 'number1',
    type: 'list',
    message: 'Choose a number',
    choices: ["0", "1"]
})

if (genNumber == parseInt(user.number1)) {
    console.log(chalk.bold.blueBright("Congratulations You Won!"));
}

else {
    console.log(chalk.bold.redBright("You Lost!"));
}


