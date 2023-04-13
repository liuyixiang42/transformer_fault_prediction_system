import React from "react";
import { List } from "antd";
import { Book } from "./Book";
import { getBooks } from "../services/bookService";
import "../config";

export class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
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
        let len = data.length;
        let res = [];
        for (let i = 0; i < len; i++) {
          let tryit = this.props.key_sousuo;
          if (data[i].name.indexOf(tryit) >= 0) res.push(data[i]);
        }
        this.setState({ books: res });
      };
      getBooks({ search: null }, callback);
    }
  }

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
            </List.Item>
          )}
        />
      </div>
    );
  }
}
