// const yargs = require("yargs");
// const chalk = require("chalk");

import yargs from "yargs";
import chalk from "chalk";

// Common Usage Help
yargs.scriptName(`${chalk.redBright("node main.js")}`);
yargs.usage(`$0 ${chalk.blue("<command>")} ${chalk.magentaBright("[args]")}`);
yargs.version("1.2.3");
