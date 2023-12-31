from config import db, bcrypt
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-comments.user',)

    id = db.Column(db.Integer, primary_key=True)

    username = db.Column(db.String, unique=True, nullable=False)
    _password_hash = db.Column(db.String)

    comments = db.relationship('Comment', backref='user')

    @hybrid_property
    def password_hash(self):
        raise AttributeError

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    @validates("username")
    def check_username(self, key, username):
        if (not username):
            raise ValueError({"message": "Username must exist"})

        return username

    def __repr__(self):
        return f"User(id={self.id}, " + \
            f"username={self.username})"