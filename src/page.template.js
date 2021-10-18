const fs = require('fs');
const { resolve } = require('path');



// create manager section
const generateManager = manager => {
    //return formatted html
    return `
     <div class= "card">
        <div class="card-header">
            <h2>${this.name}</h2>
            <i class="fa-solid fa-mug-hot"></i>
            <p>Manager</p>
        </div>
        <div class="card-body">
            <div>
                <p>ID:${this.id}</p>
            </div>
            <div>
                <p>Email:${this.email}</p>
            </div>
            <div>
                <p>Office Number:${this.number}</p>
            </div>
        </div> 
     </div>
    `;
};

// create intern html section
const generateIntern = intern => {
    if (!intern) {
        return '';
    }
    return `
    <div class= "card">
        <div class="card-header">
            <h2>${this.name}</h2>
            <i class="fa-solid fa-user-graduate"></i>
            <p>Intern</p>
        </div>
        <div class="card-body">
            <div>
                <p>ID:${this.id}</p>
            </div>
            <div>
                <p>Email:${this.email}</p>
            </div>
            <div>
                <p>School:${this.school}</p>
            </div>
        </div> 
    </div>
    `;
};

// create engineer html section
const generateEngineer = engineer => {
    if (!engineer) {
        return '';
    }
    return `
    <div class= "card">
        <div class="card-header">
            h2>${this.name}</h2>
            <i class="fa-solid fa-glasses"></i>
            <p>Engineer</p>
        </div>
        <div class="card-body">
            <div>
                <p>ID:${this.id}</p>
            </div>
            <div>
                <p>Email:${this.email}</p>
            </div>
            <div>
                <p>GitHub:${this.github}</p>
            </div>
        </div> 
    </div>
    `;

};

//create pageTemplate
function pageTemplate(employeeArr) {
    let htmltemp = `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Team Portfolio</title>
    </head>

    <body>
        <header> 
            <div class= ' container flex-row justify-space-between align-center py-3'>
                <h1 class=" page-title text-secondary bg-dark py-2 px-3">My Team</h1>
            </div>
        </header>
        <main class="container my-5">
        ${generateManager()}
        ${generateEngineer()}
        ${generateIntern()}
        </main>
        <footer class="container text-center py-3">
            <p>Created by Adam</p>
        </footer>
    </body>
    </html>
    `
    for (var i = 0; i < employeeArr.length; i++) {
        if (employeeArr[i].getRole() === "Manager") {
            htmltemp += generateManager()
        }
        if (employeeArr[i].getRole() === "Engineer") {
            htmltemp += generateEngineer()
        }
        if (employeeArr[i].getRole() === "Intern") {
            htmltemp += generateIntern()
        }
    };
    // console.log(arr);
    // console.log(arr[3].getRole());
    return htmltemp;
};

module.exports = pageTemplate;