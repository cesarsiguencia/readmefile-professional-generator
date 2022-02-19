

const fs = require('fs');
const generateReadMe = require('./src/template.js')

const inquirer = require('inquirer');  // the package that allows us to use questionaire in the terminal

const readMeContent = () => {

    return inquirer.prompt([
            {
                type:'input',
                name:'projectTitle',
                message:'What is the title of your project? (Required, No Spaces)',
                validate: titleInput => {
                    if (titleInput) {
                      return true;
                    } else {
                      console.log('Project title needed!');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'description',
                message: 'Enter a brief description of this app. (Required)',
                validate: descriptionInput => {
                    if (descriptionInput) {
                      return true;
                    } else {
                      console.log('Enter a description!');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'installation',
                message: 'Explain the installation instructions for this app. (Required)',
                validate: installationInput => {
                    if (installationInput) {
                      return true;
                    } else {
                      console.log('Enter instructions!');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'usage',
                message: 'Usage explanation (Required)',
                validate: installationInput => {
                    if (installationInput) {
                      return true;
                    } else {
                      console.log('Enter instructions!');
                      return false;
                    }
                }
            },

            {
                type: 'input',
                name: 'test',
                message: 'How do you test the app?',
                validate: testInput => {
                    if (testInput) {
                      return true;
                    } else {
                      console.log('Test needed!');
                      return false;
                    }
                }
            },

        
            {
                type: 'input',
                name: 'contribution',
                message: 'How should other developers contact you if they wish to contribute to this project?.',
                validate: contributionInput => {
                    if (contributionInput) {
                      return true;
                    } else {
                      console.log('Enter contribution!');
                      return false;
                    }
                }
            },
    
            {
                type: 'checkbox',
                name: 'licenses',
                message: 'What licenses did you use? (Check all that apply)',
                choices: ['License', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
              }
        ])
}

readMeContent()
    .then(answers => {
        console.log(answers);

        const indexContent = generateReadMe(answers);

            fs.writeFile('./README.md', indexContent, err => {
                if (err) throw new Error(err);
        
                console.log('Success!');
            });

    })
       

