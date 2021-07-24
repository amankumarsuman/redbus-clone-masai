const mongoose = require("mongoose");

const dropBoardSchema = new mongoose.Schema({
    id: { type: Number},
    city: { type: String},
    state: { type: String },
    q: { type: String },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("DropBoards", dropBoardSchema);
