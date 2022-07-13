import React from 'react'
import { postAPI } from '../Servicess/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
  const [limit, setLimit] = React.useState(10)
  const {data: posts, error, isLoading, refetch} = postAPI.useFetchAllPostsQuery(limit)

  React.useEffect(() => {
    // setTimeout(() => {
    //    setLimit(3)
    // }, 2000)
  }, [])
  
  
  return (
    <div>
      <div className='post__list'>
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