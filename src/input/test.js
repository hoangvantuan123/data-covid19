const request = require('request');
const fs = require('fs')
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '124d5f6cd1mshf0f4e4913aa0baep171bc2jsn36c019071960',
		'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
	}
};

fetch('https://covid-193.p.rapidapi.com/history?country=usa&day=2020-06-02', options)
.then((response) => { 
    return response.json();
})
.then((json) => {
    fs.writeFile('../../data/test.json', JSON.stringify(json), (err) => {
        if (err) {
            throw new Error('Something went wrong.')
        }
        console.log('JSON written to file. Contents:');
        console.log(fs.readFileSync('test.json', 'utf-8'))
    })
})