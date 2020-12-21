const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    sender_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    receiver_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true
    },
    message: {
      type: String,
      trim: true,
      maxlength: 500
    }
  },
  {
    timestamps: true
  }
);
module.exports = mongoose.model("message", MessageSchema);
