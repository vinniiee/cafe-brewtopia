import Receipt from "./Receipt";
import DeliveryDetails from "./DeliveryDetails";

// eslint-disable-next-line react/prop-types
export default function PaymentDetails({ location }) {
  return (
    <div
      className="flex flex-col bg-dark-coffee text-white/95 w-full justify-center items-start
        max-w-sm  tracking-wide"
    >
      <h3 className="sm:text-4xl text-3xl border-b-2 border-white/40  mt-8 mx-8 w-4/5 text-left pb-2 ">
        Payment Details
      </h3>
      <DeliveryDetails location={location}>
        <DeliveryDetails.InputFields />
        <Receipt location={location} />
        <DeliveryDetails.Submit>place order</DeliveryDetails.Submit>
      </DeliveryDetails>
    </div>
  );
}
