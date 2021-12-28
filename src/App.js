
import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import Pagination from './Components/Pagination';
import Posts from './Components/Posts';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10)
  

  useEffect(() => {
   
      const fetchPost = async () =>{
        // setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
        setPosts(res.data)
        // setLoading(false)
      }
      fetchPost();
 
  },[])

  console.log(posts)

  const indexOfLastPosts = currentPage * postsPerPage;
  const indexOfFastPosts = indexOfLastPosts - postsPerPage;
  const currentPosts = posts.slice(indexOfFastPosts, indexOfLastPosts);
  
  // setTimeout((currentPosts) => {
  //   currentPosts
  // },5000)
  // page change
  const paginate = pageNumber =>{
    setLoading(true);
     setTimeout(() => { setCurrentPage(pageNumber) 
      setLoading(false)
    },3000)}


  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'> my vlogs </h1>
      <Posts posts={currentPosts} loading={loading} />
      <Pagination
       postsPerPage={postsPerPage}
       totalPosts={posts.length}
       paginate={paginate}
       />
    </div>
  );
}

export default App;
