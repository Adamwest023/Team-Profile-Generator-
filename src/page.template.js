// create manager section
const generateManager = managerText => {
    //return formatted html
    return `
     this is manager HTML
    `;
};


const generateIntern = internText => {
    if (!internText) {
        return '';
    }
    return `
    this is intern text
    `;
};


const generateEngineer = engineerText => {
    if (!engineerText) {
        return '';
    }
    return `

    this is engineer text text
    `;
};

function pageTemplate(arr) {
    let htmltemp = ``
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].getRole() === "Manager") {
            htmltemp += generateManager()
        }
        if (arr[i].getRole() === "Engineer") {
            htmltemp += generateEngineer()
        }
        if (arr[i].getRole() === "Intern") {
            htmltemp += generateIntern()
        }
    }
    console.log(arr)
    console.log(arr[3].getRole())
    return htmltemp
}

module.exports = pageTemplate;