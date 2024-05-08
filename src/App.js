import './App.css';
import { RouterProvider } from 'react-router-dom';
import { appRouteLayout } from './Router/router';
function App() {
  return (
    <div>
      <RouterProvider router={appRouteLayout} />
    </div>
  );
}

export default App;
