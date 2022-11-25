
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('../../../../full_data.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    fs.writeFile ("../../../../full_data.json", JSON.stringify(results), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
  });
