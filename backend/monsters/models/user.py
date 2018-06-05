#Don't forget to import what I need => 2 variables (db & ma ) that store SQLAlchemy and Marshmallow instances with app in parameter. "app" = my flask app
#After that, I have all I need to create my user class with all my columns and relationship

from monsters import db, ma
from datetime import datetime
from sqlalchemy.orm import validates #validates = decorator

class User(db.Model):
#The baseclass for all models is called db.Model
#It’s stored on the SQLAlchemy instance I created
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    email = db.Column(db.Text, unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False)
    joined_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow())
    race = db.Column(db.Text, nullable=False)
    posts = db.relationship('Post')

    @validates('race')
    def validate_race(self, key, race):
        if race not in ['ANGEL', 'DEMON', 'GHOST', 'VAMPIRE', 'WITCH_WIZARD', 'WEREWOLF']:
            raise ValueError("race %s is not valid" % race)

        return race

class UserSchema(ma.ModelSchema): #cf serialisation marshmallow
    class Meta:
        model = User
        include_fk = True #fk= foreignKey.

user_schema = UserSchema()
users_schema = UserSchema(many=True)
