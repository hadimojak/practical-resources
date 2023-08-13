const ExcelJS = require("exceljs");
const workbook = new ExcelJS.Workbook();

const jsonfile = require("jsonfile");
const outputFile = "json_file.json";

const colNameEnum = {
  1: "FREE_UNIT_TYPE_CODE",
  2: "FREE_UNIT_TYPE_NAME",
  3: "Service_Name",
  4: "Type",
  5: "Unit",
};

workbook.xlsx
  .readFile("types-mapping-v22.xlsx")
  .then(() => {
    const worksheet = workbook.getWorksheet(1);
    const json = [];

    worksheet.eachRow({ includeEmpty: true }, function (row, rowNumber) {
      const rowObject = {};

      row.eachCell({ includeEmpty: true }, function (cell, colNumber) {
        rowObject[colNameEnum[colNumber]] = cell.value;
      });

      json.push(rowObject);
    });



    jsonfile.writeFile(outputFile, json, { spaces: 4 }, function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`JSON file saved to ${outputFile}`);
      }
    });
  })
  .catch((error) => {
    console.log("Error: ", error);
  });
