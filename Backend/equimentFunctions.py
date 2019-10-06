import json
import pymongo
from flask import jsonify
from bson import json_util


def showEquipment(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/equipment?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.equipment

	collection = db.userEquipment

	result = collection.find_one({'userID' : userID})
	return json.dumps(result, default=json_util.default)


#addRecipe(c)
showEquipment('user1')


