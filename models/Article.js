const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;