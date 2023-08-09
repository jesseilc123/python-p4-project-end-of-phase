#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
from models import User, Article, Comment

# Views go here!
class Login(Resource):

    def post(self):

        username = request.get_json()["username"]
        user = User.query.filter(User.username == username).first()

        password = request.get_json()["password"]
        if user:
            if user.authenticate(password):
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
            user_id = session["user_id"]
            if user_id:
                user = User.query.filter(User.id == user_id).first()
                user_dict = {
                    "id": user.id,
                    "username": user.username
                }
                return user_dict, 200
            else:
                return {"message": "Unauthorized"}, 401

    
if __name__ == '__main__':
    app.run(port=5555, debug=True)
