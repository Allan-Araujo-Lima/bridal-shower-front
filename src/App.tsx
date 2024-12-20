import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home/index'
import { Layout } from './pages/layout'
import { ChosenItemsPage } from './pages/escolhidos'
import "../globals/index.css"

function App() {

  const pages = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/escolhidos",
          element: <ChosenItemsPage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={pages} />
  )
}

export default App
