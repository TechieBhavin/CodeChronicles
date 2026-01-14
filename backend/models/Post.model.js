import mongoose from "mongoose";
import slugify from "slugify";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },

    content: {
      type: String,
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },

    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },

    readTime: {
      type: Number,
    },
  },
  { timestamps: true }
);

// ✅ AUTO SLUG + READ TIME (NO next())
PostSchema.pre("save", function () {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true });
  }

  if (this.isModified("content")) {
    const wordsPerMinute = 200;
    const words = this.content.split(" ").length;
    this.readTime = Math.ceil(words / wordsPerMinute);
  }
});

const PostModel = mongoose.model("Post", PostSchema);
export default PostModel;
