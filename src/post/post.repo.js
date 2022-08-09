const { Post } = require("../database/models/post");


// create post
const createPost = async ({title,image,body,user_id}) => {
    return await Post.create({
        title: title,
        image: image,
        body: body,
        user_id: user_id,
    })
}

const postRepo = {
    createPost,
}

module.exports=postRepo;