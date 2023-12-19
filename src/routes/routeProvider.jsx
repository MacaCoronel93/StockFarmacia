import { createBrowserRouter } from "react-router-dom";
import Layout from './layout'
import Index from './index'
import NotFound from './notFound'
import Login from './login'
import Products from './products'
import ContactUs from './contact'
import AdminPage from "./admin";
import ProtectedRoute from '@/components/ProtectedRoute'

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/contact-us",
            element: <ContactUs />,
          },
          {
            path: "/products",
            element: <Products />,
          },
          {
                        path: '/admin',
                        element: (
                            <ProtectedRoute>
                                <AdminPage />
                            </ProtectedRoute>
                        ),
                    },
        ],
      },
    ],
  },
]);
