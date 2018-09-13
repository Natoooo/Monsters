from monsters import db, ma
from datetime import datetime

class Post(db.Model):
    __tablename__ = "post"

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.Text, nullable=False)
    content = db.Column(db.Text, nullable=False)
    image = db.Column(db.Text, nullable=True)#image optional
    posted_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

class PostSchema(ma.ModelSchema):
    class Meta:
        model = Post
        include_fk = True

post_schema = PostSchema()
posts_schema = PostSchema(many=True)
