//显示带图片的图书选项
import React from "react";
import { Card } from "antd";
import "../config";
import { Link } from "react-router-dom";

const { Meta } = Card;

export class Book extends React.Component {
  // handleclick=(bookId)=>{
  //     global.constants.incart[bookId]=1;
  // }

  render() {
    const { info } = this.props;
    return (
      <Link
        id={info.name}
        to={{
          pathname: "/bookDetails",
          search: "?id=" + info.bookId,
        }}
        target="_blank"
      >
        <Card
          hoverable
          style={{ width: 181 }}
          cover={<img alt={info.name} src={info.image} className={"bookImg"} />}
        >
          <Meta title={info.name} description={"¥" + info.price} />
        </Card>
      </Link>
    );
  }
}
