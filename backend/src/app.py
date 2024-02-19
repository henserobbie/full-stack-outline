from flask import Flask
from flask_cors import CORS
from api import api_blueprint

app = Flask(__name__)
CORS(app)
app.register_blueprint(api_blueprint, url_prefix='/api')

@app.route('/')
def hello_world():
    return 'Hello, World! - Backend'

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
