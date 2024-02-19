from flask import Blueprint, jsonify, request

api_blueprint = Blueprint('api', __name__)

@api_blueprint.route('/test', methods=['GET'])
def get_data():
    return jsonify({"data": "Hello from the backend!"})

@api_blueprint.route('/test', methods=['POST'])
def post_example():
    data = request.json  # Access JSON data from the request body
    return jsonify({"message": "Here is the data you just sent me", "data": data})