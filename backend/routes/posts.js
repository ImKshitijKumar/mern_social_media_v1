const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

// -------------CREATE A POST-------------- //
router.post("/", async (req, res, next) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(201).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// -------------UPDATE A POST-------------- //
router.put("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.updateOne({ $set: req.body });
      res.status(201).json("Post has been Update");
    } else {
      res.status(401).json("You can only update your Posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// -------------DELETE A POST-------------- //
router.delete("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.userId === req.body.userId) {
      await post.deleteOne();
      res.status(201).json("Post has been Deleted");
    } else {
      res.status(401).json("You can only delete your Posts");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// -------------LIKE/DISLIKE A POST-------------- //
router.put("/:id/like", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post.likes.includes(req.body.userId)) {
      await post.updateOne({ $push: { likes: req.body.userId } });
      res.status(200).json("You liked the post");
    } else {
      await post.updateOne({ $pull: { likes: req.body.userId } });
      res.status(200).json("You disliked the post");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// -------------GET A POST-------------- //
router.get("/:id", async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
});

// -------------GET ALL FEEDS POSTS-------------- //
router.get("/timeline/feeds", async (req, res, next) => {
  try {
    const currentUser = await User.findById(req.body.userId);
    const userPosts = await Post.find({ userId: currentUser._id });
    const friendsPost = await Promise.all(
      currentUser.following.map((friendId) => {
        return Post.find({ userId: friendId });
      })
    );
    res.status(200).json(userPosts.concat(...friendsPost));
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
