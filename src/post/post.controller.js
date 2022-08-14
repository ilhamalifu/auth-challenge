const postService = require("./post.service")

// Get All Post
const getAllPost = async (req,res) => {
    const {q} = req.query;
    try {
        const post = await postService.getAllPost(q)
        if(post && postService.length > 0);
        return res.json(post);
    } catch (error) {
        return res.status(error)
    };
};

// Get One Post
const getOnePost = async (req,res) => {
    const {postId} = req.params;
    try {
        const posts = await postService.getOnePost(postId);
        res.json(posts)
    } catch (error) {
        res.json(error);
    };
};

// Create Post
const createPost = async (req,res) => {
    const { title,image,body } = req.body;
    const authUser = req.auth;
    const newPost = {
        title,
        image,
        body,
        user_id: authUser.id
    }
    try {
        const createPost = await postService.createPost(newPost);
        return res.json(createPost)
    } catch (error) {
        return res.send(error);
    }

};

// Edit Post
const editPost = async (req,res) => {
    const {postId} = req.params;
    const {title,image,body} = req.body;
    const authUser = req.auth;
    const user_id = authUser.id
    const post = {
        postId,
        title,
        image,
        body,
        user_id
    };
    try {
          const editPost = await postService.editPost(post);
          if (editPost) res.status(200).json(editPost);
          else res.status(401).json({ message: "Unauthorized" });
      } catch (error) {
        res.status(500).json("Internal Server Error!");
      }
}

const postController = {
    getAllPost,
    createPost,
    getOnePost,
    editPost
}

module.exports=postController;