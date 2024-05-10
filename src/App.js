import './App.css';
import { RouterProvider } from 'react-router-dom';
import { appRouteLayout } from './Router/router';
import 'animate.css';
import { useEffect } from 'react';
import Aos from 'aos';
function App() {
   
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <RouterProvider router={appRouteLayout} />
    </div>
  );
}

export default App;
