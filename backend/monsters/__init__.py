#Create my Flask application, adding an instance of SQLAlchimy and a Marshmallow one
#Don't forget to import what I need, to create my flask app

from flask import Flask
from flask_marshmallow import Marshmallow
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:////tmp/monsters.db' #no problem if I call it the same way as pytodo ?
app.config['SQLALCHEMY_ECHO'] = True # Print all SQL statements in the console
app.config['FLASK_DEBUG'] = 1 #debbug mode   

db = SQLAlchemy(app)
ma = Marshmallow(app)
