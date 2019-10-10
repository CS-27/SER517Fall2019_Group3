
from flask import Flask, jsonify, request, Blueprint
import recipeFunctions
import equimentFunctions
import ingredientFunctions
import userLoginFunctions


brewDay_api = Flask(__name__)

@brewDay_api.route('/')
def indexPage():
	return 'Hello, This is Brew Day'

@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe():
	recipeName = request.args.get('recipeName')
	response = jsonify({'RecipeInfo': recipeFunctions.showRecipeByName(recipeName)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo():
	recipeInfo = request.args.get('recipeInfo')
	response = jsonify({'recipeAdditionStatus' : recipeFunctions.addRecipe(recipeInfo)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/showEquipment', methods = ['GET'])
def showEquiment():
	userID = request.args.get('userID')
	response = jsonify({'equipmentList' : equimentFunctions.showEquipment(userID)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/showIngredient', methods = ['GET'])
def showIngredient():
	userID = request.args.get('userID')
	response = jsonify({'IngredientList' : ingredientFunctions.showIngredient(userID)})
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
	response = jsonify({'Ingredients Status': ingredientFunctions.addIngredient(ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

@brewDay_api.route('/addEquipment', methods = ['POST'])
def addEquipment():
	req_data = request.get_json()
	equipmeneList = {}
	for key,value in req_data.items():
		equipmeneList.__setitem__(key,value)
	response = jsonify({'Ingredients Status': ingredientFunctions.addIngredient(equipmeneList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

if __name__ == '__main__':
    brewDay_api.run(debug=True)