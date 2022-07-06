import './styles/App.css';
import { useEffect, useState } from 'react';
import { usePosts } from './components/hooks/usePosts';
import { useFetching } from './components/hooks/useFetching';
import { getPageCount } from './components/utils/pages';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import PostService from './components/API/PostService.js';
import Loader from './components/UI/loader/loader';
import axios from 'axios';
import Pagination from './components/UI/pagination/Pagination';


function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading] = useFetching (async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    fetchPosts();
  }, [page])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      {isPostsLoading
      ? <Loader/>
      : <PostList 
          remove={removePost} 
          posts={sortedAndSearchedPosts} 
          title={'Posts about Javascript'}
        />
      }
      <Pagination 
        totalPages={totalPages}
        limit={limit}
        setPage={setPage}
        page={page}
      />
    </div>
  );
}

export default App;
