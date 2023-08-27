from config import db
from sqlalchemy_serializer import SerializerMixin

class Article(db.Model, SerializerMixin):
    __tablename__ = 'articles'

    serialize_rules = ('-comments.article',)

    id = db.Column(db.Integer, primary_key=True)

    title = db.Column(db.String)
    body = db.Column(db.String)
    category = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    comments = db.relationship("Comment", backref="article")

    def __repr__(self):
        return f"Article(id={self.id}, " + \
            f"title={self.title}, " + \
            f"body={self.body})"