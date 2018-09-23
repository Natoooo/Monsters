from monsters import ma
from marshmallow import fields
from .user import UserSchema
from monsters.models import Post

class PostSchema(ma.ModelSchema):
    user = fields.Nested(UserSchema, only=['id', 'name'])

    class Meta:
        model = Post
        include_fk = True
        exclude = ['user_id']

post_schema = PostSchema()
posts_schema = PostSchema(many=True)
