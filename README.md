# E-Commerce-System-Backend
## Description
The E-Commerce application is a CLI application that helps retails companies to create, update and delete database of their inventory and be competitive in the market. 

For a full demo of the application: [Employee-Management-System](https://drive.google.com/file/d/12OrABRF4db-PyWqbZrTnihA8RzW7JsPh/view)

## Table of Contents

[Description](#description)

[Technologies-&-tools-used](#Technologies-&-tools-used)

[Installation](#Installation)

[Usage](#usage)

[How-it-Works](#How-it-Works)

[License](#License)

[Badges](#Badges)

[Contributing](#contributing)

[Tests](#tests)

[Questions](#questions)

## Technologies & tools used
1. JavaScript
2. Node.js
3. MySQL Workbench
4. Dependencies:
    1. dotenv
    2. express
    3. mysql2
    4. sequelize 

## Installation
To install the application follow the following steps:
1. Clone the repo on your local machine
2. Install the [dotenv package](https://www.npmjs.com/package/dotenv) to load environment variables from the .env file `npm install dotenv` command
3. Install the [express](https://www.npmjs.com/package/express) through `npm install express` command
4. Install the [mysql2 package](https://www.npmjs.com/package/mysql2) through `nnpm install --save mysql2` command
Install the [sequelize](https://sequelize.org/) through the command `npm install --save sequelize` command

## Usage
The E-Commerce system helps the business owner to manage their inventory through a back-end systemto be able to compete with other e-commerce companies.

## How It Works
Upon opening Visual Studio Code (VSC), right click on the `<server.js>` file and open it in the Integrated Terminal in VSC. The Applicaiton relies on a database so in order to create and see the database to invoke the solution, in the VSC integrated terminal, follow the following steps:
1. Type `mysql -u username -p`(note that the username is your own username on MySQL Workbench)
2. Enter the password when prompted to (note that the password is your password on MySQL Workbench)
3. Type `source ./db/schema.sql` to create the database
4. Type `exit`
5. Type the command `npm run seed` to seed the database

To check the database that has been created open MySQL Workbench and check the database and its associated tables for testing.


