import json
import pymongo
from flask import jsonify
from bson import json_util
import ingredientFunctions
import re

def addRecipe(recipe):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info
	#data = {}

	#recipe['name'] = ''.join(e for e in recipe['name'] if e.isalnum())
	if not collection.find_one({'name':recipe['name']}):
		recipe['name'] = recipe['name'].lower()
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
	#print result
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


def allRecipes():
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info
	result = list(collection.find({}))
	# print result

	return json.dumps(result, default=json_util.default)


def createUserRecipes(userID, recipeInfo):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db[userID]
	if not collection.find_one({'name': recipeInfo['name']}):
		result = collection.insert_one(recipeInfo)
		return True
	else:
		return False

def whatiCanBrewToday(userID):
	recipes  = json.loads(allRecipes())
	recipeList =[]
	ingredients = json.loads(ingredientFunctions.showIngredient(userID))
	ingredientList = []
	for key in ingredients:
		if key!='userID' and key!='_id':
			ingr = [key,ingredients[key]]
			ingredientList.append(ingr)
	flag = False
	for recipe in recipes:
		if 'Hops' in recipe:
			hops = recipe["Hops"]
			for hop in hops:
				hopArr = hop.strip().split(':')
				if len(hopArr) == 2:
					for ingredient in ingredientList:
						if hopArr[1].strip().isdigit():
							intHop = int(hopArr[1].strip())
							intIngr = int( ingredient[1])
							if hopArr[0] == ingredient[0] and intHop <= intIngr: 
								flag = True
								break
							else:
								flag = False
		if(flag):
			recipeList.append(recipe)
		flag = False
		print("end of recipe")

				
	
	output = recipeList
	#print(output)
	return json.dumps(output, default=json_util.default)
	


def searchRecipe(recipeRegx):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info
	#recipeRegx = recipeRegx.lower()
	#print recipeRegx
	result = list(collection.find({'name': {'$regex': recipeRegx, '$options':'i'}}))
	#print result
	return json.dumps(result, default=json_util.default)


def viewUserRecipes(userID):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe
	result = []
	if userID != 'recipe_info':
		if userID in db.list_collection_names():
			collection = db[userID]
			result = list(collection.find({}))
		#print type(result)
		return json.dumps(result, default=json_util.default)


def viewUserRecipe(userID, recipeName):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe
	result = []
	if userID != 'recipe_info':
		if userID in db.list_collection_names():
			collection = db[userID]
			#result = list(collection.find({'name': recipeName}))
			result = collection.find_one({'name': recipeName})
			#print type(result)
		return json.dumps(result, default=json_util.default)

	else:
		result = []
		result.append(False)
		return json.dumps(result, default=json_util.default)


