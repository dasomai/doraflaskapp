#flask app here


import json
from chatbot import chatbot_response
from flask import Flask, render_template, request, jsonify
from flask import send_from_directory


app = Flask(__name__)
app.static_folder = 'static'

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/haha")
def hello():
    return "haha, This is Daso"

@app.route("/corgi")
def corgi():
    return render_template("corgi.html")


# @app.route("/get")
# def get_bot_response():
#     userText = request.args.get('msg')
#     return chatbot_response(userText)

# @app.route("/receiver", methods=["POST"])
# def postME():
#    data = request.get_json()
#    data = jsonify(data)
#    return data

# @app.route("/get")
# def get_bot_response():
#     userText = request.args.get('msg')
#     chatrep =  chatbot_response(userText)
#     return jsonify(chatrep)

@app.route('/processUserInfo/<string:userInfo>', methods=['POST'])
def processUserInfo(userInfo):
    userInfo = json.loads(userInfo)
    print()
    print('USER INFO RECEIVED')
    print('-----------')
    print(f"User Name: {userInfo['name']}")
    print(f"User Type: {userInfo['type']}")
    print(f"User rep: {userInfo['rep']}")


    print()
    chatrep = chatbot_response(userInfo['rep'])
    return chatrep

if __name__ == "__main__":
    app.run()