import React from 'react';
import { Table, Tag, Space } from 'antd';
import { data } from '../../../components/DetailProduct/data'

function DetailProduct() {
  const { Column, ColumnGroup } = Table;

  return(
    <div className="table">
    <Table dataSource={data}>
        <Column title="Name" dataIndex="name" key="" />
        <Column title="Description" dataIndex="description" key="" />
        <Column title="ID" dataIndex="id" key="" />
        <Column title="Quantity" dataIndex="quantity" key="" />
      <Column
        title="Status"
        dataIndex="status"
        key=""
        render={status => (
          <>
            {status.map(statu => (
              <Tag color="blue" key={status}>
                {status}
              </Tag>
            ))}
          </>
        )}
      />
      <Column
        title="Action"
        key="action"
        render={(text, record) => (
          <Space size="middle">
            <a>Edit</a>
          </Space>
        )}
      />
    </Table>
    </div>
  );
}

export default DetailProduct
