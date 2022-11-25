// npm install --save csvtojson@latest
const csv = require("csvtojson");
const request = require('request');
const fs = require('fs')
// Convert a csv file with csvtojson
csv().fromStream(request.get('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/latest/owid-covid-latest.csv'))
    .then(function (jsonArrayObj) {
        //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);
        // Write testlist back to the file
        fs.writeFile("../../../../public/data-covid/json/owid-covid-latest.json", JSON.stringify(jsonArrayObj), function (err) {
            if (err) throw err;
            console.log('complete');
        }
        );
        fs.writeFile("../../../../public/data-covid/json/covid-custom-latest.json", JSON.stringify(jsonArrayObj), function (err) {
            if (err) throw err;
            console.log('Thanh Cong');
        }
        );
        fs.writeFile("../../../../public/maps/world-population.json", JSON.stringify(jsonArrayObj), function (err) {
            if (err) throw err;
            console.log('Map world : Thanh cong ');
        }
        );
    })
