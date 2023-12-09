import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import { Cart, CreateOrder, Error, Home, Menu, Order } from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";
import Authentication from "./pages/Authentication";
import User from "./pages/User";
import { useEffect } from "react";
import { useUser } from "./features/authentication/useUser";
import { useDispatch } from "react-redux";
import { fetchCart, login } from "./store";
import { logout } from "./services/apiAuth";

function App() {
  const { user } = useUser();
  const dispatch = useDispatch();
  useEffect(() => {
    logout();
    if (user) {
      dispatch(login(user));
      dispatch(fetchCart(user));
    }
  }, [user, dispatch]);

  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "/authentication",
          element: <Authentication />,
          errorElement: <Error />,
        },
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
            {
              path: "/user",
              element: <User />,
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
