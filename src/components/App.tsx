import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.scss';
import { handleInitialData } from 'actions/shared';

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);
  return (
    <div className="App">
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
