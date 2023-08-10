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
    
class Logout(Resource):

    def delete(self):
        session['user_id'] = None
        return {}, 204

api.add_resource(CheckSession, '/check_session', endpoint='check_session')
api.add_resource(Login, "/login", endpoint="login")
api.add_resource(Logout, "/logout", endpoint="logout")

if __name__ == '__main__':
    app.run(port=5555, debug=True)
