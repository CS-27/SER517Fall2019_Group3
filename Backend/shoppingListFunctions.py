import json
import pymongo
from flask import jsonify
from bson import json_util


def showShoppingList(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/shoppingList?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.shoppingList

	collection = db.userShoppingList

	result = collection.find_one({'userID' : userID})
	return json.dumps(result, default=json_util.default)

def addShoppingList(userShopList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/shoppingList?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.shoppingList

	collection = db.userShoppingList

	if not collection.find_one({'userID' : userShopList['userID']}):
		#data = {}
		#data.update(ingredientList = userIngList)
		result = collection.insert_one(userShopList).inserted_id
	else:
		#update(userIngList)
		search_query = { "userID": userShopList['userID']}

		for key,value in userShopList.items():
			if key != 'userID':
				new_values = {"$set" : {key:value}}
				result = collection.update(search_query,new_values,upsert = True)
	if result:
		return True
	else:
		return False


def updateShoppingList(userID, shopList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/shoppingList?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.shoppingList

	collection = db.userShoppingList

	result = collection.find_one({'userID': userID})
	#search_query = { "userID": userIngList['userID'] }
	search_query = { "userID": userID }
	if result:
		for key,value in shopList.items():
			new_value = {"$set" : {key:str(int(value)+int(result[key]))}}
			updateCollection = collection.update(search_query, new_value, upsert=True)
		return True
	else:
		return False


def deleteShoppingListItems(userID, shopList):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/shoppingList?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.shoppingList

	collection = db.userShoppingList

	result = collection.find_one({'userID': userID})
	search_query = { "userID": userID }
	if result:
		for key,value in shopList.items():
			search_query = {"$and": [{"userID": userID}, {key: {'$exists':True}}]}
			#print collection.find_one(search_query)
			updateCollection = collection.update(search_query, {'$unset' : {key:1}})
			#print updateCollection
			if not updateCollection['updatedExisting']:
				return False
		return True
	return False



