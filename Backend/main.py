
from flask import Flask, jsonify, request, Blueprint,json
from flask_cors import CORS, cross_origin
import recipeFunctions
import equipmentFunctions
import ingredientFunctions
import userLoginFunctions
import shoppingListFunctions


brewDay_api = Flask(__name__)
cors = CORS(brewDay_api)

@brewDay_api.route('/')
def indexPage():
	return 'Hello, This is Brew Day'

@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe():
	recipeName = request.args.get('recipeName')
	response = jsonify({'RecipeInfo': json.loads(recipeFunctions.showRecipeByName(recipeName))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


"""@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo():
	recipeInfo = request.args.get('recipeInfo')
	response = jsonify({'recipeAdditionStatus' : json.loads(recipeFunctions.addRecipe(recipeInfo))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response"""

@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo():
    req_data = request.get_json(force=True)
    recipeList = {}
    for key,value in req_data.items():
    	recipeList.__setitem__(key,value)
    #print(ingList)
    response = jsonify({'Recipe Status': recipeFunctions.addRecipe(recipeList)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


@brewDay_api.route('/showEquipment', methods = ['GET'])
def showEquiment():
	userID = request.args.get('userID')
	response = jsonify({'equipmentList' : json.loads(equipmentFunctions.showEquipment(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/showIngredient', methods = ['GET'])
def showIngredient():
	userID = request.args.get('userID')
	response = jsonify({'IngredientList' : json.loads(ingredientFunctions.showIngredient(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/userCheckLogin', methods = ['GET'])
def checkUserLogin():
	userID = request.args.get('userID')
	password = request.args.get('password')
	response = jsonify({'Status' : userLoginFunctions.userCheck(userID,password)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/addIngredient', methods= ['POST'])
def addIngredient():
	req_data = request.get_json(force=True)
	ingList = {}
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	#print(ingList)
	response = jsonify({'Ingredients Status': ingredientFunctions.addIngredient(ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/addEquipment', methods = ['POST'])
def addEquipment():
	req_data = request.get_json(force=True)
	equipmentList = {}
	for key,value in req_data.items():
		equipmentList.__setitem__(key,value)
	response = jsonify({'Equipment Status': equipmentFunctions.addEquipment(equipmentList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/addShoppingList', methods = ['POST'])
def addShoppingList():
	req_data = request.get_json(force=True)
	shoppingList = {}
	for key,value in req_data.items():
		shoppingList.__setitem__(key,value)
	response = jsonify({'Shopping List Status': shoppingListFunctions.addShoppingList(shoppingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/showShoppingList', methods = ['GET'])
def showShoppingList():
	userID = request.args.get('userID')
	response = jsonify({'ShoppingList' : json.loads(shoppingListFunctions.showShoppingList(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

if __name__ == '__main__':
    brewDay_api.run(debug=True)
