import pymongo
import json
from pymongo import MongoClient
client = pymongo.MongoClient(
    "mongodb+srv://admin:tuan1234567890@cluster0.rkkoenm.mongodb.net/?retryWrites=true&w=majority")
db = client["vaccines"]
Collection =db["vaccinesCountry"]

 
# Loading or Opening the json file
with open('C:\\Users\\ramma\\Desktop\\Covid-19-news\\data-covid19\\public\\vaccines\\json\\vaccine-data.json') as file:
    file_data = json.load(file)
     

if isinstance(file_data, list):
    Collection.insert_many(file_data) 
else:
    Collection.insert_one(file_data)
client.close()