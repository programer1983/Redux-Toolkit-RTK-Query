import React, {FC} from 'react'
import { IPost } from '../Models/Posts'
import { postAPI } from '../Servicess/PostService'

interface PostItemProps {
    post: IPost,
}

const PostItem: FC<PostItemProps> = ({post}) => {
  return (
    <div className="post">
        {post.id}. {post.title}
        <button>Delete</button>
    </div>
  )
}

export default PostItem