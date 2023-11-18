import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import AppLayout from "./ui/AppLayout";
import { Cart, CreateOrder, Error, Home, Menu, Order } from "./pages";
import ProtectedRoute from "./pages/ProtectedRoute";
import supabase from "./services/supabase";
import Authentication from "./pages/Authentication";

function App() {
  const test = async ()=>{
    let { data: coffees, error } = await supabase
  .from('coffees')
  .select('*')
          console.log(coffees,error)
  }
  test();


  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path:"/authentication", element:<Authentication/>,errorElement:<Error/>},
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
