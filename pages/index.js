import { server } from '../config'
import PostsList from '../components/PostsList'
import { useState, useEffect } from 'react';

export default function Home({ postsArr }) {
  const [posts, setPosts] = useState(postsArr)

  const toggleLike = (id) => {
    let selectedPost = posts.find(a => a.id === id)
    selectedPost.isFavorite = !selectedPost.isFavorite
    setPosts(prevPosts => ([...posts]))
    // if (selectedPost.isFavorite) {
    //   if (sessionStorage.getItem("likedPosts")) {
    //     let lp = JSON.parse(sessionStorage.getItem("likedPosts"))
    //     if(!(lp.some(j=> j === selectedPost.id))){
    //       lp.push(selectedPost.id)
    //       sessionStorage.setItem("likedPosts", JSON.stringify(lp))
    //     }
    //   } else {
    //     let lp = [selectedPost.id]
    //     sessionStorage.setItem("likedPosts", JSON.stringify(lp))
    //   }
    // } else {
    //   if (sessionStorage.getItem("likedPosts")) {
    //     let lp = JSON.parse(sessionStorage.getItem("likedPosts"))
    //     lp = lp.filter(a => a !== selectedPost.id)
    //     sessionStorage.setItem("likedPosts", JSON.stringify(lp))
    //   }
    // }
  };


  return (
    <div>
      <PostsList posts={posts} toggleLike={toggleLike} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/posts`)
  const postsArr = await res.json()

  return {
    props: {
      postsArr,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles,
//     },
//   }
// }
