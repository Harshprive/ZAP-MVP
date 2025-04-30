# app/config.py
import os
from dotenv import load_dotenv

load_dotenv()  # load environment variables from .env file

class Config:
    MONGO_URI = "mongodb://localhost:27017/auth_db"
    JWT_SECRET_KEY = "your-secret-key"
