
from flask import Flask, jsonify, request, Blueprint,json
import recipeFunctions
import equimentFunctions
import ingredientFunctions
import userLoginFunctions
import shoppingListFunctions


brewDay_api = Flask(__name__)

@brewDay_api.route('/')
def indexPage():
	return 'Hello, This is Brew Day'

@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe():
	recipeName = request.args.get('recipeName')
	response = jsonify({'RecipeInfo': json.loads(recipeFunctions.showRecipeByName(recipeName))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo():
	recipeInfo = request.args.get('recipeInfo')
	response = jsonify({'recipeAdditionStatus' : json.loads(recipeFunctions.addRecipe(recipeInfo))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/showEquipment', methods = ['GET'])
def showEquiment():
	userID = request.args.get('userID')
	response = jsonify({'equipmentList' : json.loads(equimentFunctions.showEquipment(userID))})
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
	req_data = request.get_json()
	ingList = {}
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	response = jsonify({'Ingredients Status': json.loads(ingredientFunctions.addIngredient(ingList))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/addEquipment', methods = ['POST'])
def addEquipment():
	req_data = request.get_json()
	equipmentList = {}
	for key,value in req_data.items():
		equipmentList.__setitem__(key,value)
	response = jsonify({'Equipment Status': json.loads(equipmentFunctions.addEquipment(equipmentList))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/addShoppingList', methods = ['POST'])
def addShoppingList():
	req_data = request.get_json()
	shoppingList = {}
	for key,value in req_data.items():
		shoppingList.__setitem__(key,value)
	response = jsonify({'Shopping List Status': json.loads(shoppingListFunctionc.addShoppingList(shoppingList))})
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