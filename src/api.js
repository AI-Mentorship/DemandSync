// src/api/api.js
import axios from "axios";

// 🧠 Change this URL to match your backend’s base address
// Example: FastAPI often runs on http://127.0.0.1:8000
const BASE_URL = "http://127.0.0.1:8000";

// ✅ Get all orders
export async function getOrders() {
  try {
    const response = await axios.get(`${BASE_URL}/api/orders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw error;
  }
}

// ✅ Get one order by ID
export async function getOrderById(id) {
  try {
    const response = await axios.get(`${BASE_URL}/api/orders/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching order ${id}:`, error);
    throw error;
  }
}

// (optional) You can add these later if your backend supports them:
// export async function createOrder(data) { ... }
// export async function updateOrder(id, data) { ... }
// export async function deleteOrder(id) { ... }
