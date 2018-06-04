#Create my Flask application, adding an instance of SQLAlchimy and a Marshmallow one
#Don't forget to import what I need, to create my flask app

from flask import Flask
from flask-marshmallow import Marshmallow
from flask-sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/app.db' #no problem if I call it the same way as pytodo ?
app.config['SQLALCHEMY_ECHO'] = True # What is the meaning of this line
app.config['FLASK_DEBUG'] = 1 #same

db = SQLAlchemy(app)
ma = Marshmallow(app)
