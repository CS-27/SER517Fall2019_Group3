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
	print(ingredients)
	for recipe in recipes:
		print(recipe)
		if 'Hops' in recipe:
			hops = recipe["Hops"]
			for hop in hops:
				hopArr = hop.strip().split(':')
				if len(hopArr) == 2:
					for ingredient in ingredientList:
						if hopArr[1].strip().isdigit():
							floatHop = float(hopArr[1].strip())
							floatIngr = float( ingredient[1])
							if hopArr[0] == ingredient[0] and floatHop <= floatIngr: 
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
	#print type(str(recipeRegx))
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
	result = {}
	if userID != 'recipe_info':
		if userID in db.list_collection_names():
			collection = db[userID]
			#result = list(collection.find({'name': recipeName}))
			result = collection.find_one({'name': recipeName})
			#print type(result)
	return json.dumps(result, default=json_util.default)


def brewBeer(userID, recipeData):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/brewingStatus?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.brewingStatus
	result = {}
	timesBrewed = 0
	if userID not in db.list_collection_names():
		#print "here"
		collection = db[userID]
		#search_query = recipeData['recipeName']
		timesBrewed = timesBrewed + 1
		recipeData.__setitem__("timesBrewed", timesBrewed)
		lastModified = recipeData['startTime']
		recipeData.__setitem__("lastModified", lastModified)
		recipeData.__setitem__("beerStatus", 1)
		result = collection.insert_one(recipeData)
		#print result
		if result:
			return True
		else: 
			return False
		
		
		### recipeName, beerStatus, startTime, lastUpdate, timesBrewed 
	else:
		collection = db[userID]
		result1 = collection.find_one({'recipeName':recipeData['recipeName']})
		if result1:
			timesBrewed = result1['timesBrewed'] + 1
			recipeData.__setitem__("timesBrewed", timesBrewed)
			lastModified = recipeData['startTime']
			recipeData.__setitem__("lastModified", lastModified)
			recipeData.__setitem__("beerStatus", 1)
			#result = collection.insert_one(recipeData)
			search_query = { 'recipeName':recipeData['recipeName'] }
			del recipeData['recipeName']
			for key,values in recipeData.items():
				new_values = {"$set" : {key:value}}
				result = collection.update(search_query,new_values,upsert = True)
			if result:
				return True
			else:
				return False
		else:
			timesBrewed = timesBrewed + 1
			recipeData.__setitem__("timesBrewed", timesBrewed)
			lastModified = recipeData['startTime']
			recipeData.__setitem__("lastModified", lastModified)
			recipeData.__setitem__("beerStatus", 1)
			result = collection.insert_one(recipeData)
			if result:
				return True
			else:
				return False



def brewBeerUpdate(userID, updateData):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/brewingStatus?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.brewingStatus
	collection = db[userID]
	result = collection.find_one({'recipeName': updateData['recipeName']})
	search_query = {'recipeName': updateData['recipeName']}
	if result:
		new_status = {"$set" : {'beerStatus':result['beerStatus'] + 1}}
		collection.update(search_query,new_status,upsert = True)
		new_time = {"$set" : {'lastModified':updateData['lastModified']}}
		collection.update(search_query,new_time,upsert = True)
		return True
	else:
		return False


	
		


