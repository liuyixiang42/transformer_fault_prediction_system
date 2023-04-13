import React from "react";
import { getUsers, deleteUser, changeBan } from "../services/userService";

import { Table, Popconfirm, Button, message } from "antd";

export class UserManageList extends React.Component {
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
            <>
              <Button
                type="link"
                onClick={() => this.handlechange(record.userId)}
              >
                {record.ban ? "解禁" : "禁止"}
              </Button>
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => this.handleDelete(record.userId)}
              >
                <a>Delete</a>
              </Popconfirm>
            </>
          ) : null,
      },
    ];
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    const callback = (data) => {
      this.setState({ users: data });
    };
    getUsers(callback);
  }
  handlechange = (userId) => {
    const callback = (data) => {
      message.success("成功修改用户状态");
      const callback2 = (data) => {
        this.setState({ users: data });
      };
      getUsers(callback2);
    };
    changeBan(userId, callback);
  };
  handleDelete = (userId) => {
    const callback = (data) => {
      this.setState({
        users: data,
      });
      message.success("成功删除用户");
    };
    deleteUser(userId, callback);
  };

  render() {
    const columns = this.columns;
    return (
      <div>
        <Table
          rowClassName={() => "editable-row"}
          bordered
          dataSource={this.state.users}
          columns={columns}
        />
      </div>
    );
  }
}
