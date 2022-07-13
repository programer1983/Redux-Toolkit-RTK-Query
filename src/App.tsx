import React from 'react';
import "./App.css"
import PostContainer from './Components/PostContainer';
import PostContainer2 from './Components/PostContainer2';
import { useAppDispatch, useAppSelector } from './Hooks/Redux';
import { fetchUsers } from './Store/Reducers/ActionsCreaters';
import { userSlice } from './Store/Reducers/UserSlice';



function App() {
  const {users, isLoading, error} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  return (
    <div className="App">
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <PostContainer />
        <PostContainer2 />
      </div>
    </div>
  );
}

export default App;
