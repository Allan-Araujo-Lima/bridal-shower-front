import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/home/index'
import { Layout } from './pages/layout'
import { ChosenItemsPage } from './pages/escolhidos'
import "../globals/index.css"
import { UserEventsList } from './pages/userEventList'
import { Login } from './pages/login'
import { AuthenticationProvider } from './context/authentication'
import { Toaster } from './components/ui/toaster'
import PrivateRoute from './components/weapper'

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
        },
        {
          path: "/meus_eventos",
          element:
            <PrivateRoute>
              <UserEventsList />
            </PrivateRoute>
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    }
  ])

  return (
    <AuthenticationProvider>
      <RouterProvider router={pages} />
      <Toaster />
    </AuthenticationProvider>
  )
}

export default App
