import json
import pymongo
from flask import jsonify
from bson import json_util


# Checks if the username and password provided are correct or not for login
def userCheck(userID, password):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	result = collection.find_one({'userID' : userID, 'password' : password})
	if result:
		return 'True'
	else:
		return 'False'

# Register a user in the application
def userRegister(userInfo):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	if not collection.find_one({'userID' : userInfo['userID']}):
		result = collection.insert_one(userInfo).inserted_id
	else:
		return False
	return True


# Returns the information for any brewer registered in the application
def userProfile(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	dic = collection.find_one({'userID' : userID})
	if dic: 
		del dic['password']
		return json.dumps(dic, default= json_util.default)
	else:
		return "User Does not exists"


# Search for any registered brewer based on the regex provided.
def searchUser(userRegx):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/users?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.users

	collection = db.userInfo
	result = list(collection.find({'$or' : [{'firstName': {'$regex': userRegx, '$options':'i'}},{'lastName':{'$regex': userRegx,'$options':'i'}}]}))
	return json.dumps(result, default=json_util.default)



