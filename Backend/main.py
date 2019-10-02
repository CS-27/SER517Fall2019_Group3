
from flask import Flask, jsonify, request, Blueprint
import recipeFunctions
import equimentFunctions


brewDay_api = Flask(__name__)

@brewDay_api.route('/')
def indexPage():
	return 'Hello, This is Brew Day'

@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe():
	recipeName = request.args.get('recipeName')
	return jsonify({'RecipeInfo': recipeFunctions.showRecipeByName(recipeName)})


@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo():
	recipeInfo = request.args.get('recipeInfo')
	return jsonify({'recipeAdditionStatus' : recipeFunctions.addRecipe(recipeInfo)})

@brewDay_api.route('/showEquipment', methods = ['GET'])
def showEquiment():
	userID = request.args.get('userID')
	return jsonify({'equipmentList' : equimentFunctions.showEquipment(userID)})

if __name__ == '__main__':
    brewDay_api.run(debug=True)