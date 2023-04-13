import { Button, DatePicker, Form, Table } from "antd";
import React from "react";
import { count } from "../services/userService";

const { RangePicker } = DatePicker;

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
    this.columns = [
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
  }
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
      const user = JSON.parse(localStorage.getItem("user"));
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
      };
      count(
        user.userId,
        values.dateRange[0]._d,
        values.dateRange[1]._d,
        callback
      );
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const columns = this.columns;
    return (
      <>
        <Form onSubmit={this.handleOnClick}>
          <Form.Item label="请输入时间范围">
            {getFieldDecorator("dateRange", {
              rules: [{ required: true, message: "请输入时间范围!" }],
            })(<RangePicker showTime />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size={"large"}>
              查询
            </Button>
          </Form.Item>
        </Form>
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.transform()}
          columns={columns}
        />
      </>
    );
  }
}

const WrappedCount = Form.create({ name: "count" })(Count);

export default WrappedCount;
