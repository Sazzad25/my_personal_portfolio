import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutMe from './component/Home/AboutMe';
import Blog from './component/Home/Blog';
import Home from './component/Home/Home';
import Project1 from './component/Home/Project1';
import Project2 from './component/Home/Project2';
import Project3 from './component/Home/Project3';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
    
        {
          path: '/me',
          element: <AboutMe></AboutMe>
        },

        {
          path: '/blog',
          element: <Blog></Blog>
        },

        {
          path: '/project1',
          element: <Project1></Project1>
        },

        {
          path: '/project2',
          element: <Project2></Project2>
        },

        {
          path: '/project3',
          element: <Project3></Project3>
        }
      ]
    }
  ])
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
