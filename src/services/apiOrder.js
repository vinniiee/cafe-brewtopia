import { status } from "../enums/orderStatus";

const API_BASE_URL = "http://localhost:8080/api";

const getAuthHeaders = () => {
  const token = localStorage.getItem("token"); 
  if (!token) {
    throw new Error("No authentication token found. Please log in again.");
  }

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

export const placeOrder = async ({ cart, servingDetails }) => {
  try {
    console.log("cart", cart);
    console.log("servingDetails", servingDetails);

    const date = new Date();
    const eta = new Date(
      date.setMinutes(date.getMinutes() + 25 + Math.random() * 20)
    );

    const order = {
      cart,
      status: status.PENDING,
      eta: eta.toISOString(),
      ...servingDetails,  
    };

    console.log("To be placed", order);

    const res = await fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: getAuthHeaders(),
      body: JSON.stringify(order),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Order placement failed:", errorText);
      throw new Error(`Failed to place order: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("Order placed:", data);
    return data;
  } catch (err) {
    console.error("Error placing order:", err.message);
    throw err;
  }
};

export const fetchOrderById = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/orders/${id}`, {
      headers: getAuthHeaders(),
    });
    

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch order:", errorText);
      throw new Error(`Failed to fetch order: ${res.statusText}`);
    }

    const data = await res.json();
    // console.log(data);
    console.log("Fetched order:", data);
    return data;
  } catch (err) {
    console.error("Error fetching order:", err.message);
    throw err;
  }
};

export const fetchAllOrders = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/orders/me`, {
      headers: getAuthHeaders(),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Failed to fetch orders:", errorText);
      throw new Error(`Failed to fetch orders: ${res.statusText}`);
    }

    const data = await res.json();
    console.log("All orders:", data);
    return data;
  } catch (err) {
    console.error("Error fetching all orders:", err.message);
    throw err;
  }
};