import React, { Component } from 'react';
import { Table, Radio, Button } from 'antd';

class TableWithRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [1], // 选中的行key
      data: props.data.map((item) => ({ ...item, key: item.id })) // 表格数据增加key
    };
  }

  // 点击radio时更新选中的行key
  handleRadioChange = (e) => {
    this.setState({
      selectedRowKeys: [e.target.value]
    });
  };

  render() {
    const { selectedRowKeys, data } = this.state;
    const { columns } = this.props;
    const rowSelection = {
      type: 'radio',
      selectedRowKeys,
      onChange: this.handleRadioChange
    };

    return (
      <div>
        <Table columns={columns} dataSource={data} rowSelection={rowSelection} />
      </div>
    );
  }
}

export default TableWithRadio;