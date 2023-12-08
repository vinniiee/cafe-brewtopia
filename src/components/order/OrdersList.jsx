import { useSelector } from "react-redux";
import useAllOrders from "../../features/orders/useAllOrders";
// import OrderList from "../cart/OrderList";
import Spinner from "../../ui/Spinner";
// import { useNavigate } from "react-router-dom";
import OrderInfo from "./OrderInfo";
function OrdersList() {
  // const navigate = useNavigate();
  const cart = useSelector((state) => state.cart.data);
  const { orders, isLoading } = useAllOrders(cart.userId);
  console.log("Fetching orders: ", isLoading);
  console.log("Fetched Orders: ", orders);

  let list;
  if (orders?.length > 0) {
    list = orders.map((order) => (
      <li key={order}>
        <OrderInfo order={order} />
      </li>
    ));
  }

  return (
    <>
      {isLoading || orders?.length === 0 ? (
        <Spinner />
      ) : (
        <div className="w-full">
            <h1 className="text-5xl mb-8 text-white/95 tracking-wide  underline underline-offset-2 ">My Orders</h1>
            <ul className="flex flex-col w-full space-y-8 max-h-[600px] overflow-scroll">
          {list}
        </ul>
        </div>
      )}
    </>
  );
}

export default OrdersList;
