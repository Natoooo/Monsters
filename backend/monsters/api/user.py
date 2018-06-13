from monsters.models import *
from flask import request, g
from monsters import app, db
from monsters.api.authToken import auth

@app.route("/users/<id>", methods=["GET"])
@auth
def get_user(id):
	user = User.query.filter(User.id == id).first()
	return user_schema.jsonify(user)

@app.route("/users", methods=["GET"])
@auth
def list_users():
    users = User.query.all()
    return users_schema.jsonify(users)

@app.route("/users/<id>", methods=["PUT"])
@auth
def update_user(id):
	if int(id) != g.user.id:
		return "", 403

	updt_user = User.query.filter(User.id == id).first_or_404()
	updt_user.name = request.json['name']
	updt_user.race = request.json["race"]
	db.session.commit()
	return user_schema.jsonify(updt_user)
