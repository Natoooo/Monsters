from monsters.models import *
from monsters.schemas import *
from flask import request, g
from monsters import app, db
from monsters.api.authToken import auth

@app.route("/comments/<id>", methods=["GET"])
@auth
def get_comment(id):
    comment = Comment.query.filter(Comment.id == id).first()
    return comment_schema.jsonify(comment)

@app.route("/comments", methods=["GET"])
@auth
def list_comment():
    comments = Comment.query.all()
    return comments_schema.jsonify(comments)

@app.route("/comments", methods=["POST"])
@auth
def create_comment():
    c = Comment(**request.json)
    c.user_id = g.user.id
    db.session.add(c)
    db.session.commit()
    return comment_schema.jsonify(c)

@app.route("/comments/<id>", methods=["PUT"])
@auth
def update_comment(id):
    updt_comment = Comment.query.filter(Comment.id == id).first_or_404()

    if updt_comment.user_id != g.user.id:
        return "", 404

    updt_comment.content = request.json['content']
    updt_comment.posted_at = request.json['posted_at']
    updt_comment.image = request.json['image']
    db.session.commit()
    return comment_schema.jsonify(updt_comment)

@app.route("/comments/<id>", methods=["DELETE"])
@auth
def delete_comment(id):
    print (id, type(id))

    dlt_comment= Comment.query.filter(Comment.id == id).first_or_404()

    if dlt_comment.user_id != g.user.id:
        return "", 404

    db.session.delete(dlt_comment)
    db.session.commit()
    return "", 200
