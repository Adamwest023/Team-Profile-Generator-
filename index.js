 const inquirer = require('inquirer');
 const fs = require('fs');
 const em

 const managerInfo = () => {
     inquirer.prompt ([
         {
             type:'input',
             message:'What is your name?',
             name: 'name',
         },
         {
             type:'input',
             message:'What is your id?',
             name: 'id',
         },
         {
             type: 'input',
             message: 'What is your email?',
             name: 'email'
         },
         {
             type:'input',
             message:' What is your office phone number?',
             name: "number"
         }
     ]).then(answers => {
         console.log(answers)
     }) 
 };



 managerInfo();