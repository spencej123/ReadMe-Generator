const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

const promtUser = () =>
  inquirer.prompt([
    {
      type: "input",
      name: "Project Title",
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
      name: "installation",
      message: "What is required for Installation?",
    },
    {
      type: "input",
      name: "license",
      message: "Which Lisence is this project under?",
    },
    {
      type: "input",
      name: "github username",
      message: "What is your github?",
    },
  ]);
