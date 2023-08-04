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

        # add these
        # user1 = User(username="User One")
        # user1.password_hash = "passsword"
        # db.session.add(user1)
        # db.session.commit()

        # article1 = Article(title="title", body="body")
        # db.session.add(article1)
        # db.session.commit()

        # comment1 = Comment(content="content", user_id=1, article_id=1)
        # db.session.add(comment1)
        # db.session.commit()

        # test these
        # user1
        # article1
        # comment1
        # user1.comments
        # article1.comments
        # comment1.users
        # comment1.articles