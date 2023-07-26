from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import User, Post, Comment

if __name__ == "__main__":

    engine = create_engine("sqlite:///minecraft_model.db")
    Session = sessionmaker(bind=engine)
    session = Session()

    import ipdb; ipdb.set_trace()