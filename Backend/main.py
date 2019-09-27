
from flask import Flask, jsonify, request, Blueprint


brewDay_api = Flask(__name__)

@brewDay_api.route('/')
def indexPage():
	return 'Hello, This is Brew Day'

@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe(name):
	recipeName = request.args.get('name')
	return jsonify({'RecipeInfo': recipeFunctions.showRecipeByName(recipeName)})


@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo(recipeInfo):
	recipeInfo = request.args.get('recipeInfo')
	return jsonify({'recipeAdditionStatus' : recipeFunctions.addRecipe(recipeInfo)})

if __name__ == '__main__':
    brewDay_api.run(debug=True)