import pymongo

client =pymongo.MongoClient("mongodb+srv://admin:tuan1234567890@data-covid19-v2.wvqhvrs.mongodb.net/?retryWrites=true&w=majority")
db = client["covid-19-v2"]
Collection =db["covid-latest"]

""" tạo biến xóa nhiều dữ liệu """
x = Collection.delete_many({})
print(x.deleted_count ,"Delete Collection")