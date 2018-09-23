from monsters.models import *
from monsters.schemas import *
from flask import request, g
from monsters import app, db
from monsters.api.authToken import auth

@app.route("/posts/<id>", methods=["GET"])
@auth
def get_post(id):
    post = Post.query.filter(Post.id == id).first()
    return post_schema.jsonify(post)

@app.route("/posts", methods=["GET"])
@auth
def list_post():
    posts = Post.query.all()
    return posts_schema.jsonify(posts)

@app.route("/posts", methods=["POST"])
@auth
def create_post():
    p = Post(**request.json)
    p.user_id = g.user.id
    db.session.add(p)
    db.session.commit()
    return post_schema.jsonify(p)

@app.route("/posts/<id>", methods=["PUT"])
@auth
def update_post(id):
    updt_post = Post.query.filter(Post.id == id).first_or_404()

    if updt_post.user_id != g.user.id:
        return "", 404

    updt_post.title = request.json['title']
    updt_post.content = request.json['content']
    updt_post.image = request.json['image']
    db.session.commit()
    return post_schema.jsonify(updt_post)

@app.route("/posts/<id>", methods=["DELETE"])
@auth
def delete_post(id):
    print (id, type(id))

    dlt_post = Post.query.filter(Post.id == id).first_or_404()

    if dlt_post.user_id != g.user.id:
        return "", 404

    db.session.delete(dlt_post)
    db.session.commit()
    return "", 200
