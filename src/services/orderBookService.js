import { postRequest_v2 } from "../utils/ajax";

const apiUrl = "http://localhost:8080";

export const getOrderBooks = (orderId, callback) => {
  const data = { orderId: orderId };
  const url = `${apiUrl}/getOrderBooks`;
  postRequest_v2(url, data, callback);
};
