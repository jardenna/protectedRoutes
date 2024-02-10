import React from 'react';
import { RouterProvider } from 'react-router-dom';
import routeConfig from './routers/routeConfig';

function App() {
  return (
    <React.StrictMode>
      <RouterProvider
        router={routeConfig}
        fallbackElement={<p>Initial Load...</p>}
      />
    </React.StrictMode>
  );
}

export default App;
