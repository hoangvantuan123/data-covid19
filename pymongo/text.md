// Kiểm tra và xóa dữ liệu trùng lặp 

b1: db.name.aggregate({"$match": {"name" :{ "$ne" : null } } },{"$group" : {"_id": "$name", "count": { "$sum": 1 } } },{"$match": {"count" : {"$gt": 1} } }, {"$project": {"name" : "$_id", "_id" : 0} })

b2: db.name.ensureIndex( { name:1 }, { unique:true, dropDups:true } )




// cập nhật chỉnh sửa dữ liệu trên mongoDB
db.datas.aggregate([{$group: {_id: { a: "$location", b: "$date" } ,count: { $sum: 1 }}},{$match: { count: { $gt: 1 }}}])
db.name.ensureIndex( { location:1 , date :1}, { unique:true, dropDups:true } )





db.datas.aggregate([{$group: {_id: { a: "$location", b: "$last_observation_date" } ,count: { $sum: 1 }}},{$match: { count: { $gt: 1 }}}])

db.name.ensureIndex( { location:1 , last_observation_date :1}, { unique:true, dropDups:true } )


1. Cập nhật dữ liệu nên mongoDB
https://www.geeksforgeeks.org/how-to-import-json-file-in-mongodb-using-python/

db.vaccines.deleteMany( { orderExpDate : {"$last_observation_date" : new Date(YEAR, MONTH, DATE) } }



///// Cập nhật dữ dữ liệu qua mongoDB

1. Cập nhật dữ liệu bằng python 
py .\covid-latest_mongo.py ; py .\news-cases.py ; py .\news-deaths.py ; py .\total-cases.py ; py .\total-deaths.py

2. Xóa kho dữ liệu cũ để cập nhật dữ liệu mới
py .\delete-covid-latest_mongo.py ; py .\delete-news-cases.py ; py .\delete-news-deaths.py ; py .\delete-total-cases.py ; py .\delete-total-deaths.py