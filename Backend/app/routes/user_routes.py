from flask import Blueprint, request, jsonify
from flask_jwt_extended import create_access_token
from app.services.user_service import register_user, login_user

user_bp = Blueprint("user_bp", __name__)

@user_bp.route('/register', methods=['POST'])
def register():
    data = request.json
    return register_user(data)

@user_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    user = login_user(data)
    if not user:
        return jsonify({"msg": "Invalid credentials"}), 401

    access_token = create_access_token(identity=str(user["_id"]))
    return jsonify({
        "access_token": access_token,
        "user": {
            "name": user["name"],
            "email": user["email"]
        }
    }), 200
