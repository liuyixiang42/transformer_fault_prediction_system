import React from "react";
import { Layout } from "antd";
import { HeaderInfo } from "../components/HeaderInfo";
import { SideBar } from "../components/SideBar";
import "../css/bookDetail.css";
import { withRouter } from "react-router-dom";
import { getBook } from "../services/bookService";
import { BookDetail } from "../components/BookDetail";
import { ManagerSideBar } from "../components/ManagerSideBar";

const { Header, Content } = Layout;

class BookView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { books: null };
  }

  componentDidMount() {
    let user = localStorage.getItem("user");
    this.setState({ user: user });

    const query = this.props.location.search;
    const arr = query.split("&");
    const bookId = arr[0].substr(4);
    getBook(bookId, (data) => {
      this.setState({ bookInfo: data });
    });
  }

  render() {
    let side;
    if (this.props.isAdmin) {
      side = <ManagerSideBar num={"1"} isAdmin={this.props.isAdmin} />;
    } else {
      side = <SideBar num={"1"} isAdmin={this.props.isAdmin} />;
    }
    return (
      <Layout className="layout">
        <Header>
          <HeaderInfo />
        </Header>
        <Layout>
          {side}
          <Content style={{ padding: "0 50px" }}>
            <div className="home-content">
              <BookDetail info={this.state.bookInfo} />
              <div className={"foot-wrapper"}></div>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(BookView);
