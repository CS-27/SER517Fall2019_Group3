
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

# Return the recipe information provided by app coordinator
@brewDay_api.route('/showRecipe', methods = ['GET'])
def showRecipe():
	recipeName = request.args.get('recipeName')
	response = jsonify({'recipeList': json.loads(recipeFunctions.showRecipeByName(recipeName))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# adds a recipe to the default table(recipe_info) available to every brewer
@brewDay_api.route('/addRecipe', methods = ['POST'])
def addRecipeInfo():
    req_data = request.get_json(force=True)
    recipeList = {}
    for key,value in req_data.items():
    	recipeList.__setitem__(key,value)
    response = jsonify({'Recipe Status': recipeFunctions.addRecipe(recipeList)})
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response


# Deletes the recipe provided by app coordinator
@brewDay_api.route('/deleteRecipeAdmin', methods = ['POST'])
def deleteRecipeAdmin():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key,value in req_data.items():
		recipeList.__setitem__(key,value)
	response = jsonify({'Recipe delete status' : recipeFunctions.deleteRecipeAdmin(recipeList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/deleteRecipe', methods = ['POST'])
def deleteRecipeUser():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key,value in req_data.items():
		recipeList.__setitem__(key,value)
	userID = recipeList['userID']
	del recipeList['userID']
	response = jsonify({'Recipe delete status' : recipeFunctions.deleteRecipeUser(userID,recipeList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Returns the list of ingredients needed to brew any default recipe.
@brewDay_api.route('/showRecipeIngredients', methods = ['GET'])
def showRecipeingredients():
	recipeName = request.args.get('recipeName')
	response = jsonify({'Recipe Ingredient List': json.loads(recipeFunctions.recipeIngredients(recipeName))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Return the list of recipes the user can brew based on the ingredients brewer has.
@brewDay_api.route('/allRecipes', methods = ['GET'])
def showAllRecipes():
	response = jsonify({'All Recipes' : json.loads(recipeFunctions.allRecipes())})
	return response


# Creates a user specific recipe
@brewDay_api.route('/myRecipes', methods = ['POST'])
def myRecipes():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key, value in req_data.items():
		recipeList.__setitem__(key,value)
	userID = recipeList['userID']
	name = recipeList['name']
	del recipeList['userID']
	if name != "":
	    response = jsonify({'Recipe addition status' : recipeFunctions.createUserRecipes(userID, recipeList)})
	    response.headers.add('Access-Control-Allow-Origin', '*')
	    return response
	return false


# Return the list of recipes the user can brew based on the ingredients brewer has.
@brewDay_api.route('/whatCanIBrewToday', methods = ['POST','GET'])
def whatCanIBrewToday():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key, value in req_data.items():
		recipeList.__setitem__(key,value)
	userID = recipeList['userID']
	del recipeList['userID']
	response = jsonify({'Recipe addition status' : recipeFunctions.whatiCanBrewToday(userID)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Search a recipe using regular expression
@brewDay_api.route('/recipeSearch', methods = ['GET'])
def recipeSearch():
	req_data = request.args.get('recipeName')
	response = jsonify({'Recipe List' : json.loads(recipeFunctions.searchRecipe(req_data))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/viewMyRecipes', methods = ['GET'])
def viewMyRecipes():
	req_data = request.args.get('userID')
	response = jsonify({'My Recipe List' : json.loads(recipeFunctions.viewUserRecipes(req_data))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Returns user specific created, modified or brewed recipes
@brewDay_api.route('/viewMyRecipe', methods = ['GET'])
def viewMyRecipe():
	uID = request.args.get('userID')
	recipeName = request.args.get('recipeName')
	response = jsonify({'Recipe Info' : json.loads(recipeFunctions.viewUserRecipe(uID, recipeName))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Enter the particular beer in the brewing beer database
@brewDay_api.route('/brewingBeer', methods = ['POST'])
def brewingBeer():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key, value in req_data.items():
		recipeList.__setitem__(key,value)
	userID = recipeList['userID']
	del recipeList['userID']
	response = jsonify({'Recipe addition status' : recipeFunctions.brewBeer(userID, recipeList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# updates the brewing status of the brewing beer( from status 1->2, 2->3)
# changes the beerStatus and lastModified attribute of the brewing beer
@brewDay_api.route('/brewBeerUpdate', methods = ['POST'])
def brewBeerUpdate():
	req_data = request.get_json(force = True)
	recipeList = {}
	for key, value in req_data.items():
		recipeList.__setitem__(key,value)
	userID = recipeList['userID']
	del recipeList['userID']
	response = jsonify({'Recipe addition status' : recipeFunctions.brewBeerUpdate(userID, recipeList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

# # # # Equipment Functions # # # # 


# Function return the equipments of the particular user
@brewDay_api.route('/showEquipment', methods = ['GET'])
def showEquiment():
	userID = request.args.get('userID')
	response = jsonify({'equipmentList' : json.loads(equipmentFunctions.showEquipment(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# adds the equipments to particular userID
@brewDay_api.route('/addEquipment', methods = ['POST'])
def addEquipment():
	req_data = request.get_json(force=True)
	equipmentList = {}
	for key,value in req_data.items():
		equipmentList.__setitem__(key,value)
	response = jsonify({'Equipment Status': equipmentFunctions.addEquipment(equipmentList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# overrides the equipment quantity to the new value
@brewDay_api.route('/updateEquipment', methods = ['POST'])
def updateEquipment():
	req_data = request.get_json(force = True)
	ingList = {}
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Equipment Update status' : equipmentFunctions.updateEquipmentQuantity(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


#  adds up with the previous quantity present.
@brewDay_api.route('/addMoreEquipment', methods = ['POST'])
def addMoreEquipment():
	req_data = request.get_json(force = True)
	ingList = {}
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Equipment Update status' : equipmentFunctions.addMoreEquipmentQuantity(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/deleteEquipment', methods = ['POST'])
def deleteEquipment():
	req_data = request.get_json(force = True)
	ingList = {}
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
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Ingredient Update status' : ingredientFunctions.updateIngredientQuantity(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/addMoreIngredient', methods = ['POST'])
def addMoreIngredient():
	req_data = request.get_json(force = True)
	ingList = {}
	for key,value in req_data.items():
		ingList.__setitem__(key,value)
	userID = ingList['userID']
	del ingList['userID']
	response = jsonify({'Ingredient Update status' : ingredientFunctions.addMoreIngredientQuantity(userID,ingList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


@brewDay_api.route('/deleteIngredient', methods = ['POST'])
def deleteIngredient():
	req_data = request.get_json(force = True)
	ingList = {}
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
	userID = shoppingList['userID']
	del shoppingList['userID']
	addshoplistStatus = shoppingListFunctions.addShoppingList(userID, shoppingList)
	response = jsonify({'Shopping List Status':addshoplistStatus })
	response.headers.add('Access-Control-Allow-Origin', '*')
	if addshoplistStatus:
		return response
	else:
		return response,201


# Returns the shopping list of any particular user
@brewDay_api.route('/showShoppingList', methods = ['GET'])
def showShoppingList():
	userID = request.args.get('userID')
	response = jsonify({'ShoppingList' : json.loads(shoppingListFunctions.showShoppingList(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Overides the quantity of any particular item present in the shopping list
@brewDay_api.route('/updateShoppingList', methods = ['POST'])
def updateShopList():
	req_data = request.get_json(force = True)
	shopList = {}
	for key,value in req_data.items():
		shopList.__setitem__(key,value)
	userID = shopList['userID']
	del shopList['userID']
	response = jsonify({'Shop List Update status' : shoppingListFunctions.updateShoppingList(userID,shopList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Adds the new quantity to the quatity of the item previously in the shopping list
@brewDay_api.route('/addMoreShoppingList', methods = ['POST'])
def addMoreShopList():
	req_data = request.get_json(force = True)
	shopList = {}
	for key,value in req_data.items():
		shopList.__setitem__(key,value)
	userID = shopList['userID']
	del shopList['userID']
	response = jsonify({'Shop List Update status' : shoppingListFunctions.addMoreShoppingList(userID,shopList)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

# Deletes the item from the shopping list
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

# Creates an autoshopping list for items less than particular quantity
# Only the items not in shop list will be added.
@brewDay_api.route('/createAutoShopList', methods= ['GET'])
def createASL():
	userID = request.args.get('userID')
	response = jsonify({'Auto ShoppingList' : json.loads(shoppingListFunctions.createAutoShopList(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# There will be uniques items combining shop list and auto shop list
# if the user will try to add any item in the shop list and it is already present in shop list or auto shop list 
# it will not be updated, user has to go to the view shop list and change the quantity.
@brewDay_api.route('/addIngredientsShoppingList', methods = ['POST'])
def addIngredientsShoppingList():
	req_data = request.get_json(force=True)
	shoppingList = {}
	userID = req_data["userID"]
	for hop in req_data["hops"]:
		print(hop)
		hopArr = hop.split(":")
		name = hopArr[0].strip()
		quantity = hopArr[1].strip()
		shoppingList.__setitem__(name,quantity)
	addshoplistStatus = shoppingListFunctions.addShoppingList(userID, shoppingList)
	response = jsonify({'Shopping List Status': addshoplistStatus })
	response.headers.add('Access-Control-Allow-Origin', '*')
	if addshoplistStatus:
		return response
	else:
		return response,201

	return response


# Moves an item from the autoshopping list to shopping list
@brewDay_api.route('/movetToShopList', methods = ['POST'])
def moveToShopList():
	req_data = request.get_json(force = True)
	userID = req_data['userID']
	del req_data['userID']
	response = jsonify({'Auto ShoppingList' : json.loads(shoppingListFunctions.moveToShoppingList(userID, req_data))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# Moves the items shopped to the ingredient list with the respective quantity shopped
# Removes the item from the shopping list
@brewDay_api.route('/updatedList', methods = ['POST'])
def itemsShopped():
	req_data = request.get_json(force = True)
	userID = req_data['userID']
	del req_data['userID']
	response = jsonify({'Auto ShoppingList' : shoppingListFunctions.itemsShopped(userID, req_data)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response


# # # # user registeration/login/session Functions # # # # 

# Register a user in the application
@brewDay_api.route('/userRegister', methods = ['POST'])
def userRegister():
	req_data = request.get_json(force=True)
	userInfo = {}
	for key,value in req_data.items():
		userInfo.__setitem__(key,value)
	response = jsonify({'User registeration status' : userLoginFunctions.userRegister(userInfo)})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

# Checks if the username and password provided are correct or not for login
@brewDay_api.route('/userCheckLogin', methods = ['GET'])
def checkUserLogin():
	userID = request.args.get('userID')
	password = request.args.get('password')
	response = jsonify({'Status' : userLoginFunctions.userCheck(userID,password)})
	return response

# Returns the information for any brewer registered in the application
@brewDay_api.route('/userProfile', methods = ['POST'])
def userProfile():
	req_data= request.get_json(force = True)
	userID = req_data['userID']
	response = jsonify({'User Details' : json.loads(userLoginFunctions.userProfile(userID))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response

# Search for any registered brewer based on the regex provided.
@brewDay_api.route('/userSearch', methods = ['GET'])
def userSearch():
	req_data = request.args.get('user')
	response = jsonify({'User Details' : json.loads(userLoginFunctions.searchUser(req_data))})
	response.headers.add('Access-Control-Allow-Origin', '*')
	return response	




if __name__ == '__main__':
    brewDay_api.run(debug=True)
