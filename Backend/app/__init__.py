from flask import Flask
from app.config import Config
from app.extensions import mongo, jwt
from flask_cors import CORS

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    mongo.init_app(app)
    jwt.init_app(app)
    CORS(app)

    from app.routes.user_routes import user_bp
    app.register_blueprint(user_bp, url_prefix="/api/user")

    return app
