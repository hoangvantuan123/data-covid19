const request = require('request');
const fs = require('fs')

fetch('https://raw.githubusercontent.com/owid/covid-19-data/master/public/data/vaccinations/vaccinations.json')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        fs.writeFile('../../../../public/vaccines/json/vaccine-data.json', JSON.stringify(json), (err) => {
            if (err) throw err;
            console.log("SUCCESSFUL CONNECTION")
        })
    })
