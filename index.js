// Let's require Inquirer and File System module
const inquirer = require('inquirer');
const fs = require('fs');

const { Circle } = require('./lib/Circle');
const { Triangle } = require('./lib/Triangle');
const { Square } = require('./lib/Square');

// Questions that inquirer will ask the user
const questions = [
    {
        type: 'input',
        message: 'Input the logo\'s text. Only up to 3 characters are allowed (Extra letters will be removed! CaSiNg mAtTeRs!): ',
        name: 'text'
    },
    {
        type: 'input',
        message: 'Input the logo\'s text-color keyword OR hexadecimal value (e.g 0055AA): ',
        name: 'color'
    },
    {
        type: 'list',
        message: 'Select a shape from the list below for the logo\'s background: ',
        name: 'backgroundShape',
        choices: [
            'Circle',
            'Triangle',
            'Square'
          ]
    },
    {
        type: 'input',
        message: 'Input the logo\'s background-color keyword OR hexadecimal value (e.g 0055AA): ',
        name: 'backgroundColor'
    }
];

// Function for creating SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.log(`Oh no. An error has occured! Here is the error report: \n${error}`) : console.log('Generated logo.svg\nBe sure to open the file for any further color changes. If so, help can be found with a Google search for \"CSS Colors\"!'));
}

// This function will just start everything
function init() {
    inquirer
        .prompt(questions)
    .then((responses) => {
        console.log(responses);
        let svgWidth = 300;
        let svgHeight = 200;

        let svgText = responses.text;
        if (responses.text.length > 3) {
            svgText = svgText.substr(0,3);
        }

        switch(responses.backgroundShape) {
            case 'Circle':
                var svgShape = new Circle();
                break;
            case 'Triangle':
                var svgShape = new Triangle();
                break;
            case 'Square':
                var svgShape = new Square();
                break;
            default:    
                var svgShape = "";
        }
        svgShape.setColor(responses.backgroundColor);

        let svgData = `
<svg version="1.1"
width="${svgWidth}" height="${svgHeight}"
xmlns="http://www.w3.org/2000/svg">
   
<rect width="100%" height="100%" fill="white" />
   
${svgShape.render()}
   
<text x="150" y="100" font-size="50" text-anchor="middle" fill="${responses.color}">${svgText}</text>
</svg>`
        //writeToFile(`./examples/${svgText}-${responses.color}.svg`, svgData);
        writeToFile(`./examples/logo.svg`, svgData);
    })
}

init();