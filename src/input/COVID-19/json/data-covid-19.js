const request = require('request');
const fs = require('fs')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '124d5f6cd1mshf0f4e4913aa0baep171bc2jsn36c019071960',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/statistics', options)
.then((response) => { 
    return response.json();
})
.then((json) => {
    fs.writeFile('../../../../public/data-covid/json/data-statistics-COVID19.json', JSON.stringify(json), (err) => {
        if (err) throw err;
        console.log('complete');
        console.log(fs.readFileSync('../../../../public/data-covid/json/data-statistics-COVID19.json', 'utf-8'))
    })
})