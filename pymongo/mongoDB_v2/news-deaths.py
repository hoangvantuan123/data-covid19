import pymongo
import json
from pymongo import MongoClient
client = pymongo.MongoClient(
    "mongodb+srv://admin:tuan1234567890@data-covid19-v2.wvqhvrs.mongodb.net/?retryWrites=true&w=majority")
db = client["covid-19-v2"]
Collection = db["new-death"]


# Loading or Opening the json file
with open('C:\\Users\\ramma\\Desktop\\Covid-19-news\\data-covid19\\public\\data-covid\\json\\news-deaths.json') as file:
    file_data = json.load(file)

# Inserting the loaded data in the Collection
# if JSON contains data more than one entry
# insert_many is used else insert_one is used
if isinstance(file_data, list):
    Collection.insert_many(file_data)
else:
    Collection.insert_one(file_data)
client.close()
