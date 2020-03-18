# Sequelized Burger

## Purpose: ##

This is Sequelize version of the Yum Yum Burger app.

Following MVC design pattern, create an application using MySQL, Node, Express, Handlebars and Sequelize to display burger options and log burger consumption and customer name.

## Description ##

The Yum Yum Burger site will let users add burgers to a list of consumable burgers. By clicking on the burger icon, the user 'consumes' the burger. The burger is then removed from the menu and added to the 'Devoured' list. Once on the devoured list, the user can delete the burger by clicking on the trash icon.

Link to app deployed on Heroku: [Yum Yum Burger App]()

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
* Validation is performed when entering a new burger. The app requires a non-blank entry, anything else goes. If the user enters a blank burger name, the app will display a Bootstrap alert notifying the user to enter a burger name. The alert will close if the user selects the 'x'.
* In this version, when the user 'consumes' the burger, a modal will pop up and request they enter a name. Currently, the name will be added to the 'customers' table in the database, but its not linked to the burger table yet...


