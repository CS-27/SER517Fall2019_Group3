import json
import pymongo
from flask import jsonify
from bson import json_util

def addRecipe(recipe):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info
	#data = {}

	recipe['name'] = ''.join(e for e in recipe['name'] if e.isalnum())
	#recipe['name'] = ''.join(e for e in recipe['name'] if e.isalnum())
	if not collection.find_one({'name':recipe['name']}):
	    result = collection.insert(recipe)
	else:
	    result = False
	if result:
		return 'True'
	else:
		return 'Already Inserted'


def showRecipeByName(name):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info

	result = collection.find_one({'name' : name})
	return json.dumps(result, default=json_util.default)



def deleteRecipeAdmin(recipeName):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info

	result = collection.find_one({'name': recipeName['name']})
	#print result
	search_query = { "name": recipeName['name'] }
	if result:
		delRecipe = collection.delete_one(search_query)
		return True
	else:
		return False


def recipeIngredients(recipeName):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info

	result = collection.find_one({'name': recipeName})
	if result['name']: 
		del result['name']
	if result['_id']: 
		del result['_id']
	if 'HopsSchedule' not in result: 
		pass
	else:
		del result['HopsSchedule']
	if 'Directions' not in result: 
		pass
	else:
		del result['Directions']

	return json.dumps(result, default=json_util.default)



