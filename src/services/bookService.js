import {
  postRequest,
  postRequest_v2,
  deleteRequest,
  addRequest,
} from "../utils/ajax";

const apiUrl = "http://localhost:8080";

export const getBooks = (data, callback) => {
  const url = `${apiUrl}/getBooks`;
  postRequest(url, data, callback);
};

export const getBooks2 = (bookId, callback) => {
  const url = `${apiUrl}/getBooks2`;
  const data = { bookId: bookId };
  postRequest_v2(url, data, callback);
};

export const getBook = (id, callback) => {
  const data = { id: id }; //将参数id给data，第一个id是data的元素，第二个是元素id的值，即上面的参数
  const url = `${apiUrl}/getBook`;
  postRequest_v2(url, data, callback);
};

export const deleteBook = (bookId, callback) => {
  const data = { bookId: bookId };
  const url = `${apiUrl}/deleteBook`;
  deleteRequest(url, data, callback);
};

export const addBook = (
  isbn,
  name,
  type,
  author,
  price,
  description,
  inventory,
  image
) => {
  const data = {
    isbn: isbn,
    name: name,
    type: type,
    author: author,
    price: price,
    description: description,
    inventory: inventory,
    image: image,
  };
  const url = `${apiUrl}/addBook`;
  addRequest(url, data);
};
export const editBook = (
  bookId,
  isbn,
  name,
  type,
  author,
  price,
  description,
  inventory,
  image
) => {
  const data = {
    bookId: bookId,
    isbn: isbn,
    name: name,
    type: type,
    author: author,
    price: price,
    description: description,
    inventory: inventory,
    image: image,
  };
  const url = `${apiUrl}/editBook`;
  addRequest(url, data);
};
export const bookCount = (date1, date2, callback) => {
  const url = `${apiUrl}/bookCount`;
  const data = { date1: date1, date2: date2 };
  postRequest_v2(url, data, callback);
};
