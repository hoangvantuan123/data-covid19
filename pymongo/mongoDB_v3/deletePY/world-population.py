import pymongo
from pymongo import MongoClient
client = pymongo.MongoClient(
    "mongodb+srv://admin:tuan1234567890@cluster0.rkkoenm.mongodb.net/?retryWrites=true&w=majority")
db = client["maps"]
Collection = db["world-population"]

x = Collection.delete_many({})

print(x.deleted_count, " documents deleted.")
client.close()
