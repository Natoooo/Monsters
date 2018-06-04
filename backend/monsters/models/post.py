#Don't forget to import what I need => 2 variables (db & ma ) that store SQLAlchemy and Marshmallow instances with app in parameter. "app" = my flask app
#After that, I have all I need to create my post class with all my columns

from monsters import db, ma
from datetime import datetime

class Post(db.Model):
#The baseclass for all models is called db.Model

    __tablename__ = "post"

    id = db.Column(db.Integer, primary_key=True)
    # primary_key = must correspond to a uniquely identifiable row in the database table
    title = db.Column(db.Text, nullable=False)
    #nullable = When set to False, will cause the “NOT NULL” phrase to be added when generating DDL for the column.
    content = db.Column(db.Text, nullable=False)
    image = db.Column(db.Text, nullable=True)#image optional
    posted_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow())
    ##nullale = When True, will normally generate nothing (in SQL this defaults to “NULL”)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    #ForeignKey = relationship with one key-value of the User class (for a post created and 'signed" by the good user)

class PostSchema(ma.ModelSchema):
    class Meta:
        model = Post
        include_fk = True #fk= foreignKey.

post_schema = PostSchema()
posts_schema = PostSchema(many=True)
