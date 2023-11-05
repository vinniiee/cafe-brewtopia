import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import { Cart, CreateOrder, Error, Home, Menu, Order } from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          element: <ProtectedRoute />,
          errorElement: <Error />,
          children: [
            {
              path: "/menu",
              element: <Menu />,
              //   loader: menuLoader,
              errorElement: <Error />,
            },
            { path: "/cart", element: <Cart /> },
            {
              path: "/order/new",
              element: <CreateOrder />,
              //   action: createOrderAction,
            },
            {
              path: "/order/:id",
              element: <Order />,
              //   loader: orderLoader,
              errorElement: <Error />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
