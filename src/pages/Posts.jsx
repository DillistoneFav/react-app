import '../styles/App.css';
import { useEffect, useState } from 'react';
import { usePosts } from '../components/hooks/usePosts';
import { useFetching } from '../components/hooks/useFetching';
import { getPageCount } from '../components/utils/pages';
import PostList from '../components/PostList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import MyModal from '../components/UI/modal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostService from '../components/API/PostService.js';
import Loader from '../components/UI/loader/loader';
import Pagination from '../components/UI/pagination/Pagination';
import MySelect from '../components/UI/select/MySelect';


function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(3);
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
  }, [page, limit])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <div className="App">
        <div className="functionsWithPosts">
            <MyModal visible={modal} setVisible={setModal}>
              <PostForm create={createPost}/>
            </MyModal>
            <PostFilter
                filter={filter}
                setFilter={setFilter}
            />
            <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
        </div>
      
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
      <div className="selectRowsCount">
        <MySelect 
          className="selectRowsCount"
          value={limit}
          onChange={(selectedCount) => setLimit(selectedCount)}
          defaultValue="Количество строк"
          options={[{value: 1, name: 1}, {value: 3, name: 3}, {value: 5, name: 5}, {value: 10, name: 10}, {value: 20, name: 20}, {value: 50, name: 50}, {value: 100, name: 100}]}
        />
      </div>
    </div>
  );
}

export default Posts;
