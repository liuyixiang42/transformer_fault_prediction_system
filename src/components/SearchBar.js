import React from "react";
import { Icon, Button, Input, AutoComplete } from "antd";
import { BookList } from "./BookList";

const { Option } = AutoComplete;

function onSelect(value) {}

function getRandomInt(max, min = 0) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function searchResult(query) {
  return new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((item, idx) => ({
      query,
      category: `${query}${idx}`,
      count: getRandomInt(200, 100),
    }));
}

function renderOption(item) {
  return (
    <Option key={item.category} value={item.category}>
      <div className="global-search-item">
        <span className="global-search-item-desc">
          Found {item.query} on
          <a
            href={`https://s.taobao.com/search?q=${item.query}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.category}
          </a>
        </span>
        <span className="global-search-item-count">{item.count} results</span>
      </div>
    </Option>
  );
}

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
      sousuo: "",
    };
  }
  handleSearch = (value) => {
    //console.log(value);
    this.setState({
      sousuo: value,
    });
  };
  componentDidMount() {
    this.setState({
      sousuo: "",
    });
  }

  render() {
    const { dataSource } = this.state;
    // console.log(this.state.sousuo);
    // const onSearch = value => console.log(value);
    return (
      <div>
        <div className="global-brief">
          <p>所有书籍</p>
        </div>
        <div className="global-search-wrapper" style={{ width: 300 }}>
          <AutoComplete
            className="global-search"
            size="large"
            style={{ width: "100%" }}
            dataSource={dataSource.map(renderOption.bind(this))}
            onSelect={onSelect}
            onSearch={this.handleSearch}
            placeholder="查询图书名"
            optionLabelProp="text"
          >
            <Input
              suffix={
                //带后缀的输入框
                <Button
                  className="search-btn"
                  style={{ marginRight: -12 }}
                  size="large"
                  type="primary"
                >
                  <Icon type="search" />
                </Button>
              }
            />
          </AutoComplete>
          <br />
          <br />
          <BookList key_sousuo={this.state.sousuo} />
        </div>
      </div>
    );
  }
}
