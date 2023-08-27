from config import db
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.orm import validates

class Comment(db.Model, SerializerMixin):
    __tablename__ = 'comments'

    serialize_rules = ('-article.comments', '-user.comments',)

    id = db.Column(db.Integer, primary_key=True)

    content = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    article_id = db.Column(db.Integer, db.ForeignKey("articles.id"), nullable=False)

    @validates("content")
    def check_content(self, key, content):
        if (not content):
            raise ValueError({"message": "Content must exist"})
        return content

    def __repr__(self):
        return f"Comment(id={self.id}, " + \
            f"content={self.content}, " + \
            f"user_id={self.user_id}, " + \
            f"article_id={self.article_id})"