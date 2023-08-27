# from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.hybrid import hybrid_property

# from config import db, bcrypt

# Models go here!
from .user import *
from .article import *
from .comment import *

# class User(db.Model, SerializerMixin):
#     __tablename__ = 'users'

#     serialize_rules = ('-comments.user',)

#     id = db.Column(db.Integer, primary_key=True)

#     username = db.Column(db.String, unique=True, nullable=False)
#     _password_hash = db.Column(db.String, nullable=False)

#     comments = db.relationship('Comment', backref='user')

#     @hybrid_property
#     def password_hash(self):
#         raise AttributeError

#     @password_hash.setter
#     def password_hash(self, password):
#         password_hash = bcrypt.generate_password_hash(
#             password.encode('utf-8'))
#         self._password_hash = password_hash.decode('utf-8')

#     def authenticate(self, password):
#         return bcrypt.check_password_hash(
#             self._password_hash, password.encode('utf-8'))

#     def __repr__(self):
#         return f"User(id={self.id}, " + \
#             f"username={self.username})"

# class Article(db.Model, SerializerMixin):
#     __tablename__ = 'articles'

#     serialize_rules = ('-comments.article',)

#     id = db.Column(db.Integer, primary_key=True)

#     title = db.Column(db.String)
#     body = db.Column(db.String)
#     category = db.Column(db.String, nullable=False)
#     created_at = db.Column(db.DateTime, server_default=db.func.now())
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now())

#     comments = db.relationship("Comment", backref="article")

#     def __repr__(self):
#         return f"Article(id={self.id}, " + \
#             f"title={self.title}, " + \
#             f"body={self.body})"

# class Comment(db.Model, SerializerMixin):
#     __tablename__ = 'comments'

#     serialize_rules = ('-article.comments', '-user.comments',)

#     id = db.Column(db.Integer, primary_key=True)

#     content = db.Column(db.String)
#     created_at = db.Column(db.DateTime, server_default=db.func.now())
#     updated_at = db.Column(db.DateTime, onupdate=db.func.now())

#     user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
#     article_id = db.Column(db.Integer, db.ForeignKey("articles.id"), nullable=False)

#     def __repr__(self):
#         return f"Comment(id={self.id}, " + \
#             f"content={self.content}, " + \
#             f"user_id={self.user_id}, " + \
#             f"article_id={self.article_id})"
    