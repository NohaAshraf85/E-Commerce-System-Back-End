# E-Commerce-System-Backend
## Description
The E-Commerce application is a CLI application that helps online retails companies to create, update and delete database of their inventory and be competitive in the market. 

For a full demo of the application: [E-Commerce Back-End System](https://drive.google.com/file/d/1ZQTasIiX3VVxoBg3gymtuy4YHCeta4NF/view)

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
    * dotenv
    * express
    * mysql2
    * sequelize 

## Installation
To install the application follow the following steps:
1. Clone the repo on your local machine
2. Install the [dotenv package](https://www.npmjs.com/package/dotenv) to load environment variables from the .env file `npm install dotenv` command
3. Install the [express](https://www.npmjs.com/package/express) through `npm install express` command
4. Install the [mysql2 package](https://www.npmjs.com/package/mysql2) through `nnpm install --save mysql2` command
5. Install the [sequelize](https://sequelize.org/) through the command `npm install --save sequelize` command

## Usage
The E-Commerce system helps the business owner to manage their inventory through a back-end system to be able to compete with other e-commerce companies.

## How It Works
Upon opening Visual Studio Code (VSC), right click on the `<server.js>` file and open it in the Integrated Terminal in VSC. The Applicaiton relies on a database so in order to create and see the database. To invoke the solution, in the VSC integrated terminal, follow the following steps:
1. Type `mysql -u username -p` (note that the username is your own username on MySQL Workbench)
2. Enter the password when prompted (note that the password is your password on MySQL Workbench)
3. Type `source ./db/schema.sql` to create the database
4. Type `exit`
5. Type the command `npm run seed` to seed the database

To check the database that has been created open MySQL Workbench and check the database and its associated tables for testing.

The above steps are illustrated below:

![Demo](./assets/start.gif)

[Video Demo of how to create the database and seed it](https://drive.google.com/file/d/1oi5evi56O8dKTofxzmg4ShTG0d8kZZ36/view)

Once the Database is created and all the tables of the database are seeded with the columns and rows required, we can turn our attention to the capability that provides the user with the ability to add, update and delete items in the database usign Command Lines. The following sections provides more information about the routes in the solution and how to test them.

### Categories
A Category in the applicaiton has many Products and to test it you need to find the correct routes under the `<routes>` folder in the `<category-routes.js>` file.

The Category-routes file includes routes that provides the user with the ability to:

Action | Rout/path | Method on Insomnia | Notes
---------|-----------|--------------------|------
Get All | http://localhost:3001/api/categories/| GET | 
Get category by id | http://localhost:3001/api/categories/1| GET | change the number 1 in the rout/path to another id based on the category id you wish to view
Create a new category | http://localhost:3001/api/categories/| POST | The format of the category to be added should follow this example format {"category_name": "Basketball"}
Update category | http://localhost:3001/api/categories/6 | PUT | Udating a category uses the category id, to update a category you should add the category id to the rout/path and then provide the update you need, it should follow the following this example format {"category_name": "Piano"}
Delete category | http://localhost:3001/api/categories/6 | DELETE | Deleting a category uses the category id, so to delete one you need to add the category id to the rout/path


![Demo](./assets/category.gif)

[Video Demo of how to test the routes for the category](https://drive.google.com/file/d/1Mqr3PZ8iaSQ9o42ReBQEc8-kMEyTZWVO/view)

### Products
A Product in the application belongs to a Category and a Category has many Product models. A Product also belongs to many Tag models.

To test and use the Procuct routes you need to find the correct routes under the `<routes>` folder in the `<product-routes.js>` file.

Action | Rout/path | Method on Insomnia | Notes
---------|-----------|--------------------|------
Get All  | http://localhost:3001/api/products/ | GET |
Get all by id | http://localhost:3001/api/products/1 | GET | change the number 1 in the rout/path to another id based on the product id you wish to view
Create a new Product | http://localhost:3001/api/products/ | POST | The format of the object to be added should follow the following {product_name: "Basketball", price: 200.00, stock: 3, tagIds: [1, 2, 3, 4]} 
Update Product | http://localhost:3001/api/products/6 | PUT | To update a product add the id number of the product you want to update to the path and type the updates in the following format {product_name: "Basketball", price: 200.00, stock: 3, tagIds: [1, 2, 3, 4]}
Delete Product | http://localhost:3001/api/products/6 | DELETE | To delete a Product use the id at the end of the path of the Product you want to delete.

![Demo](./assets/product.gif)

[Video Demo of how to test the routes for the Product](https://drive.google.com/file/d/1Yb5IYRjDYZxIm5IRh376c_Qsy9okpprG/view)

### Tags

A Tag belongs to many Tag models and a Tag belongs to many Product models, where a product is allowed ot have multiple Tags and Tags to have many Products by using the Product-Tag model

To test and use the Tag routes you need to find the correct routes under the `<routes>` folder in the `<tag-routes.js>` file.

Action | Rout/path | Method on Insomnia | Notes
---------|-----------|--------------------|------
Get All  | http://localhost:3001/api/tags/ | GET |
Get all by id | http://localhost:3001/api/tgs/1 | GET | change the number 1 in the rout/path to another id based on the tag id you wish to view, in this case you will get multiple Products as a product can have many tag id's
Create a new Tag | http://localhost:3001/api/tags/ | POST | The format of the object to be added should follow the following {"tag_name": "Hello","tagId": 4} 
Update Tag | http://localhost:3001/api/tags/6 | PUT | To update a tag add the id number of the Tag you want to update to the path and type the updates in the following format {"tag_name": "Hello World","tagId": 4}
Delete Tag | http://localhost:3001/api/tags/6 | DELETE | To delete a Tag use the id at the end of the path of the Tag you want to delete

![Demo](./assets/tags.gif)

[Video Demo of how to test the routes for the Tag](https://drive.google.com/file/d/1tNIhx_oN165_TVFgzzGbgSPcq9X2W_zn/view)

## License
![APM](https://img.shields.io/apm/l/README)

## Badges

![javaScript](https://img.shields.io/badge/JavaScript-100%25-blue)
![Node](https://img.shields.io/badge/Node.js-CLI-blue)
![dotenv](https://img.shields.io/badge/dotenv-npm%20package-blue)
![express](https://img.shields.io/badge/express-npm%20package-blue)
![mysql2](https://img.shields.io/badge/mysql2-npm%20package-blue)
![sequelize](https://img.shields.io/badge/sequelize-npm%20package-blue)

## Contributing 

To contribute to this project, please make sure you follow the guidelines in [The Contributor Covenant](https://www.contributor-covenant.org/) as general guidelines.
Kindly maintain the highest ethics and respect. For further questions or requests kindly contact me through my [Email](mailto:noha_ashraf85@hotmail.com) or [GitHub](https://github.com/NohaAshraf85).

## Tests 
The E-Commerce applicaiotn can be tested through Insomnia to make sure that all the routes work as intended and the final results of adding, updating or deleting can be visually seen on MySQL Workbench.

## Questions
For any questions, please contact me through [GitHub](https://github.com/NohaAshraf85) 
or [Email](mailto:noha_ashraf85@hotmail.com)



