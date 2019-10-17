const excelToJson = require('convert-excel-to-json');
const config = require('config');
const {updateToDatabase} = require('./database.js');

const sheet = (typeof process.argv[2] !== 'undefined') ? process.argv[2] : 'Sheet1';

const fileName = config.get('file_name');

console.log("Processing for Excell : ", sheet);


const columnToKey = {
  A: 'bank',
  B: 'ifsc',
  C: 'branch',
  D: 'address',
  E: 'contact',
  F: 'city',
  G: 'district',
  H: 'state'
};

function parseExcel() {
  const results = excelToJson({
      sourceFile: fileName,
      sheets: [{
          name: sheet,
          header:{
            rows: 1
          },
          columnToKey: columnToKey
        }
      ]
  });

  // let totalRecord = Object.keys(results[sheet]).length;
  // console.log(totalRecord);
  // return;

  results[sheet].forEach(async (rows, index) => {
      try {
        let id = await updateToDatabase(rows);
        console.log(id);
      } catch (error) {
        console.log("**", error);
      }
      
    });
}

parseExcel();