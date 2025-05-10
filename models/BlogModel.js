import { model, Schema } from "mongoose";

export const SENTIMENT = {
  POSITIVE: "POSITIVE",
  NEGATIVE: "NEGATIVE",
  NEUTRAL: "NEUTRAL",
};

const BlogSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
  sentiment: {
    type: String,
    default: SENTIMENT.NEUTRAL,
  },
  genre: {
    type: String,
    required: true,
    default: "politics",
  },
  comments: [
    {
      text: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
      userId: {
        type: String,
        required: true,
      },
    },
  ],
});

const Blog = model("Blog", BlogSchema);

export default Blog;

