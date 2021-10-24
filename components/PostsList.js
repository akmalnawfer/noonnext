import PostItem from './PostItem'

const PostsList = ({ posts, toggleLike }) => {
  return (
    <>
      {posts.map((post) => (
        <PostItem post={post} toggleLike={toggleLike} />
      ))}
    </>
  )
}

export default PostsList
