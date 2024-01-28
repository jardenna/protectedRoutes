import React from 'react';
import { RouterProvider } from 'react-router-dom';
import RouterLoader from './routers/RouterLoader';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider
        router={RouterLoader}
        fallbackElement={<p>Initial Load...</p>}
      />
    </React.StrictMode>
  );
}

export default App;
