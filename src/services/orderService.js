import { postRequest, postRequest_v2 } from "../utils/ajax";

const apiUrl = "http://localhost:8080";

export const getOrders = (userId, callback) => {
  const url = `${apiUrl}/getOrders`;
  const data = { userAuthId: userId };
  postRequest_v2(url, data, callback);
};
export const getOrders2 = (data, callback) => {
  const url = `${apiUrl}/getOrders2`;
  postRequest(url, data, callback);
};
