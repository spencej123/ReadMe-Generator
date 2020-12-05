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
    {
      type: "input",
      name: "contact/email",
      message: "How can you be contacted?",
    },
  ]);

const generateHTML = (answers) =>
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Project Title</h1>
    <p></p>

    <hr />

    <h2>Description</h2>
    <p></p>

    <hr />

    <h2>Usage</h2>
    <p></p>

    <hr />

    <h2>Installation</h2>
    <p></p>

    <hr />

    <h2>Lisence</h2>
    <p></p>

    <hr />

    <h2>GitHub</h2>
    <p></p>

    <h2>Contact</h2>
    <p></p>
  </body>
</html>`;
promtUser()
  .then((answers) => writeFileAsync("index.html", generateHTML(answers)))
  .then(() => console.log("index.html written"))
  .catch((err) => console.log(err));
