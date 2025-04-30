from app.extensions import mongo
from werkzeug.security import generate_password_hash, check_password_hash

def register_user(data):
    email = data.get("email")
    password = data.get("password")
    name = data.get("name")

    if mongo.db.users.find_one({"email": email}):
        return {"msg": "Email already exists"}, 400

    hashed_password = generate_password_hash(password)
    mongo.db.users.insert_one({
        "name": name,
        "email": email,
        "password": hashed_password
    })
    return {"msg": "User registered successfully"}, 201

def login_user(data):
    email = data.get("email")
    password = data.get("password")
    user = mongo.db.users.find_one({"email": email})

    if user and check_password_hash(user["password"], password):
        return user
    return None
