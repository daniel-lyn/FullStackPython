from flask import Flask
from other_module import fn_from_module

app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello, World!"

if __name__ == "__main__":
    app.run(debug=True,host="0.0.0.0",port=5050)