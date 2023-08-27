#!/usr/bin/env python3

# Standard library imports
from random import randint, choice as rc

# Remote library imports
from faker import Faker

# Local imports
from app import app
from config import db
from models.models import *

if __name__ == '__main__':
    fake = Faker()
    with app.app_context():
        print("Starting seed...")
        User.query.delete()
        Article.query.delete()
        Comment.query.delete()

        # Seed code goes here!
        print("--Seeding users...")
        users = []
        for i in range(30):
            user = User(
                username = fake.unique.first_name()
            )
            user.password_hash = user.username

            db.session.add(user)
            db.session.commit()

            users.append(user)

        print("--Seeding articles...")
        articles = []
        cat = ["Business", "Finance", "Economics", "Computers", "Science", "Technology", "Entertainment", "Health", "Lifestyle"]
        for i in range(100):

            article = Article(
                title = fake.sentence()[:-1].title(),
                body = fake.paragraph(nb_sentences=100),
                category = rc(cat)
            )

            db.session.add(article)
            db.session.commit()

            articles.append(article)

        comments = []
        print("--Seeding comments...")
        for i in range(300):
            user = rc(users)
            article = rc(articles)

            comment = Comment(
                content = fake.sentence(),
                user_id = user.id,
                article_id = article.id
            )

            db.session.add(comment)
            db.session.commit()

            comments.append(comment)

        print("Seed complete")

        # test these
        # user = User.query.first()
        # article = Article.query.first()
        # comment = Comment.query.first()
        # user
        # article 
        # comment
        # user.comments
        # article.comments
        # Comment.users
        # comment.articles