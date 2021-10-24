import Meta from '../components/Meta'
import PostsList from '../components/PostsList'
import { useState, useEffect  } from 'react';


import { server } from '../config'

const favourites = ({ postsArr }) => {
  const [posts, setPosts] = useState(postsArr)

  const toggleLike = (id) => {
    let selectedPost = posts.find(a=> a.id === id)
    selectedPost.isFavorite =  !selectedPost.isFavorite
    let likedPosts = posts.filter(a=> a.isFavorite == true)
    setPosts(prevPosts => ([...likedPosts]))
  };

  useEffect(() => {
    let likedPosts = posts.filter(a=> a.isFavorite == true)
    setPosts(prevPosts => ([...likedPosts]))
  }, [])


  return (
    <div>
      <Meta title='Noon Favourites' />
      <PostsList posts={posts} toggleLike={toggleLike} />
    </div>
  )
}

export default favourites

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`)
  const postsArr = await res.json()

  return {
    props: {
      postsArr,
    },
  }
}
