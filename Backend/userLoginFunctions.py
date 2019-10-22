import json
import pymongo
from flask import jsonify
from bson import json_util

def userCheck(userID, password):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	#data = {}

	#recipe['Name'] = ''.join(e for e in recipe['Name'] if e.isalnum())
	#data.update(recipe_name = recipe)
	#result = collection.insert(recipe).inserted_id
	result = collection.find_one({'userID' : userID, 'password' : password})
	#print result
	if result:
		return 'True'
	else:
		return 'False'


def showRecipeByName(name):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info

	result = collection.find_one({'Name' : name})
	return json.dumps(result, default=json_util.default)

def userRegister(userInfo):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	if not collection.find_one({'userID' : userInfo['userID']}):
		result = collection.insert(userShopList).inserted_id
	else:
		return False
	return True


def userProfile(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	return json.dumps(collection.find_one({'userID' : userID}), default= json_util.default)



