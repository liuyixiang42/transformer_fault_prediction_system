import React from "react";
import { Button, Input, Form, message } from "antd";
import { editBook, getBook } from "../services/bookService";

class EditBookForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: null,
    };
  }
  GetQueryString = (name) => {
    //获取url的参数
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
  };
  handleOnClick = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        editBook(
          this.GetQueryString("id"),
          values.isbn,
          values.name,
          values.type,
          values.author,
          values.price,
          values.description,
          values.inventory,
          values.image
        );
        message.success("修改图书信息成功");
      }
    });
  };
  componentDidMount() {
    getBook(this.GetQueryString("id"), (data) => {
      this.setState({ book: data });
    });
  }
  f1 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.isbn;
  };
  f2 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.name;
  };
  f3 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.type;
  };
  f4 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.author;
  };
  f5 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.price;
  };
  f6 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.description;
  };
  f7 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.inventory;
  };
  f8 = () => {
    if (this.state.book === null) return null;
    else return this.state.book.image;
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const isbn = this.f1();
    const name = this.f2();
    const type = this.f3();
    const author = this.f4();
    const price = this.f5();
    const description = this.f6();
    const inventory = this.f7();
    const image = this.f8();
    return (
      <Form onSubmit={this.handleOnClick}>
        <Form.Item>
          {getFieldDecorator("isbn", {
            initialValue: isbn,
            rules: [{ required: true, message: "请输入序号!" }],
          })(<Input placeholder="序号" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("name", {
            initialValue: name,
            rules: [{ required: true, message: "请输入书名!" }],
          })(<Input placeholder="书名" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("type", {
            initialValue: type,
            rules: [{ required: true, message: "请输入类型!" }],
          })(<Input placeholder="类型" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("author", {
            initialValue: author,
            rules: [{ required: true, message: "请输入作者!" }],
          })(<Input placeholder="作者" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("price", {
            initialValue: price,
            rules: [{ required: true, message: "请输入价格!" }],
          })(<Input placeholder="价格" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("description", {
            initialValue: description,
            rules: [{ required: true, message: "请输入简介!" }],
          })(<Input placeholder="简介" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("inventory", {
            initialValue: inventory,
            rules: [{ required: true, message: "请输入库存!" }],
          })(<Input placeholder="库存" />)}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("image", {
            initialValue: image,
            rules: [{ required: true, message: "请输入图片来源!" }],
          })(<Input placeholder="图片来源" />)}
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" size={"large"}>
            确认修改
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
const WrappedEditBookForm = Form.create({ name: "tem_buy" })(EditBookForm);

export default WrappedEditBookForm;
