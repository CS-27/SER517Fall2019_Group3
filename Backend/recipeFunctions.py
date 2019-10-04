import json
import pymongo
from flask import jsonify
from bson import json_util

def addRecipe(recipe):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info
	data = {}

	recipe['Name'] = ''.join(e for e in recipe['Name'] if e.isalnum())
	data.update(recipe_name = recipe)
	result = collection.insert(recipe).inserted_id
	if result:
		return 'True'
	else:
		return 'Not inserted'


def showRecipeByName(name):
	client = pymongo.MongoClient("mongodb://test1:project2019@gettingstarted-shard-00-00-2kb0f.mongodb.net:27017,gettingstarted-shard-00-01-2kb0f.mongodb.net:27017,gettingstarted-shard-00-02-2kb0f.mongodb.net:27017/recipe?ssl=true&replicaSet=GettingStarted-shard-0&authSource=admin&retryWrites=true&w=majority")
	db = client.recipe

	collection = db.recipe_info

	result = collection.find_one({'Name' : name})
	return json.dumps(result, default=json_util.default)


c = {'Name': 'American-Pale-Ale', 'Yeast': 'Wyeast 1056', 'Hops': {'Cascade': '1.07oz', 'Simcoe': '2.50oz', 'Apollo': '2.03oz', 'Chinook': '1.76oz'}, 'Malt': '8lb', 'Hops Schedule': {'Cascade': 'at knockout', 'Simcoe': 'at whirlpool (30 Minutes)', 'Apollo': ['at 60 Minutes bittering charge', 'at dry hope'], 'Chinook': 'at knockout'}, 'Directions': 'Mash at 150\xcb\x9aF for 60 minutes or until conversion is complete. Boil for 60 minutes. Add whirlpool hops after cooling 20 degrees following boil (to preserve aroma). Cool to 61\xcb\x9aF (16\xcb\x9aC) and pitch clean yeast. Allow fermentation to free rise to 66.2\xcb\x9a (19\xcb\x9aC) for two days, then finish at 70\xcb\x9a (21\xcb\x9aC). When fermentation reaches 1-2\xc2\xb0 Plato from final gravity (1.010\xe2\x80\x931.014), add the dry hop addition for two days before crashing and cold conditioning.', 'All-Grain': {'OG': '1.046', 'Brewhouse efficiency': '72%', 'IBUs': '42', 'ABV': '4.8%', 'FG': '1.006', 'Batch size': '5 Gallons'}}


#addRecipe(c)
showRecipeByName('AmericanPaleAle')


