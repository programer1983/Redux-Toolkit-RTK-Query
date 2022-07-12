import React from 'react';
import "./App.css"
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
      {isLoading && <h1>Loading in progress...</h1>}
      {error && <h3>{error}</h3>}
      {JSON.stringify(users, null, 2)}
    </div>
  );
}

export default App;
