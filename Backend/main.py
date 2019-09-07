
from flask import Flask, jsonify, request, Blueprint


brewDay_api = Flask(__name__)

@brewDay_api.route('/')
def indexPage():
	return 'Hello, This is Brew Day'

if __name__ == '__main__':
    brewDay_api.run(debug=True)