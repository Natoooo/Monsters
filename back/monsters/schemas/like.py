from monsters import ma
from marshmallow import fields
from monsters.models import Like

class LikeSchema(ma.ModelSchema):
    class Meta:
        model = Like
        include_fk = True

like_schema = LikeSchema()
likes_schema = LikeSchema(many=True)
