import React from 'react';
import "./App.css"
import PostContainer from './Components/PostContainer';
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
      <PostContainer />
    </div>
  );
}

export default App;
