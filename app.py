
import os
from flask import Flask, render_template, abort, url_for, json, jsonify
import json
import html

app = Flask(__name__)



with open('draugi.json', encoding="utf-8-sig") as f:
  data = json.load(f)

print(data)
@app.route("/")
def index():
    return render_template('index.html', data=json.dumps(data))


if __name__ == '__main__':
    app.run(debug=True)
