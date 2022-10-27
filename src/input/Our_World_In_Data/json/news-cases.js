// npm install --save csvtojson@latest
const csv = require("csvtojson");
const request = require('request');
const fs = require('fs')

const URI = 'https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/jhu/new_cases.csv'
// Convert a csv file with csvtojson
csv().fromStream(request.get(URI))
    .then(function (jsonArrayObj) {
        //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);
        // Write testlist back to the file
        fs.writeFile("../../../../public/data-covid/json/news-cases.json", JSON.stringify(jsonArrayObj), function (err) {
            if (err) throw err;
            console.log("SUCCESSFUL CONNECTION");
        }
        );
    });