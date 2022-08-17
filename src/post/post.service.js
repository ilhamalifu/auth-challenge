const postRepo = require("./post.repo");

// Get All Post
const getAllPost = async (tempQuery) => {
    return await postRepo.getAllPost(tempQuery);
}

// Create Post
const createPost = async ({title,image,body,user_id}) => {
    console.log(title)
    return await postRepo.createPost({title,image,body,user_id});
};

// Edit Post
const editPost = async ({title, body, image, post_id, authUser}) => {
    const checkPost = await getOnePost(post_id);
    if(checkPost.user_id == authUser.id){
         await postRepo.editPost({title,body,image,post_id});
         return "Update Success" ;  
    }else{
        return "Failed Authorization"; 
    }
}

// Get One Post
const getOnePost = async (post_id) => {
    return await postRepo.getOnePost(post_id);
}

const postService = {
    getAllPost,
    createPost,
    getOnePost,
    editPost
}

module.exports = postService;