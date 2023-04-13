import { Button, Table } from "antd";
import React from "react";
import { getOrders } from "../services/orderService";
import { getOrderBooks } from "../services/orderBookService";
export class OrderList extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: "订单编号", dataIndex: "orderId", width: "5%" },
      { title: "总价格", dataIndex: "totalPrice", width: "10%" },
      {
        title: "下单时间",
        dataIndex: "date",
        width: "24%",
        render(_, record) {
          return record.date.substring(0, 10);
        },
      },
      { title: "收件人", dataIndex: "receiver", width: "10%" },
      {
        title: "电话",
        dataIndex: "tel",
        width: "17%",
      },
      { title: "地址", dataIndex: "address", width: "34%" },
      {
        title: "操作",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.orders.length >= 1 ? (
            <Button onClick={() => this.handleClick(record.orderId)}>
              <a>查看订单内容</a>
            </Button>
          ) : null,
      },
    ];
    this.columns2 = [
      { title: "书名", dataIndex: "name" },
      { title: "作者", dataIndex: "author" },
      { title: "价格", dataIndex: "price" },
    ];
    this.state = {
      orders: [],
      orderBooks: [],
      // sousuo:"",
    };
  }
  componentDidMount() {
    //获取所有订单
    const user = JSON.parse(localStorage.getItem("user"));
    const callback = (data) => {
      this.setState({ orders: data });
    };
    getOrders(user.userId, callback);
  }
  componentDidUpdate(prevProps) {
    if (this.props.key_sousuo !== prevProps.key_sousuo) {
      const user = JSON.parse(localStorage.getItem("user"));
      let newOrders = [];
      const callback2 = (data) => {
        for (let i = 0; i < data.length; i++) {
          let tryit = this.props.key_sousuo;
          if (data[i].name.indexOf(tryit) >= 0) {
            for (let j = 0; j < this.state.orders.length; j++) {
              if (this.state.orders[j].orderId === data[i].orderId) {
                newOrders.push(this.state.orders[j]);
                break;
              }
            }
            break;
          }
        }
        this.setState({ orders: newOrders });
      };
      const callback = (data) => {
        this.setState({ orders: data });
        for (let i = 0; i < data.length; i++) {
          getOrderBooks(data[i].orderId, callback2);
        }
      };
      getOrders(user.userId, callback);
    }
  }
  handleClick = (orderId) => {
    //获取订单图书
    const callback = (data) => {
      this.setState({ orderBooks: data });
    };
    getOrderBooks(orderId, callback);
  };

  render() {
    const columns = this.columns;
    const columns2 = this.columns2;
    return (
      <div style={{ width: "1000px" }}>
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.state.orders}
          columns={columns}
        />
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.state.orderBooks}
          columns={columns2}
        />
      </div>
    );
  }
}
