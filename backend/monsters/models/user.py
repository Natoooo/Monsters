#Don't forget to import what I need => 2 variables (db & ma ) that store SQLAlchemy and Marshmallow instances with app in parameter. "app" = my flask app
#After that, I have all I need to create my user class with all my columns and relationship

from pytodo import db, ma
import enum

class Race(enum.Enum):
#enum = to list specific races
    angel = 1
    demon = 2
    gost = 3
    vampire = 4
    witch/wizard = 5
    werewolf = 6

class User(db.Model):
#The baseclass for all models is called db.Model.
#It’s stored on the SQLAlchemy instance I created
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False, default='')
    joined_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow())
    race = db.Column(db.Enum(Race))
    post = db.relationship('Post')

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        include_fk = True #fk= foreignKey.

user_schema = UserSchema()
users_schema = UserSchema(many=True)
