// import { useSelector } from "react-redux";
import { formatDate } from "../utils/formatDate";
import OrderList from "../components/cart/OrderList";
import { useParams } from "react-router-dom";
import useOrder from "../features/orders/useOrder";
import Spinner from "../ui/Spinner";

export default function Order() {
  const { id } = useParams();
  const { order: fetchedOrder, isLoading } = useOrder({ id });
  console.log("Order fetched: ", fetchedOrder);
  console.log("fetching order: ", isLoading);
  console.log("order ID", id);
  let date = new Date();
  const order = {
    id: "1",
    cart,
    location: "restaurant",
    status: "preparing",
    eta: new Date(date.setMinutes(date.getMinutes() + 30)),
  };
  console.log(order);
  let eta;
  let minutesLeft;
  let formattedEta;
  if (fetchedOrder) {
    eta = new Date(fetchedOrder?.eta);

    formattedEta = formatDate(eta);
    // eta = "" +eta;
    minutesLeft = ("" + (eta - Date.now()) / 60000 + 1).split(".")[0];
  }
  let status = fetchedOrder?.status;
  console.log(
    "Date.now()- fetchedOrder?.created_at",
    Date.now() - new Date(fetchedOrder?.created_at)
  );
  if (Date.now() - new Date(fetchedOrder?.created_at) > 1000 * 15) {
    status = "preparing";
  }
  if ((new Date(fetchedOrder?.eta) - Date.now()) / 60000 < 15) {
    status = "delivering";
  }
  if (new Date(fetchedOrder?.eta) <= Date.now()) {
    status = "delivered";
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
                {status}
              </p>
            </div>
            <div className="w-full flex justify-between shadow items-center p-4 rounded font-light text-sm  bg-dark-coffee">
              {status !== "delivered" ? (
                <>
                  <p>{`Will be ${
                    order.location === "home" ? "at your doorstep" : "served"
                  } in ${minutesLeft} minutes.`}</p>
                  <p>{`( ETA: ${formattedEta} )`}</p>
                </>
              ) : (
                <>
                  <p>{`${
                    order.location === "home"
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

const cart = {
  items: [
    {
      name: "Caffè Latte",
      price: [190, 220, 250],
      image:
        "https://qzllyspdjkqoxiwvaycm.supabase.co/storage/v1/object/public/coffees/png/latte-caffe.png?t=2023-11-16T22%3A25%3A54.388Z",
      quantity: [0, 1, 1],
      served: "hot",
      itemQuantity: 2,
    },
    {
      name: "Freddo Cappuccino",
      price: [180, 210, 240],
      image:
        "https://qzllyspdjkqoxiwvaycm.supabase.co/storage/v1/object/public/coffees/png/cappuccino-freddo.png?t=2023-11-16T21%3A45%3A10.559Z",
      quantity: [0, 0, 1],
      served: "cold",
      itemQuantity: 1,
    },
    {
      name: "Iced Caramel Latte",
      price: [200, 230, 260],
      image:
        "https://qzllyspdjkqoxiwvaycm.supabase.co/storage/v1/object/public/coffees/png/iced-caramel-latte.png?t=2023-11-16T22%3A04%3A19.912Z",
      quantity: [0, 0, 1],
      served: "cold",
      itemQuantity: 1,
    },
    {
      name: "Espresso Long Black",
      price: [170, 200, 230],
      image:
        "https://qzllyspdjkqoxiwvaycm.supabase.co/storage/v1/object/public/coffees/png/espresso-longblack.png?t=2023-11-16T22%3A18%3A09.339Z",
      quantity: [0, 0, 1],
      served: "hot",
      itemQuantity: 1,
    },
    {
      name: "Cinnamon Latte",
      price: [190, 220, 250],
      image:
        "https://qzllyspdjkqoxiwvaycm.supabase.co/storage/v1/object/public/coffees/png/latte-cinnamon.png?t=2023-11-16T22%3A30%3A22.048Z",
      quantity: [1, 1, 1],
      served: "hot",
      itemQuantity: 3,
    },
  ],
  totalPrice: 1860,
  totalQuantity: 8,
};
