const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

const pageTemplate = require("./src/page.template")

const employeeArr = []

const managerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is your id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type: 'input',
            message: ' What is your office phone number?',
            name: "number"
        }
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.number)
        employeeArr.push(manager)
        mainMenu()
    })
};

function mainMenu() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to add next?',
            choices: ["Engineer", "Intern", "Done Adding"]
        }
    ).then(({ choice }) => {
        if (choice == "Engineer") {
            engineerInfo()
        }
        if (choice == 'Intern') {
            internInfo()
        }
        if (choice == "Done Adding") {
            buildHtml();
        }
    })
};

const engineerInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type:'input',
            message:"what is your employee id?",
            name:"id"
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type:'input',
            message:"what is your github username?",
            name:'github'
        }
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(engineer);
        mainMenu()
    });
};

const internInfo = () => {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
        {
            type:'input',
            message:"what is your employee id?",
            name:"id"
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email'
        },
        {
            type:'input',
            message:"what school did you attend?",
            name:'school'
        }
    ]).then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(intern);
        mainMenu()
    });
};


function buildHtml() {
    fs.writeFile("employee.html", pageTemplate(employeeArr), (err) => {
        if (err) throw err;
    })
}

module.exports = { buildHtml }

managerInfo();

