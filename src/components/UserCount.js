import React from "react";
import { getUsers } from "../services/userService";
import { count } from "../services/userService";

import { Table, Button, Form, DatePicker } from "antd";

const { RangePicker } = DatePicker;

class UserCount extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "用户序号",
        dataIndex: "userId",
        width: "15%",
      },
      {
        title: "用户名",
        dataIndex: "username",
        width: "25%",
      },
      {
        title: "用户类别",
        dataIndex: "userType",
        width: "20%",
      },
      {
        title: "操作",
        dataIndex: "operation",
        render: (_, record) =>
          this.state.users.length >= 1 ? (
            <Button onClick={() => this.handleClick(record.userId)}>
              <a>查看消费情况</a>
            </Button>
          ) : null,
      },
    ];
    this.columns2 = [
      { title: "书名", dataIndex: "name" },
      { title: "总数目", dataIndex: "num" },
      {
        title: "总金额",
        dataIndex: "priceNum",
        render(_, record) {
          return record.priceNum.toFixed(2);
        },
      },
    ];
    this.state = {
      users: [],
      books: [],
      date1: null,
      date2: null,
    };
  }
  componentDidMount() {
    const callback = (data) => {
      this.setState({ users: data });
    };
    getUsers(callback);
  }
  handleClick = (userId) => {
    const callback = (data) => {
      let realbooks = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i] < 10000) {
          for (let j = 0; ; j++) {
            if (data[i] === realbooks[j].bookId) {
              data[i] = realbooks[j];
              break;
            }
          }
        } else realbooks.push(data[i]);
      }
      this.setState({ books: data });
      console.log(data);
    };
    count(userId, this.state.date1, this.state.date2, callback);
  };
  transform = () => {
    let books = this.state.books;
    let tembooks = [];
    let data = [];
    while (books.length > 0) {
      let book = books[0];
      let num = 1;
      let length = books.length;
      for (let i = 1; i < length; i++) {
        if (books[i].name === book.name) {
          num++;
        } else {
          tembooks.push(books[i]);
        }
      }
      let priceNum = num * book.price;
      const a = { name: book.name, num: num, priceNum: priceNum };
      data.push(a);
      books = tembooks;
      tembooks = [];
    }
    //需要将data非升序排列
    let length = data.length;
    if (length <= 1) return data;
    let tem;
    for (let i = 0; i < length - 1; i++) {
      for (let j = i + 1; j < length; j++) {
        if (data[j].num > data[i].num) {
          tem = data[j];
          data[j] = data[i];
          data[i] = tem;
        }
      }
    }
    return data;
  };
  handleOnClick = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      this.setState({
        date1: values.dateRange[0]._d,
        date2: values.dateRange[1]._d,
      });
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = this.columns;
    const columns2 = this.columns2;
    return (
      <div>
        <Form onSubmit={this.handleOnClick}>
          <Form.Item label="请输入时间范围">
            {getFieldDecorator("dateRange", {
              rules: [{ required: true, message: "请输入时间范围!" }],
            })(<RangePicker showTime />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size={"large"}>
              确认时间范围
            </Button>
          </Form.Item>
        </Form>
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.state.users}
          columns={columns}
        />
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.transform()}
          columns={columns2}
        />
      </div>
    );
  }
}
const WrappedUserCount = Form.create({ name: "count" })(UserCount);

export default WrappedUserCount;
