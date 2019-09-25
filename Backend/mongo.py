import pymongo
from bson.json_util import dumps
import json


def connect_mongoAtlas():
	#mongo = pymongo.MongoClient("mongodb+srv://schittin:team2019@gettingstarted-2kb0f.mongodb.net/test?retryWrites=true&w=majority",ssl = True)
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/myDatabase?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.myDatabase

	print ("connected Successfully")
	#db = mongo.test
	print (db)
	col = db.list_collection_names()
	print (col)
	col = db.myCollection
	post = col.find_one({})
	print (post)
	data = {"name": "Rishab", "address":"California"}
	result = col.insert_one(data)
	print ('row one {0}'.format(result.inserted_id))


connect_mongoAtlas()