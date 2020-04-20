import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleInitialData } from 'actions/shared';
import './App.scss';

import Layout from './Layout';

function App() {
  // const state = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="App container d-flex flex-column">
      <Layout></Layout>

      {/* <pre>{JSON.stringify(state, null, 2)}</pre> */}
    </div>
  );
}

export default App;
