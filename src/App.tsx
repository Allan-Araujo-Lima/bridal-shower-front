import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home/index'
import { Layout } from './pages/layout'

function App() {

  const pages = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={pages} />
  )
}

export default App
