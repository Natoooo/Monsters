from monsters import ma
from marshmallow import fields
from monsters.models import Comment

class CommentSchema(ma.ModelSchema):
    class Meta:
        model = Comment
        include_fk = True

comment_schema = CommentSchema()
comments_schema = CommentSchema(many=True)
