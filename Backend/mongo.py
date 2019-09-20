import pymongo
from bson.json_util import dumps
import json


def connect_mongoAtlas():
	mongo = pymongo.MongoClient("mongodb+srv://schittin:team2019@gettingstarted-2kb0f.mongodb.net/test?retryWrites=true&w=majority")
	print ("connected Successfully")
	db = mongo.test
	col = db.list_collection_names()
	print (col)
	col = db.myCollection
	post = col.find_one({})
	print (post)
	data = {"name": "Rishab", "address":"California"}
	result = col.insert_one(data)
	print ('row one {0}'.format(result.instersted_id))
	#db = mongo.get_database('myDatabase')
	#print(db.list_collection_names())
	#col = db.myCollection

	#print(col.count_documents({}))


connect_mongoAtlas()