const fs = require('fs');
const { resolve } = require('path');



// create manager section
const generateManager = manager => {
    //return formatted html
    let managerTemp = ``
    for (var i = 0; i < manager.length; i++) {
        if(manager[i].getRole() == "Manager"){

            managerTemp +=`
            <div class= "card">
            <div class="card-header">
                <h2>${manager[i].name}</h2>
                <i class="fa-solid fa-mug-hot"></i>
                <p>Manager:</p>
                </div>
                <div class="card-body">
                <div>
                <p>ID: ${manager[i].id}</p>
                </div>
                <div>
                    <p>Email: ${manager[i].email}</p>
                    </div>
                    <div>
                    <p>Office Number: ${manager[i].officeNumber}</p>
                    </div>
                    </div> 
                    </div>
                    `;
                }
    };
    return managerTemp
};

// create intern html section
const generateIntern = arr => {
    let internTemp = ''
    for (var i = 0; i < arr.length; i++){
        if(arr[i].getRole() == "Intern"){
            internTemp = `<div class= "card">
            <div class="card-header">
                <h2>${arr[i].name}</h2>
                <i class="fa-solid fa-glasses"></i>
                <p>Intern</p>
            </div>
            <div class="card-body">
                <div>
                    <p>ID: ${arr[i].id}</p>
                </div>
                <div>
                    <p>Email: ${arr[i].email}</p>
                </div>
                <div>
                    <p>School: ${arr[i].school}</p>
                </div>
            </div> 
        </div>
        `;
        }
    }
    return internTemp;
};

// create engineer html section
const generateEngineer = arr => {
    let engineerTemp = ''
    for (var i = 0; i < arr.length; i++){
        if(arr[i].getRole() == "Engineer"){
            engineerTemp = `<div class= "card">
            <div class="card-header">
                <h2>${arr[i].name}</h2>
                <i class="fa-solid fa-glasses"></i>
                <p>Engineer</p>
            </div>
            <div class="card-body">
                <div>
                    <p>ID: ${arr[i].id}</p>
                </div>
                <div>
                    <p>Email: ${arr[i].email}</p>
                </div>
                <div>
                    <p>Github: ${arr[i].github}</p>
                </div>
            </div> 
        </div>`;
        }
    }

    return engineerTemp;

};

//create pageTemplate
function pageTemplate(employeeArr) {
    console.log(employeeArr)
    let htmltemp = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="src/style.css">
        <title>Team Portfolio</title>
    </head>

    <body>
        <header> 
            <div class= ' container flex-row justify-space-between align-center py-3'>
                <h1 class=" page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
        <main class="container my-5">
        ${generateManager(employeeArr)}
        ${generateEngineer(employeeArr)}
        ${generateIntern(employeeArr)}
        </main>
        <footer class="container text-center py-3">
            <p>Created by Adam</p>
        </footer>
    </body>
    </html>
    `
    // console.log(arr);
    // console.log(arr[3].getRole());
    return htmltemp;
};

module.exports = pageTemplate;