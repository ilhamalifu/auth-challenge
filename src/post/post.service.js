const postRepo = require("./post.repo")

const createPost = async ({title,image,body,user_id}) => {
    return await postRepo.createPost({title,image,body,user_id});
};

const postService = {
    createPost,
}

module.exports = postService;