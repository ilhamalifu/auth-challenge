const postService = require("./post.service")

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

const postController ={
    createPost,
}

module.exports=postController;