#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError

# Local imports
from config import app, db, api
from models import User, Article, Comment

# Views go here!
class CheckSession(Resource):

    def get(self):
        user_id = session.get("user_id")
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            return user.to_dict(), 200
        else:
            return {"message": "Unauthorized"}, 401

class Login(Resource):

    def post(self):
        username = request.get_json().get('username')
        user = user = User.query.filter(User.username == username).first()

        password = username = request.get_json().get('password')
        if user:
            if user.authenticate(password):
                session["user_id"] = user.id
                return user.to_dict(), 200
            return {"error": "Invalid password"}, 401
        return {"error": "Invalid username"}, 401

class Signup(Resource): 
    
    def post(self):
        user = User(
            username=request.get_json()["username"],
        )
        user.password_hash = request.get_json()["password"]
        try:
            db.session.add(user)
            db.session.commit()
            session["user_id"] = user.id

            return user.to_dict(), 201
        except IntegrityError:
            return {"message": "Username must be unique"}, 422
        
    
class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {}, 204

class Users(Resource):
    
    def get(self):
        list = []
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401 
        for user in User.query.all():
            user_obj = user.to_dict()
            list.append(user_obj)
        return list, 200
    
class Articles(Resource):

    def get(self):
        list= []
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        for article in Article.query.all():
            article_obj = article.to_dict()
            list.append(article_obj)
        return list, 200

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


api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, "/login", endpoint="login")
api.add_resource(Signup, "/signup", endpoint="signup")
api.add_resource(Logout, "/logout", endpoint="logout")
api.add_resource(Users, "/users", endpoint="users")
api.add_resource(Articles, "/articles", endpoint="articles")
api.add_resource(Comments, "/comments", endpoint="comments")

if __name__ == '__main__':
    app.run(port=5555, debug=True)
