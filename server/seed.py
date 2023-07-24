#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from models import db

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        # Seed code goes here!

        # Test these first 

        # user = User(username="User One", password_hash="password")
        # post = Post(body="body", user_id=1 )
        # comment = Comment(content="content", user_id=1, post_id=1)