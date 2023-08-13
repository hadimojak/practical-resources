
const fs = require('fs');
const { XMLParser } = require('fast-xml-parser');
const option = {
  ignoreAttributes: false,
  removeNSPrefix: true,
};
const parser = new XMLParser(option);

let result15 = parser.parse(fs.readFileSync('./sample.xml'));

fs.writeFileSync('./test1.json', JSON.stringify(result15));
