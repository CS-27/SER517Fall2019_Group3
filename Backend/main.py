
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


# # # # Recipe Functions # # # # 

@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe():
	recipeName = request.args.get('recipeName')
	response = jsonify({'recipeList': json.loads(recipeFunctions.showRecipeByName(recipeName))})
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


@brewDay_api.route('/deleteRecipeAdmin', methods = ['POST'])
def deleteRecipeAdmin():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key,value in req_data.items():
		recipeList.__setitem__(key,value)
	#del recipeList['userID']
	response = jsonify({'Recipe delete status' : recipeFunctions.deleteRecipeAdmin(recipeList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# # # # Equipment Functions # # # # 

@brewDay_api.route('/showEquipment', methods = ['GET'])
def showEquiment():
	userID = request.args.get('userID')
	response = jsonify({'equipmentList' : json.loads(equipmentFunctions.showEquipment(userID))})
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


@brewDay_api.route('/updateEquipment', methods = ['POST'])
def updateEquipment():
	req_data = request.get_json(force = True)
	ingList = {}
	#print req_data
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Equipment Update status' : equipmentFunctions.updateEquipmentQuantity(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/deleteEquipment', methods = ['POST'])
def deleteEquipment():
	req_data = request.get_json(force = True)
	ingList = {}
	#print req_data
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Equipment delete status' : equipmentFunctions.deleteEquipment(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# # # # Ingredient Functions # # # # 

@brewDay_api.route('/showIngredient', methods = ['GET'])
def showIngredient():
	userID = request.args.get('userID')
	response = jsonify({'IngredientList' : json.loads(ingredientFunctions.showIngredient(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/updateIngredient', methods = ['POST'])
def updateIngredient():
	req_data = request.get_json(force = True)
	ingList = {}
	#print req_data
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Ingredient Update status' : ingredientFunctions.updateIngredientQuantity(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/deleteIngredient', methods = ['POST'])
def deleteIngredient():
	req_data = request.get_json(force = True)
	ingList = {}
	#print req_data
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Ingredient delete status' : ingredientFunctions.deleteIngredient(userID,ingList)})
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


# # # # shopping list Functions # # # # 


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


@brewDay_api.route('/updateShoppingList', methods = ['POST'])
def updateShopList():
	req_data = request.get_json(force = True)
	shopList = {}
	#print req_data
	for key,value in req_data.items():
		shopList.__setitem__(key,value)
	userID = shopList['userID']
	del shopList['userID']
	response = jsonify({'Shop List Update status' : shoppingListFunctions.updateShoppingList(userID,shopList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/deleteShopListItems', methods = ['POST'])
def deleteShopListItems():
	req_data = request.get_json(force = True)
	shopList = {}
	for key,value in req_data.items():
		shopList.__setitem__(key,value)
	userID = shopList['userID']
	del shopList['userID']
	response = jsonify({'Shopping List Item delete status' : shoppingListFunctions.deleteShoppingListItems(userID,shopList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/createAutoShopList', methods= ['GET'])
def createASL():
	userID = request.args.get('userID')
	response = jsonify({'Auto ShoppingList' : json.loads(shoppingListFunctions.createAutoShopList(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# # # # user registeration/login/session Functions # # # # 

@brewDay_api.route('/userRegister', methods = ['POST'])
def userRegister():
	req_data = request.get_json(force=True)
	userInfo = {}
	for key,value in req_data.items():
		userInfo.__setitem__(key,value)
	response = jsonify({'User registeration status' : userLoginFunctions.userRegister(userInfo)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/userCheckLogin', methods = ['GET'])
def checkUserLogin():
	userID = request.args.get('userID')
	password = request.args.get('password')
	response = jsonify({'Status' : userLoginFunctions.userCheck(userID,password)})
	return response


@brewDay_api.route('/userProfile', methods = ['POST'])
def userProfile():
	req_data= request.get_json(force = True)
	userID = req_data['userID']
	response = jsonify({'User Details' : json.loads(userLoginFunctions.userProfile(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response




if __name__ == '__main__':
    brewDay_api.run(debug=True)
