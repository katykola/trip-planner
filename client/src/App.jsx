import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Root from './pages/Root';
import Home from './pages/Home';
import TripRoot from './pages/TripRoot';
import Trips from './pages/Trips';
import TripShow from './pages/TripShow';
import TripNew from './pages/TripNew';
import TripEdit from './pages/TripEdit';
import Error from './pages/Error';
import { data } from './data'

function handleSelect(selected) {
  console.log(selected)
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home trips={data} handleSelect={handleSelect}/> },
      { path: 'trips', element: <TripRoot />, children: [
        { index: true, element: <Trips trips={data} handleSelect={handleSelect}/> },
        { path: ':id', element: <TripShow trips={data} handleSelect={handleSelect}/> },
        { path: 'new', element: <TripNew trips={data} handleSelect={handleSelect}/> },
        { path: ':id/edit', element: <TripEdit trips={data} handleSelect={handleSelect}/> },
      ]},
    ]
  },
])

function App() {


  return (
    <>
    <RouterProvider router={router} />
     </>
  )
}

export default App
