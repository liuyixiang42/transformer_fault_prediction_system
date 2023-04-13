import { postRequest_v2, deleteRequest, addRequest } from "../utils/ajax";

const apiUrl = "http://localhost:8080";

export const getCartBooks = (userId, callback) => {
  const url = `${apiUrl}/getCartBooks`;
  const data = { userAuthId: userId };
  postRequest_v2(url, data, callback);
};

export const deleteCartBook = (userId, cartBookId, callback) => {
  const data = { userAuthId: userId, cartBookId: cartBookId };
  const url = `${apiUrl}/deleteCartBook`;
  deleteRequest(url, data, callback);
};

export const addCartBook = (userId, bookId) => {
  const data = { userAuthId: userId, bookId: bookId };
  const url = `${apiUrl}/addCartBook`;
  addRequest(url, data);
};
