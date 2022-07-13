import React from 'react'
import { IPost } from '../Models/Posts'

import { postAPI } from '../Servicess/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const [limit, setLimit] = React.useState(100)
  const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)
  const [createPost, {}] = postAPI.useCreatePostMutation()
  
  
  React.useEffect(() => {
    // setTimeout(() => {
    //    setLimit(3)
    // }, 2000)
  }, [])
  

  const handleCreater = async () => {
     const title = prompt()
     await createPost({title, body: title} as IPost)
  }
  
  return (
    <div>
      <div className='post__list'>
        <button onClick={handleCreater}>New new Post</button>
        {isLoading && <h1>loading in progress...</h1>}
        {error && <h1>An error occurred while loading!</h1>}
        {posts && posts.map((post) =>
           <PostItem key={post.id} post={post}/>
        )}
      </div>
    </div>
  )
}

export default PostContainer