const inquirer = require("inquirer");

// Import MenuController and create new instance
const MenuController = require("./controllers/MenuController");
const menu = new MenuController();

menu.clear();
menu.main();
