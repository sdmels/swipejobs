import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handleInitialData } from 'actions/shared';

import Layout from './Layout';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(handleInitialData());
  }, [dispatch]);

  return (
    <div className="container d-flex flex-column">
      <Layout></Layout>
    </div>
  );
}

export default App;
