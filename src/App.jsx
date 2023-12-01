import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import { Cart, CreateOrder, Error, Home, Menu, Order } from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";
import Authentication from "./pages/Authentication";
import { useUser } from "./features/authentication/useUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateUserCart } from "./services/apiUser";
import { updateCart } from "./store";

function App() {
  const { isAuthenticated, user } = useUser();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const uploadCart = async () => {
      await updateUserCart({ cart, user });
    };
    if (user?.cart && cart.totalQuantity === 0) {
      // console.log("Cart", user.cart);
      dispatch(updateCart(user.cart));
    }

    const handleBeforeUnload = (event) => {
      if (isAuthenticated) {
        event.preventDefault();
        // event.returnValue = "";
        uploadCart();
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [dispatch, isAuthenticated, cart, user]);

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
          ],
        },
      ],
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
