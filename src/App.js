import './styles/App.css';
import { useMemo, useState } from 'react';
import { usePosts } from './components/hooks/usePosts';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'c', body: 'динамически типизируемый'},
    {id: 2, title: 'b', body: 'есть оболочка typescript'},
    {id: 3, title: 'a', body: 'самый популярный язык в мире'},
  ])

  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setPosts(response.data);
  }

  return (
    <div className="App">
      <MyButton onClick={() => fetchPosts()}></MyButton>
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList 
        remove={removePost} 
        posts={sortedAndSearchedPosts} 
        title={'Posts about Javascript'}
      />
      
    </div>
  );
}

export default App;
