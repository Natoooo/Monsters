from monsters.models import *
from flask import request
from monsters import app, db

@app.route("/users/<id>", methods=["GET"])
def get_user(id):
    user = User.query.filter(User.id == id).first()
    return user_schema.jsonify(user)

@app.route("/users/<id>", methods=["PUT"])
def update_user(id):
    updt_user = User.query.filter(User.id == id).first()
    updt_user.name = request.json["name"]
    updt_user.race = request.json["race"]
    db.session.commit()
    return user_schema.jsonify(updt_user)
