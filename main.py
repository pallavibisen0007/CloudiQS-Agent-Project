from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def home():
    return {
        "message": "CloudiQS Agent Backend is Running Successfully!"
    }