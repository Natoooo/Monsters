from monsters.models import *
from monsters.schemas import *
from flask import request, g
from monsters import app, db
from monsters.api.authToken import auth
import sqlalchemy as sqla


@app.route("/users/<id>", methods=["GET"])
@auth
def get_user(id):
	user = User.query.filter(User.id == id).first()
	return user_schema.jsonify(user)

@app.route("/users/me", methods=["GET"])
@auth
def get_me():
	user = User.query.filter(User.id == g.user.id).first()
	return user_schema.jsonify(user)

@app.route("/users", methods=["GET"])
@auth
def list_users():
	q = User.query

	if 'race' in request.args:
		q = q.filter(User.race == request.args['race'])

	if 'name' in request.args:
		q = q.filter(sqla.func.lower(User.name).like("%" + request.args['name'].lower() + "%"))

	if 'age' in request.args:
		q = q.filter(User.age == request.args['age'])

	order_ops= {
		'asc': sqla.asc,
		'desc': sqla.desc
	}

	order = order_ops.get(request.args.get('order_op', 'asc'), None)

	if order == None:
		return "", 400

	q = q.order_by(order(request.args.get('order_by', 'name')))
	q = q.limit(int(request.args.get('page_size', 5)))
	q = q.offset(int(request.args.get('page_size', 5)) * int(request.args.get('page', 0)))
	return users_schema.jsonify(q.all())

@app.route("/users/<id>", methods=["PUT"])
@auth
def update_user(id):
	if int(id) != g.user.id:
		return "", 403

	updt_user = User.query.filter(User.id == id).first_or_404()
	updt_user.name = request.json['name']
	updt_user.race = request.json["race"]
	updt_user.age = request.json["age"]
	db.session.commit()
	return user_schema.jsonify(updt_user)
