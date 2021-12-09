const fs = require("fs");

/**
 * Basic Authenticate And New Contact
 * @param {string} fullname
 * @param {number} phone
 * @param {string} email
 */
exports.addContact = (fullname, phone, email) => {};

/**
 * Show Contacts As a Simple Table
 */
exports.listContacts = () => {};

/**
 * Filter Contact By Name And Remove From All Contacts List
 * @param {string} fullname
 */
exports.removeContact = (fullname) => {};

/**
 * Return a Array of All Contacts
 */
const loadContacts = () => {};

// Convert My Contacts Array to JSON And Write To A JSON File
const saveContacts = (contacts) => {
  const data = JSON.stringify(contacts);
  fs.writeFileSync("data/contacts.json", data);
};
