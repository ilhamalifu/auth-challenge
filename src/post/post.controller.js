const postService = require("./post.service")

// Get All Post
const getAllPost = async (req,res) => {
    const {q} = req.query;
    console.log({q})
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
    const {post_id} = req.params;
    try {
        const posts = await postService.getOnePost(post_id);
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
    const {title,image,body} = req.body;
    const {post_id} = req.params;
    const authUser = req.auth;
    const post = {
        title,
        image,
        body,
        post_id,
        authUser
    };
    try {
          const editPost = await postService.editPost(post);
          res.send(editPost);
      } catch (error) {
        res.json(error);
      }
}

const postController = {
    getAllPost,
    createPost,
    getOnePost,
    editPost
}

module.exports=postController;