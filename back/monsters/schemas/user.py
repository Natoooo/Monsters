from monsters import ma
from marshmallow import fields
from monsters.models import User

class UserSchema(ma.ModelSchema):
    class Meta:
        model = User
        include_fk = True
        exclude = ['password', 'posts']

user_schema = UserSchema()
users_schema = UserSchema(many=True)
