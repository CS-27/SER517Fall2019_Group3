import pymongo
from bson.json_util import dumps
import json


def connect_mongoAtlas():
	mongo = pymongo.MongoClient("mongodb+srv://test1:project2019@gettingstarted-2kb0f.mongodb.net/test?retryWrites=true&w=majority")
	db = mongo.get_database('myDatabase')
	print(db.list_collection_names())
	col = db.myCollection

	print(col.count_documents({}))


connect_mongoAtlas()