from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify({'users': ['Alice', 'Bob', 'Charlie']})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)