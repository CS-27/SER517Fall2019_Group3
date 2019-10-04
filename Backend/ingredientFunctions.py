import json
import pymongo
from flask import jsonify
from bson import json_util


def showIngredient(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/ingrdient?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.ingredient

	collection = db.userIngredient

	result = collection.find_one({'userID' : userID})
	#print json.dumps(result, default=json_util.default)
	return json.dumps(result, default=json_util.default)


#addRecipe(c)
#showIngredient('user1')


