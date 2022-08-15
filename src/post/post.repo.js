const {Post} = require("../database/models");

// get all post
const getAllPost = async (q) => {
    if(q !== undefined) {
        return await Post.findAll({where: {
            title : q,
        }});
    }else {
        return await Post.findAll()
    };
};

// get one post
const getOnePost = async (post_id) => {
    return await Post.findOne({
        where : {
            id: post_id,
        },
    });
};


// create post
const createPost = async ({title,image,body,user_id}) => {
    return await Post.create({
        title: title,
        image: image,
        body: body,
        user_id: user_id,
    });
};

// edit post
const editPost = async ({title, image, body, post_id}) => {
  
    return await Post.update({
        title,
        image,
        body,
    },
    {
        where: {
            id: post_id,
        },
        returning: true,
      }
    )
}


const postRepo = {
    getAllPost,
    createPost,
    getOnePost,
    editPost
};

module.exports=postRepo;