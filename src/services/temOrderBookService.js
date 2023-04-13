import {
  postRequest_v2,
  addRequest,
  deleteRequest_v3,
  deleteRequest_v2,
} from "../utils/ajax";

const apiUrl = "http://localhost:8080";

export const getTemOrderBooks = (userId, callback) => {
  const url = `${apiUrl}/getTemOrderBooks`;
  const data = { userAuthId: userId };
  postRequest_v2(url, data, callback);
};

export const addTemOrderBook = (userId, bookId, callback) => {
  const data = { userAuthId: userId, bookId: bookId };
  const url1 = `${apiUrl}/addTemOrderBook`;
  addRequest(url1, data);
  const data2 = { userAuthId: userId };
  const url2 = `${apiUrl}/deleteCartBooks`;
  deleteRequest_v3(url2, data2, callback); //清空购物车
};
export const deleteTemOrderBooks = (userId, callback) => {
  const url = `${apiUrl}/deleteTemOrderBooks`;
  const data = { userAuthId: userId };
  deleteRequest_v3(url, data, callback);
};
export const addOrder = (
  userId,
  totalPrice,
  receiver,
  tel,
  address,
  bookId
) => {
  const data = {
    userAuthId: userId,
    totalPrice: totalPrice,
    receiver: receiver,
    tel: tel,
    address: address,
    bookId: bookId,
  };
  const url = `${apiUrl}/addOrder`;
  addRequest(url, data);
};
