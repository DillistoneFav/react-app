import PostList from './components/PostList';
import './styles/App.css';
import { useState } from 'react';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Javascript', body: 'Description'},
    {id: 2, title: 'Javascript', body: 'Description'},
    {id: 3, title: 'Javascript', body: 'Description'},
  ])

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addNewPost = (event) => {
    event.preventDefault();

    if (title !== '' && description !== '') {
      const newPost = {
      id: Date.now(),
      title,
      description,
    }
  
    setPosts([...posts, newPost]);
    setTitle('');
    setDescription('');
  };


  }

  return (
    <div className="App">
      <form className="form-add">
        <MyInput onChange={(event) => {setTitle(event.target.value)}} value={title} placeholder="Заголовок поста"/>
        <MyInput onChange={(event) => {setDescription(event.target.value)}} value={description} placeholder="Описание поста"/>
        <MyButton onClick={addNewPost} type="submit">Создать</MyButton>
      </form>
      <PostList posts={posts} title={'Posts about Javascript'}/>
    </div>
  );
}

export default App;
