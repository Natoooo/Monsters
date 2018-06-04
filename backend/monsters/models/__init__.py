#Create my Flask application, adding an instance of SQLAlchimy and a Marshmallow one
#Don't forget to import what I need, to create my flask app

from flask import Flask
from flask-marshmallow import Marshmallow
from flask-sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/app.db'
app.config['SQLALCHEMY_ECHO'] = True
app.config['FLASK_DEBUG'] = 1

db = SQLAlchemy(app)
ma = Marshmallow(app)
