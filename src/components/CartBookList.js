import { Button, List, message } from "antd";
import React from "react";
import { Book } from "./Book";
import { getCartBooks, deleteCartBook } from "../services/cartBookService";
import { addTemOrderBook } from "../services/temOrderBookService";
import { getBooks2 } from "../services/bookService";

export class CartBookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartbooks: [],
      sum: 0,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const callback = (data) => {
      let len = data.length;
      let res = 0;
      for (let i = 0; i < len; i++) {
        res += data[i].price;
      }
      this.setState({
        cartbooks: data,
        sum: res,
      });
    };
    getCartBooks(user.userId, callback);
  }
  handleClick = (item) => {
    //将item从cartbooks中删除(包括前端和数据库)
    const user = JSON.parse(localStorage.getItem("user"));
    const callback = (data) => {
      let len = data.length;
      let res = 0;
      for (let i = 0; i < len; i++) {
        res += data[i].price;
      }
      this.setState({
        sum: res,
        cartbooks: data,
      });
    };
    deleteCartBook(user.userId, item.cartBookId, callback);
    message.success("删除成功");
  };

  buyOnClick = () => {
    //将当前书显示在订单界面上，要在订单界面上购买才创建订单,并清空购物车
    const user = JSON.parse(localStorage.getItem("user"));
    var bookId = [];
    let length = this.state.cartbooks.length;
    if (length === 0) {
      message.error("购物车中尚未添加图书");
      return;
    }
    for (let i = 0; i < length; i++) {
      bookId.push(this.state.cartbooks[i].bookId);
    }
    const callback2 = (data) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].inventory === 0) {
          let a = data[i].name;
          message.error("《" + a + "》已没有库存");
          return;
        }
      }
      const callback3 = () => {
        this.setState({
          sum: 0,
          cartbooks: [],
        });
      };
      addTemOrderBook(user.userId, bookId, callback3);
      message.success("已建立临时订单");
    };
    getBooks2(bookId, callback2);
  };
  render() {
    return (
      <div>
        <List
          grid={{ gutter: 10, column: 3 }}
          dataSource={this.state.cartbooks}
          pagination={{
            onChange: (page) => {},
            pageSize: 9,
          }}
          renderItem={(item) => (
            <List.Item>
              <Book info={item} />
              <Button type="danger" onClick={() => this.handleClick(item)}>
                删除
              </Button>
            </List.Item>
          )}
        />
        <p>共计人民币：{this.state.sum}元</p>
        <Button
          type="danger"
          icon="pay-circle"
          size={"large"}
          style={{ marginLeft: "84%" }}
          onClick={this.buyOnClick}
        >
          立即购买
        </Button>
      </div>
    );
  }
}
