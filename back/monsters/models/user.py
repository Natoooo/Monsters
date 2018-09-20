from monsters import db, ma
from datetime import datetime
from sqlalchemy.orm import validates #validates = decorator

class User(db.Model):
    __tablename__ = "user"

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    password = db.Column(db.Text, nullable=False, default="")
    image = db.Column(db.Text, nullable=True)
    joined_at = db.Column(db.DateTime, nullable=True, default=datetime.utcnow())
    race = db.Column(db.Text, nullable=False)
    posts = db.relationship('Post')

    @validates('race')
    def validate_race(self, key, race):
        if race not in ['ANGEL', 'DEMON', 'GHOST', 'VAMPIRE', 'WITCH_WIZARD', 'WEREWOLF']:
            raise ValueError("race %s is not valid" %race)

        return race

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        include_fk = True
        exclude = ['password', 'posts']

user_schema = UserSchema()
users_schema = UserSchema(many=True)
