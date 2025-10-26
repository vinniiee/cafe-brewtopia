import { formatDate } from "../utils/formatDate";
import OrderList from "../components/cart/OrderList";
import { useParams } from "react-router-dom";
import useOrder from "../features/orders/useOrder";
import Spinner from "../ui/Spinner";
import { updateStatus } from "../utils/updateStatus";

export default function Order() {
  const { id } = useParams();
  const { order: fetchedOrder, isLoading } = useOrder({ id });
  
  let eta;
  let minutesLeft;
  let formattedEta;
  if (fetchedOrder) {
    eta = new Date(fetchedOrder?.eta);

    formattedEta = formatDate(eta);
    // eta = "" +eta;
    minutesLeft = ("" + (eta - Date.now()) / 60000 + 1).split(".")[0];
  }
  let status;
  if(fetchedOrder){
    status=updateStatus(fetchedOrder)
  }
  return (
    <div
      className="flex  justify-center items-center
   w-screen min-h-screen text-white tracking-wide p-8 font-primary
   whitespace-nowrap"
    >
      <div
        className="w-full flex  flex-col justify-center items-center
      rounded-sm shadow  bg-light-coffee
      sm:p-16 p-4  pt-10 space-y-8 max-w-2xl"
      >
        <div className="h-24 ">
          <img className="w-full h-full" src="/named-logo.svg" />
        </div>
        {isLoading && <Spinner />}
        {!isLoading && fetchedOrder.cart && (
          <div
            className="w-full flex flex-col justify-center
         items-center space-y-3"
          >
            <div
              className="w-full flex justify-between 
      items-center"
            >
              <p className="text-2xl">
                Status for Order ID#{" "}
                <span className="uppercase">{`${fetchedOrder?.id.split("-").join('').substring(1, 15)
                  }`}</span>
              </p>
              <p
                className="bg-dark-coffee p-4 py-2 uppercase rounded-sm
           font-medium tracking-widest shadow"
              >
                {status?status:'Pending'}
              </p>
            </div>
            <div className="w-full flex justify-between shadow items-center p-4 rounded font-light text-sm  bg-dark-coffee">
              {status !== "delivered" ? (
                <>
                  <p>{`Will be ${
                    fetchedOrder.location === "home" ? "at your doorstep" : "served"
                  } in ${minutesLeft} minutes.`}</p>
                  <p>{`( ETA: ${formattedEta} )`}</p>
                </>
              ) : (
                <>
                  <p>{`${
                    fetchedOrder.location === "home"
                      ? "Delivered to your home."
                      : "Served at the Cafe."
                  } `}</p>
                  <p>{`( Delivered At: ${formattedEta} )`}</p>
                </>
              )}
            </div>
            <div className="max-w-2xl drop-shadow w-full max-h-[300px] overflow-scroll">
              <OrderList order={fetchedOrder.cart} />
            </div>
            <div className="w-full flex shadow tracking-wider justify-between items-center p-4 rounded text-xl  bg-dark-coffee">
              <p>Total</p>
              <p>{fetchedOrder?.cart.totalPrice}/-</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
