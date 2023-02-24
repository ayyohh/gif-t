const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GifSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      
    },
    gifs: {
      type: Array,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Gif = mongoose.model("Gif", GifSchema);

module.exports = Gif;