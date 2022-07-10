import React from 'react';
import "./App.css"
import { useAppDispatch, useAppSelector } from './Hooks/Redux';
import { fetchUsers } from './Store/Reducers/ActionsCreaters';
import { userSlice } from './Store/Reducers/UserSlice';



function App() {
  const {users} = useAppSelector(state => state.userReducer)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(fetchUsers())
  }, [])
  
  return (
    <div className="App">
      {JSON.stringify(users, )}
      
    </div>
  );
}

export default App;
