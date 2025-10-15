from bson import ObjectId
from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()
MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)
db = client.get_database()
overlays_col = db.overlays

def create_overlay(data):
    res = overlays_col.insert_one(data)
    return str(res.inserted_id)

def get_all_overlays():
    docs = list(overlays_col.find({}))
    for d in docs:
        d["_id"] = str(d["_id"])
    return docs

def update_overlay(id, data):
    overlays_col.update_one({"_id": ObjectId(id)}, {"$set": data})
    return True

def delete_overlay(id):
    overlays_col.delete_one({"_id": ObjectId(id)})
    return True
