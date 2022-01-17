const head = require("../head");
const assertEqual = require("../assertEqual");

assertEqual(head([]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
