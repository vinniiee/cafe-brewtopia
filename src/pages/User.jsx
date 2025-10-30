import { useSelector } from "react-redux";
import UserDetails from "../components/user/UserDetails";
import useAllOrders from "../features/orders/useAllOrders";
import OrdersList from "../components/order/OrdersList";

export default function User() {
  const cart = useSelector((state) => state.cart.data);
  const {orders,isLoading} = useAllOrders();
  console.log("Fetching orders: ",isLoading);
  console.log("Fetched Orders: ",orders);

  return (
    <div
      className="flex flex-col  justify-start items-center
         min-h-screen w-screen bg-cover font-primary
         p-8 py-32"
      style={{ backgroundImage: "url(/wall.jpg)" }}
    >
      <div className="bg-black/90 w-full">
        <div
          className=" justify-start items-center
         py-16 p-8 sm:p-16 rounded  flex flex-col md:justify-around md:px-20   md:space-x-8 md:flex-row space-y-8 font-primary"
        >
          <div className="w-full flex flex-col max-w-lg  space-y-6 justify-start items-center">
            <OrdersList/>
          </div>
          <UserDetails>
            <h1 className="text-4xl text-white/95 border-b-2  pb-2 text-left w-full tracking-wide">Personal Details</h1>
            <UserDetails.InputFields />
            <UserDetails.Submit>Submit changes</UserDetails.Submit>
            <UserDetails.Logout/>
          </UserDetails>
        </div>
      </div>
    </div>
  );
}
