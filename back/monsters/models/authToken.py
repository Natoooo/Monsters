from monsters import db, ma

class AuthToken(db.Model):
    __tablename__ = "authToken"

    id = db.Column(db.Integer, primary_key=True)
    token = db.Column(db.Text, nullable=False, unique=True)
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"), nullable=False)
    user = db.relationship("User")

class AuthTokenSchema(ma.ModelSchema):
    class Meta:
        model = AuthToken
        include_fk = True

authToken_schema = AuthTokenSchema()
authTokens_schema = AuthTokenSchema(many=True)
