#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, session
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Article, Comment

# Views go here!
class Login(Resource):

    def post(self):

        user = User.query.filter(User.username == request.get_json()["username"]).first()

        if user:
            if user.authenticate(user.password):
                session["user_id"] = user.id
                user_dict = {
                    "id": user.id,
                    "username": user.username
                }
                return user_dict, 200
            return {"error": "Invalid password"}, 401
        return {"error": "Invalid username"}, 401
    
class CheckSession(Resource):

    def get(self):
        user_id = session.get("user_id")
        if user_id:
            user = User.query.filter(User.id == user_id).first()
            user_dict = {
                "id": user.id,
                "username": user.username,
            }
            return user_dict, 200
        else:
            return {"message": "Unauthorized"}, 401

api.add_resource(Login, "/login", endpoint="login")
api.add_resource(CheckSession, '/check_session', endpoint='check_session')  

if __name__ == '__main__':
    app.run(port=5555, debug=True)
