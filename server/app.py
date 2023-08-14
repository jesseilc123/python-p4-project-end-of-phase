#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

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

        db.session.add(user)
        db.session.commit()

        # user_dict = {"id": user.id, "username": user.username}
        return user.to_dict(), 201
    
class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {}, 204
    
class Articles(Resource):

    def get(self):
        list= []
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        for article in Article.query.all():
            article_obj = {
                "title": article.title,
                "body": article.body,
                "category": article.category
            }
            list.append(article_obj)
        return list, 200

class ArticleIndex(Resource):

    def get(self):
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        

class Comments(Resource):
    pass
    
api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, "/login", endpoint="login")
api.add_resource(Signup, "/signup", endpoint="signup")
api.add_resource(Logout, "/logout", endpoint="logout")
api.add_resource(Articles, "/articles", endpoint="articles")
api.add_resource(ArticleIndex, "/articles", endpoint=":id")

if __name__ == '__main__':
    app.run(port=5555, debug=True)
