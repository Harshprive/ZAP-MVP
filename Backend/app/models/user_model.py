from app.extensions import mongo

def get_user_by_email(email):
    return mongo.db.users.find_one({"email": email})
