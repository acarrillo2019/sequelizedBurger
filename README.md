# Sequelized Burger

## Description ##

The Yum Yum Burger app folllows a MVC design pattern, created using MySQL, Node, Express, Handlebars and Sequelize to display burger options and log burger consumption.

The Yum Yum Burger site will let users add burgers to a list of consumable burgers. By clicking on the burger icon, the user 'consumes' the burger. The burger is then removed from the menu and added to the 'Devoured' list. Once on the devoured list, the user can delete the burger by clicking on the trash icon.

Link to app deployed on Heroku: [Yum Yum Burger App](https://protected-depths-02857.herokuapp.com/)

## Tools ##

**NPM Libraries**
* express
* body-parser
* mysql2
* express-handlebars
* sequelize

**Frameworks**
* Bootstrap

## Developer's Notes: ##
* Validation is performed when entering a new burger. The app requires an entry when prompteed for a burger name. If the user enters a blank burger name, the app will display a Bootstrap alert notifying the user to enter a burger name. The alert will close if the user selects the 'x'.
* When the user 'consumes' the burger, a modal will pop up and request they enter a name. The name will be added to the 'customers' table in the database.


