const inquirer = require('inquirer');
const generatePage = require('./src/page-template.js');
const { writeFile, copyFile } = require('./src/generate-site.js');

const promptUser = teamData => {
  console.log(`
  ============
  Team Manager
  ============
  `);
  if (!teamData.employee) {
    teamData.employee = [];
  }
  return inquirer.prompt([
    {
      type: 'list',
      name: 'roles',
      message: 'What role is the employee responsible for?',
      choices: ['Manager']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your team manager\'s name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your team manager\'s name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: 'What is your team manager\'s employee ID (Required)',
      validate: idInput => {
        if (idInput) {
          return true;
        } else {
          console.log('Please enter your team manager\'s employee ID!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your team manager\'s email? (Required)',
      validate: emailInput => {
        if (emailInput) {
          return true;
        } else {
          console.log('Please enter your team manager\'s email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'misc',
      message: 'What is your team manager\'s office number? (Required)',
      validate: officeInput => {
        if (officeInput) {
          return true;
        } else {
          console.log('Please enter your team manager\'s office number!');
          return false;
        }
      }
    }
  ])
  .then(employeeData => {
    teamData.employee.push(employeeData);
      return teamData;    
  });
};

const promptEmployee = teamData => {
  console.log(`
==================
Add a New Employee
==================
`);

  if (!teamData.employee) {
    teamData.employee = [];
  }
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'roles',
        message: 'What role is the employee responsible for?',
        choices: ['Engineer', 'Intern']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of your Employee? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('You need to enter a Employee name!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the Employee ID (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('You need to enter the employee ID!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your employee\'s email? (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your employee\'s email!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'misc',
        message: 'Enter the GitHub link or School. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a project GitHub link!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmAddemployee',
        message: 'Would you like to enter another employee?',
        default: false
      }
    ])
    .then(employeeData => {
      teamData.employee.push(employeeData);
      if (employeeData.confirmAddemployee) {
        return promptEmployee(teamData);
      } else {
        return teamData;
      }
    });
};

promptUser(promptEmployee)
  .then(promptEmployee)
  .then(teamData => {
    return generatePage(teamData);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyFile();
  })
  .then(copyFileResponse => {
    console.log(copyFileResponse);
  })
  .catch(err => {
    console.log(err);
  });