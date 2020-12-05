const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promtUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "Title",
      message: "What is the name of the project?",
    },
    {
      type: "input",
      name: "Description",
      message: "Describe this project?",
    },
    {
      type: "input",
      name: "Usage",
      message: "What is this project used for?",
    },
    {
      type: "input",
      name: "Installation",
      message: "What is required for Installation?",
    },
    {
      type: "input",
      name: "License",
      message: "Which Lisence is this project under?",
    },
    {
      type: "input",
      name: "Github",
      message: "What is your github?",
    },
    {
      type: "input",
      name: "Contact",
      message: "How can you be contacted?",
    },
  ]);

const generateREADME = (answers) =>
  ` 
    # Project Title
    ${answers.Title}

    # Description
    ${answers.Description}

    # Usage
    ${answers.Usage}

    ##Installation
    ${answers.Installation}

    # Lisence
    ${answers.Lisence}

    # GitHub
    ${answers.Github}

    # Contact
    ${answers.Contact}
  `;
promtUser()
  .then((answers) => writeFileAsync("README.md", generateREADME(answers)))
  .then(() => console.log("README written"))
  .catch((err) => console.log(err));
