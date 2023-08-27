from flask_restful import Resource
from flask import request, session

from models.models import Article
from config import api, db

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
    
    def post(self):
        user_id = session.get("user_id")
        if not user_id:
            return {"message": "Unauthorized"}, 401
        new_article = Article(
            title=request.get_json()["title"],
            body=request.get_json()["body"],
            category=request.get_json()["category"],
        )

        db.session.add(new_article)
        db.session.commit()

        return new_article.to_dict(), 201
    
api.add_resource(Articles, "/articles", endpoint="articles")