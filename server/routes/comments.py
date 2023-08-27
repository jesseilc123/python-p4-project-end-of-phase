from flask_restful import Resource
from flask import request, session

from models.models import Comment, User
from config import api, db

class Comments(Resource):
    
    def get(self):
        list = []
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        
        user = User.query.filter(User.id == user_id).first()
        for comment in user.comments:
            com_obj = comment.to_dict()
            list.append(com_obj)
        return list, 200
    
    def post(self):
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        new_comment = Comment(
           content=request.get_json()["content"],
           article_id=request.get_json()["article_id"]
        )
        new_comment.user_id = user_id

        db.session.add(new_comment)
        db.session.commit()

        return new_comment.to_dict(), 201
    
    def patch(self):
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        id = request.get_json()["id"]

        comment = Comment.query.filter(Comment.id == id).first()
        setattr(comment, "content", request.get_json()["content"])
        
        db.session.add(comment)
        db.session.commit()

        return comment.to_dict(), 201   

    def delete(self):
        comment = Comment.query.filter(Comment.id == request.get_json()["id"]).first()

        db.session.delete(comment)
        db.session.commit()

        return {"message": "comment successfully deleted"}, 200
    
api.add_resource(Comments, "/comments", endpoint="comments")