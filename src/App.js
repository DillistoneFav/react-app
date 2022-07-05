import PostList from './components/PostList';
import './styles/App.css';
import { useState } from 'react';
import PostForm from './components/PostForm';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', description: 'крутой язык'},
    {id: 2, title: 'Javascript', description: 'вот это конечно победа'},
    {id: 3, title: 'Javascript', description: 'лучши язык'},
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  }
  const removePost = (post) => {
    setPosts(posts.filter(item => item.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length ? <PostList remove={removePost} posts={posts} title={'Posts about Javascript'}/> : <h1>Посты не найдены</h1>}
      
    </div>
  );
}

export default App;
