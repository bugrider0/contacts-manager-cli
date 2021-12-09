// const yargs = require("yargs");
// const chalk = require("chalk");

import yargs from "yargs";
import chalk from "chalk";

// Common Usage Help
yargs.scriptName(`${chalk.redBright("node main.js")}`);
yargs.usage(`$0 ${chalk.blue("<command>")} ${chalk.magentaBright("[args]")}`);
yargs.version("1.2.3");

/**
 * Command Name: Create New Contacts
 * Alias : c
 */
yargs.command({
  command: "create",
  aliases: ["c"],
  describe: `${chalk.green("[create new contact]")}`,

  builder: {
    // Person FullName - Can Use <Space>
    name: {
      alias: "n",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },

    // Phone Number
    phone: {
      alias: "p",
      describe: "Person Phone Number",
      demandOption: true,
      type: "number",
    },

    // Email
    email: {
      alias: "e",
      describe: "Person Email Address",
      demandOption: true,
      type: "string",
    },
  },
});
