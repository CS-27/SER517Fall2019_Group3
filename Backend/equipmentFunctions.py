import json
import pymongo
from flask import jsonify
from bson import json_util

# Function return the equipments of the particular user
def showEquipment(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/equipment?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.equipment

	collection = db.userEquipment

	result = collection.find_one({'userID' : userID})
	return json.dumps(result, default=json_util.default)


# adds the equipments to particular userID
def addEquipment(userEquipList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/equipment?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.equipment

	collection = db.userEquipment
	
	if not collection.find_one({'userID' : userEquipList['userID']}):
		result = collection.insert_one(userEquipList).inserted_id
	else:
		search_query = { "userID": userEquipList['userID'] }

		for key,value in userEquipList.items():
			if key != 'userID':
				new_values = {"$set" : {key:value}}
				result = collection.update(search_query,new_values,upsert = True)
	if result:
		return True
	else:
		return False


# overrides the equipment quantity to the new value
def updateEquipmentQuantity(userID, equipList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/equipment?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.equipment

	collection = db.userEquipment

	result = collection.find_one({'userID': userID})
	search_query = { "userID": userID }
	if result:
		for key,value in equipList.items():
			new_value = {"$set" : {key:str(int(value))}}
			updateCollection = collection.update(search_query, new_value, upsert=True)
		return True
	else:
		return False


#  adds up with the previous quantity present.
def addMoreEquipmentQuantity(userID, equipList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/equipment?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.equipment

	collection = db.userEquipment

	result = collection.find_one({'userID': userID})
	search_query = { "userID": userID }
	if result:
		for key,value in equipList.items():
			new_value = {"$set" : {key:int(value)+int(result[key])}}
			updateCollection = collection.update(search_query, new_value, upsert=True)
		return True
	else:
		return False



def deleteEquipment(userID, equipList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/ingredient?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.equipment

	collection = db.userEquipment

	result = collection.find_one({'userID': userID})
	search_query = { "userID": userID }
	if result:
		for key,value in equipList.items():
			search_query = {"$and": [{"userID": userID}, {key: {'$exists':True}}]}
			updateCollection = collection.update(search_query, {'$unset' : {key:1}})
			if not updateCollection['updatedExisting']:
				return False
		return True
	return False


