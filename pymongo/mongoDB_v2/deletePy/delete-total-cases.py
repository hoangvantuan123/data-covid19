import pymongo
from pymongo import MongoClient
client = pymongo.MongoClient(
    "mongodb+srv://admin:tuan1234567890@data-covid19-v2.wvqhvrs.mongodb.net/?retryWrites=true&w=majority")
db = client["covid-19-v2"]
Collection = db["total-cases"]

x = Collection.delete_many({})

print(x.deleted_count, " documents deleted.")
client.close()
