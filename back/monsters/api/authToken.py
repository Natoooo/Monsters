from monsters.models import *
from monsters import app, db
from flask import request, g, jsonify
import uuid

def auth(fn):
    def f(**kwargs):
        token = AuthToken.query.filter(AuthToken.token == request.headers.get('X-Authenticate', "")).first()

        if not token:
            return "", 401

        g.user = token.user
        g.token = token
        return fn(**kwargs)

    f.__name__ = fn.__name__
    return f


@app.route("/login", methods=["POST"])
def login():
    user = User.query.filter(User.email == request.json.get('email', '')).first()

    if not user:
        print("no user")
        return "", 401

    if user.password != request.json.get('password', ''):
        print("wrong password")
        return "", 401

    token = AuthToken(user=user, token=str(uuid.uuid4()))
    db.session.add(token)
    db.session.commit()
    return jsonify({'token': token.token})

@app.route("/logout", methods=["DELETE"])
@auth
def logout():
    token = AuthToken.query.filter(AuthToken.user_id == g.user.id).first_or_404()

    db.session.delete(token)
    db.session.commit()
    return "", 200
