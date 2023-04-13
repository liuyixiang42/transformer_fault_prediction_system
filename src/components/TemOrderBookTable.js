import React from "react";
import { Table, Button, Input, Form, message } from "antd";
import {
  getTemOrderBooks,
  deleteTemOrderBooks,
  addOrder,
} from "../services/temOrderBookService";

class TemOrderBookTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temorderbooks: [],
      sum: 0,
    };
  }
  columns = [
    { title: "书名", dataIndex: "name", key: "name" },
    { title: "作者", dataIndex: "author", key: "author" },
    { title: "价格", dataIndex: "price", key: "price" },
  ];
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem("user"));
    const callback = (data) => {
      let len = data.length;
      let res = 0;
      for (let i = 0; i < len; i++) {
        res += data[i].price;
      }
      this.setState({
        temorderbooks: data,
        sum: res,
      });
    };
    getTemOrderBooks(user.userId, callback);
  }
  buyOnClick = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();
    //实现完成订单,即将订单储存在数据库
    this.props.form.validateFields((err, values) => {
      if (!err) {
        var bookId = [];
        let length = this.state.temorderbooks.length;
        for (let i = 0; i < length; i++) {
          bookId.push(this.state.temorderbooks[i].bookId);
        }
        if (length === 0) {
          message.error("当前订单并未添加图书");
          return;
        }
        addOrder(
          user.userId,
          this.state.sum,
          values.receiver,
          values.tel,
          values.address,
          bookId
        );
        //清空原来的暂存订单
        const callback = () => {
          this.setState({
            temorderbooks: [],
            sum: 0,
          });
        };
        deleteTemOrderBooks(user.userId, callback);
        message.success("已生成新订单:)");
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Table columns={this.columns} dataSource={this.state.temorderbooks} />
        <Form onSubmit={this.buyOnClick}>
          <Form.Item>
            {getFieldDecorator("receiver", {
              rules: [{ required: true, message: "请输入收件人!" }],
            })(<Input placeholder="收件人" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("tel", {
              rules: [{ required: true, message: "请输入联系方式!" }],
            })(<Input placeholder="联系方式" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("address", {
              rules: [{ required: true, message: "请输入地址!" }],
            })(<Input placeholder="地址" />)}
          </Form.Item>
          <Form.Item>
            <p>共计人民币：{this.state.sum}元</p>
            <Button
              htmlType="submit"
              type="danger"
              icon="pay-circle"
              size={"large"}
            >
              结算
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}

const WrappedTemOrderBookTable = Form.create({ name: "tem_buy" })(
  TemOrderBookTable
);

export default WrappedTemOrderBookTable;
