const postRepo = require("./post.repo");

// Get All Post
const getAllPost = async (q) => {
    return await postRepo.getAllPost(q);
}

// Get One Post
const getOnePost = async(postId) => {
    return await postRepo.getOnePost(postId);
}

// Create Post
const createPost = async ({title,image,body,user_id}) => {
    return await postRepo.createPost({title,image,body,user_id});
};

// Edit Post
const editPost = async ({postId, title, image, body, user_id}) => {
    return await postRepo.editPost({postId, title, image, body, user_id});
}

const postService = {
    getAllPost,
    createPost,
    getOnePost,
    editPost
}

module.exports = postService;