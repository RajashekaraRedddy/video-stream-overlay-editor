from flask import Flask, request, jsonify
from flask_cors import CORS
from overlays import create_overlay, get_all_overlays, update_overlay, delete_overlay

app = Flask(__name__)
CORS(app)

@app.route("/api/overlays", methods=["POST"])
def create():
    data = request.json
    oid = create_overlay(data)
    return jsonify({"id": oid}), 201

@app.route("/api/overlays", methods=["GET"])
def read_all():
    return jsonify(get_all_overlays()), 200

@app.route("/api/overlays/<id>", methods=["PUT"])
def update(id):
    data = request.json
    update_overlay(id, data)
    return jsonify({"ok": True}), 200

@app.route("/api/overlays/<id>", methods=["DELETE"])
def delete(id):
    delete_overlay(id)
    return jsonify({"ok": True}), 200

if __name__ == "__main__":
    app.run(debug=True)
