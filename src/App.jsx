import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Main from './Layouts/Main'
import Home from './components/Home/Home'
import Orders from './components/Orders/Orders'
import About from './components/About/About'
import GrandPa from './components/GrandPa/GrandPa'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          path: '/',
          loader:()=>fetch('tshirt.json'),
          element: <Home></Home>
        },
        {path:'orders', element:<Orders></Orders>},
        { path: 'about', element: <About></About> },
        {path:'grandpa', element:<GrandPa></GrandPa>}
      ],
      element: <Main></Main>
    }
    
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
