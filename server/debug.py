from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import db, User, Article, Comment

if __name__ == "__main__":

    engine = create_engine("sqlite:///minecraft_model.db")
    Session = sessionmaker(bind=engine)
    session = Session()

    import ipdb; ipdb.set_trace()
    # Test these first 

    # user = User(username="User One", _password_hash="password")
    # article = Article(title="title", body="body")
    # comment = Comment(content="content", user_id=1, article_id=1)