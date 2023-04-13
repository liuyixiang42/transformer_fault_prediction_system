let addRequest = (url, data) => {
  //单纯在数据库增加
  let formData = new FormData();
  for (let p in data) {
    if (data.hasOwnProperty(p)) formData.append(p, data[p]);
  }

  fetch(url, {
    method: "post",
    body: formData,
    credentials: "include",
  }).catch((error) => {
    console.log(error);
  });
};
let deleteRequest_v3 = (url, data, callback) => {
  let formData = new FormData();
  for (let p in data) {
    if (data.hasOwnProperty(p)) formData.append(p, data[p]);
  }
  fetch(url, {
    method: "delete",
    body: formData,
    credentials: "include",
  })
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.log(error);
    });
};
let deleteRequest_v2 = (url, callback) => {
  //删除暂存订单
  fetch(url, {
    method: "delete",
    credentials: "include",
  })
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.log(error);
    });
};
let deleteRequest = (url, data, callback) => {
  //删除并重绘
  let formData = new FormData();
  for (let p in data) {
    if (data.hasOwnProperty(p)) formData.append(p, data[p]);
  }
  fetch(url, {
    method: "delete",
    body: formData,
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
let postRequest_v4 = (url, data, callback) => {
  //带参数
  let formData = new FormData();

  for (let p in data) {
    if (data.hasOwnProperty(p)) formData.append(p, data[p]);
  }
  fetch(url, {
    method: "POST",
    body: formData,
    credentials: "include",
  })
    .then(() => {
      callback();
    })
    .catch((error) => {
      console.log(error);
    });
};
let postRequest_v3 = (url, json, callback) => {
  // let opts = {
  //     method: "POST",
  //     body: JSON.stringify(json),
  //     headers: {
  //         'Content-Type': 'application/json'
  //     },
  //     credentials: "include"
  // };
  // fetch(url,opts)
  //     .then((response) => {
  //         return response.json()
  //     })
  //     .then((data) => {
  //         callback(data);
  //     })
  //     .catch((error) => {
  //         console.log(error);
  //     });
};

let postRequest_v2 = (url, data, callback) => {
  //带参数
  let formData = new FormData();

  for (let p in data) {
    if (data.hasOwnProperty(p)) formData.append(p, data[p]);
  }
  fetch(url, {
    method: "POST",
    body: formData,
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

let postRequest = (url, json, callback) => {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(json),
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      callback(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  postRequest,
  postRequest_v2,
  postRequest_v3,
  postRequest_v4,
  deleteRequest,
  deleteRequest_v2,
  deleteRequest_v3,
  addRequest,
};
