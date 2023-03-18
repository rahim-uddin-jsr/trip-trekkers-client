import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { route } from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Toaster />
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;
