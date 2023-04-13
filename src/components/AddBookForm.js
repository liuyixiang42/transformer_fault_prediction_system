import React from "react";
import { Button, Input, Form, message } from "antd";
import { addBook } from "../services/bookService";
import { Alert, Col, Row } from "antd";

class AddBookForm extends React.Component {
  handleOnClick = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        addBook(
          values.isbn,
          values.name,
          values.type,
          values.author,
          values.price,
          values.description,
          values.inventory,
          values.image
        );
        message.success("添加图书成功");
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <>
        <Row justify="center">
          <Col xs={24} md={20} lg={18}>
            <Alert
              message="使用指南:请将图片上传至“https://imgtu.com/”，并将生成链接填入图片来源"
              type="info"
              showIcon
            />
          </Col>
        </Row>
        <Form onSubmit={this.handleOnClick}>
          <Form.Item>
            {getFieldDecorator("isbn", {
              rules: [{ required: true, message: "请输入序号!" }],
            })(<Input placeholder="序号" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("name", {
              rules: [{ required: true, message: "请输入书名!" }],
            })(<Input placeholder="书名" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("type", {
              rules: [{ required: true, message: "请输入类型!" }],
            })(<Input placeholder="类型" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("author", {
              rules: [{ required: true, message: "请输入作者!" }],
            })(<Input placeholder="作者" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("price", {
              rules: [{ required: true, message: "请输入价格!" }],
            })(<Input placeholder="价格" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("description", {
              rules: [{ required: true, message: "请输入简介!" }],
            })(<Input placeholder="简介" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("inventory", {
              rules: [{ required: true, message: "请输入库存!" }],
            })(<Input placeholder="库存" />)}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator("image", {
              rules: [{ required: true, message: "请输入图片来源!" }],
            })(<Input placeholder="图片来源" />)}
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary" size={"large"}>
              增加
            </Button>
          </Form.Item>
        </Form>
      </>
    );
  }
}
const WrappedAddBookForm = Form.create({ name: "tem_buy" })(AddBookForm);

export default WrappedAddBookForm;
