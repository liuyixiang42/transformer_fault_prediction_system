import React from "react";
import { Descriptions, Button, message } from "antd";
import { addCartBook } from "../services/cartBookService";
import "../config";

export class BookDetail extends React.Component {
  handleclick = (bookId) => {
    //将bookId为bookId的书存入数据库cartbook
    const user = JSON.parse(localStorage.getItem("user"));
    addCartBook(user.userId, bookId);
    message.success("加入购物车成功");
  };

  render() {
    const { info } = this.props;

    if (info == null) {
      return null;
    }

    return (
      <div className={"content"}>
        <div className={"book-detail"}>
          <div className={"descriptions"}>
            <Descriptions bordered>
              <Descriptions.Item className={"title"} label={"书名"} span={3}>
                {<span className={"bookname"}>{info.name}</span>}
              </Descriptions.Item>
              <Descriptions.Item label={"作者"} span={3}>
                {info.author}
              </Descriptions.Item>
              <Descriptions.Item label={"分类"} span={3}>
                {info.type}
              </Descriptions.Item>
              <Descriptions.Item label={"定价"} span={3}>
                {<span className={"price"}>{"¥:" + info.price}</span>}
              </Descriptions.Item>
              <Descriptions.Item label={"状态 "} span={3}>
                {info.inventory !== 0 ? (
                  <span>
                    有货{" "}
                    <span className={"inventory"}>库存{info.inventory}件</span>
                  </span>
                ) : (
                  <span className={"status"}>无货</span>
                )}
              </Descriptions.Item>
              <Descriptions.Item label={"作品简介"} span={3}>
                {info.description}
              </Descriptions.Item>
            </Descriptions>
          </div>
          <div className={"book-image"}>
            <img
              alt={info.name}
              src={info.image}
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        </div>
        <div className={"button-groups"}>
          <Button
            id="buy"
            type="danger"
            icon="shopping-cart"
            size={"large"}
            style={{ marginLeft: "55%" }}
            onClick={() => this.handleclick(info.bookId)}
          >
            加入购物车
          </Button>
        </div>
      </div>
    );
  }
}
