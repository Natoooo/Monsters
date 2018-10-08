from monsters.models import *
from monsters.schemas import *
from flask import request, g
from monsters import app, db
from monsters.api.authToken import auth

@app.route("/likes/<id>", methods=["GET"])
@auth
def get_like(id):
    like = Like.query.filter(like.id == id).first()
    return like_schema.jsonify(like)

@app.route("/likes", methods=["GET"])
@auth
def list_like():
    likes = Like.query.all()
    return likes_schema.jsonify(likes)

@app.route("/likes", methods=["POST"])
@auth
def create_like():
    l = Like(**request.json)
    l.user_id = g.user.id
    db.session.add(l)
    db.session.commit()
    return like_schema.jsonify(l)

@app.route("/likes/<id>", methods=["DELETE"])
@auth
def delete_like(id):
    dlt_like = Like.query.filter(Like.id == id).first_or_404()

    if dlt_like.user_id != g.user.id:
        return "", 404

    db.session.delete(dlt_like)
    db.session.commit()
    return "", 200
