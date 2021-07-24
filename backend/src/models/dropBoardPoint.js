const mongoose = require("mongoose");

const dropBoardSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    // q: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("DropBoards", dropBoardSchema);
