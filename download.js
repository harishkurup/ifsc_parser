'use strict';

const axios = require('axios');
const fs = require('fs');
const config = require('config');

const fileName = config.get('file_name');
const url = config.get('url');

async function download() {
  var response = await downloadExcel();
  saveFile(response);
} 

async function downloadExcel() {
  var response = await axios({
    method: 'get',
    url: url,
    responseType: 'stream'
  });

  return response;
}

function saveFile(response) {
  var fileStream = fs.createWriteStream(fileName);
  fileStream.on('close', function(){
    console.log("done!!");
  });

  response.data.pipe(fileStream);
}

download();