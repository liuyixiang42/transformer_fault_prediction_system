import React from "react";
import { Button, List } from "antd";
import { Book } from "./Book";
import { getBooks, deleteBook } from "../services/bookService";
import "../config";
import { Link } from "react-router-dom";

export class ManageBookList extends React.Component {
  constructor(props) {
    super(props);
    // console.log("the key is " + this.props.key_sousuo);
    this.state = {
      books: [],
      // sousuo:"",
    };
  }

  componentDidMount() {
    const callback = (data) => {
      this.setState({ books: data });
    };
    getBooks({ search: null }, callback);
  }

  componentDidUpdate(prevProps) {
    if (this.props.key_sousuo !== prevProps.key_sousuo) {
      const callback = (data) => {
        console.log(data);
        let len = data.length;
        let res = [];
        for (let i = 0; i < len; i++) {
          let tryit = this.props.key_sousuo;
          // console.log("try to compare "+data[i].name + " with the " + tryit);
          if (data[i].name.indexOf(tryit) >= 0) res.push(data[i]);
        }
        this.setState({ books: res });
        //console.log(this.state.books);
      };
      getBooks({ search: null }, callback);
    }
  }
  handleClick = (item) => {
    //将item从cartbooks中删除(包括前端和数据库)
    const callback = (data) => {
      this.setState({
        books: data,
      });
    };
    deleteBook(item.bookId, callback);
  };

  render() {
    return (
      <div>
        <List
          grid={{ gutter: 10, column: 3 }}
          dataSource={this.state.books}
          pagination={{
            onChange: (page) => {},
            pageSize: 9,
          }}
          renderItem={(item) => (
            <List.Item>
              <Book info={item} />
              <Link
                to={{
                  pathname: "/editBook",
                  search: "?id=" + item.bookId,
                }}
                style={{ color: "blue" }}
              >
                修改图书信息
              </Link>
              <Button
                type="link"
                style={{ color: "red" }}
                onClick={() => this.handleClick(item)}
              >
                删除
              </Button>
            </List.Item>
          )}
        />
      </div>
    );
  }
}
