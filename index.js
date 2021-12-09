const yargs = require("yargs");
const chalk = require("chalk");

const { addContact, listContacts, removeContact } = require("./utils/contacts");

// Common Usage Help
yargs.scriptName(`${chalk.redBright("node index.js")}`);
yargs.usage(
  `$0 ${chalk.blue("<command>")} ${chalk.magentaBright("[options]")}`
);
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

  // Handler Just Give Prop - Into <hander> Can Use Data
  handler({ name, phone, email }) {
    addContact(name, phone, email);
  },
});

/**
 * Command Name: List
 * Prompt: <null>
 * Type: <null>
 * Alias : l
 */
yargs.command({
  command: "list",
  aliases: ["l"],
  describe: `${chalk.green("[listing the saved contacts]")}`,

  // Handler Just Give Prop - Into <hander> Can Use Data
  handler() {
    listContacts();
  },
});

/**
 * Command Name: Remove
 * Prompt: Person fullname
 * Type: String
 * Alias : r
 */
yargs.command({
  command: "remove",
  aliases: ["r"],
  describe: `${chalk.green("[remove contact]")}`,

  builder: {
    name: {
      alias: "f",
      describe: "Person fullname",
      demandOption: true,
      type: "string",
    },
  },

  //   Handler Just Give Prop - Into <hander> Can Use Data
  handler({ name }) {
    removeContact(name);
  },
});

yargs.parse();
