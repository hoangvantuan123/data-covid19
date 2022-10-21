# NPM 
- [csv-parser](https://www.npmjs.com/package/csv-parser) :Truyền trực tuyến trình phân tích cú pháp CSV nhằm mục đích đạt tốc độ tối đa cũng như khả năng tương thích với bộ thử nghiệm axit CSV phổ csv . csv-parsercó thể chuyển đổi CSV thành JSON với tốc độ khoảng 90.000 hàng mỗi giây. Hiệu suất thay đổi theo dữ liệu được sử dụng; cố gắng bin/bench.js <your file> chuẩn dữ liệu của bạn.
- [csvtojson](https://www.npmjs.com/package/csvtojson) : mô-đun là một trình phân tích cú pháp csv nodejs toàn diện để chuyển đổi csv sang json hoặc mảng cột. Nó có thể được sử dụng như thư viện node.js / công cụ dòng lệnh / hoặc trong trình duyệt. Dưới đây là một số tính năng:


## csv-parser
```code
// npm i csv-parser
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

fs.createReadStream('file.csv')
  .pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
    fs.writeFile ("input.json", JSON.stringify(results), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
  });
```


## csvtojson

```code 
// npm install --save csvtojson@latest
const csv = require("csvtojson");
const request = require('request');
const fs = require('fs')
// Convert a csv file with csvtojson
csv().fromStream(request.get('https://link.csv'))
    .then(function (jsonArrayObj) {
        //when parse finished, result will be emitted here.
        console.log(jsonArrayObj);
        // Write testlist back to the file
        fs.writeFile ("../../data/full_data.json", JSON.stringify(jsonArrayObj), function(err) {
            if (err) throw err;
            console.log('complete');
            }
        );
    })




```

## JSONtoCSV

https://attacomsian.com/blog/nodejs-convert-json-to-csv

### GitLFS
git lfs migrate import --include="*.csv,*.json"
