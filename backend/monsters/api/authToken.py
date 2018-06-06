from monsters.models import *
from monsters import app, db
from flask import request, g, jsonify
import uuid #unique id

@app.route("/login", methods=["POST"])
def login():
    user = User.query.filter(User.name == request.json.get('user', '')).first()

    if not user:
        return "", 401

    if user.password != request.json.get('password', ''):
        return "", 401

    token = AuthToken(user=user, token=str(uuid.uuid4())) #unique and difficult to guess
    db.session.add(token)
    db.session.commit()
    return jsonify({'token': token.token})

@app.route("/logout")
def logout():
    token = AuthToken.query.filter(AuthToken.token == request.headers.get('X_Authentificate', "")).first()

    if not token:
        return "", 401

    db.session.delete(g.token)
    db.session.commit()
    return "", 200

def auth(fn):
    def f(**kwargs):
        token = AuthToken.query.filter(AuthToken.token == request.headers.get('X-Authenticate', "")).first()

        if not token:
            return "", 401

        g.user = token.user
        g.token = token
        return fn(**kwargs)

    f.__name__ = fn.__name__ #to have a unique function name
    return f
    #Have to return the called function with its parameters
