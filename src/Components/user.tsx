// import React, { useState } from 'react';
import { Button, Card, Input, Space, Table, Tag } from 'antd';
import type {  TableProps } from 'antd';
import { SearchOutlined } from '@ant-design/icons';


interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}
// type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
// type TablePaginationPosition = NonNullable<TablePagination<any>['position']>[number];

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];

  
const User: React.FC = () =>{
    // const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
    //     if (type === 'prev') {
    //       return <a>Previous</a>;
    //     }
    //     if (type === 'next') {
    //       return <a>Next</a>;
    //     }
    //     return originalElement;
    //   };
return(
    <>
    <div className="w-[1084px] h-12 justify-between items-center inline-flex">
  <div className="p-1 bg-[#fafafb] rounded-[100px] justify-center items-center gap-1 flex">
    <div className="px-4 py-2 bg-white rounded-[100px] shadow justify-center items-center gap-2 flex">
      <div className="text-center text-[#00171f] text-sm font-medium font-['Aeonik'] leading-tight">All</div>
      <div className="p-0.5 bg-[#8758ff] rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#f2f3f4] text-xs font-medium font-['Aeonik'] leading-3">2k</div>
      </div>
    </div>
    <div className="px-4 py-2 rounded-[100px] justify-center items-center gap-2 flex">
      <div className="text-center text-[#7f8a8e] text-sm font-normal font-['Aeonik'] leading-tight">Users</div>
      <div className="p-0.5 bg-white rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#b3babc] text-xs font-medium font-['Aeonik'] leading-3">1,5k</div>
      </div>
    </div>
    <div className="px-4 py-2 rounded-[100px] justify-center items-center gap-2 flex">
      <div className="text-center text-[#7f8a8e] text-sm font-normal font-['Aeonik'] leading-tight">Collectors</div>
      <div className="p-0.5 bg-white rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#b3babc] text-xs font-medium font-['Aeonik'] leading-3">24</div>
      </div>
    </div>
    <div className="px-4 py-2 rounded-[100px] justify-center items-center gap-2 flex">
      <div className="text-center text-[#7f8a8e] text-sm font-normal font-['Aeonik'] leading-tight">Testers</div>
      <div className="p-0.5 bg-white rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#b3babc] text-xs font-medium font-['Aeonik'] leading-3">12</div>
      </div>
    </div>
    <div className="px-4 py-2 rounded-[100px] justify-center items-center gap-2 flex">
      <div className="text-center text-[#7f8a8e] text-sm font-normal font-['Aeonik'] leading-tight">Devs</div>
      <div className="p-0.5 bg-white rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#b3babc] text-xs font-medium font-['Aeonik'] leading-3">47</div>
      </div>
    </div>
    <div className="px-4 py-2 rounded-[100px] justify-center items-center gap-2 flex">
      <div className="text-center text-[#7f8a8e] text-sm font-normal font-['Aeonik'] leading-tight">Merchant</div>
      <div className="p-0.5 bg-white rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#b3babc] text-xs font-medium font-['Aeonik'] leading-3">22</div>
      </div>
    </div>
    <div className="px-4 py-2 rounded-[100px] justify-center items-center gap-2 flex">
      <div className="text-center text-[#7f8a8e] text-sm font-normal font-['Aeonik'] leading-tight">Admins</div>
      <div className="p-0.5 bg-white rounded-[80px] justify-center items-center gap-[6.40px] flex">
        <div className="text-center text-[#b3babc] text-xs font-medium font-['Aeonik'] leading-3">4</div>
      </div>
    </div>
  </div>
  <div className="justify-start items-center gap-3 flex">
    <div className="pl-3.5 pr-4 py-4 bg-[#8758ff] rounded-[100px] justify-center items-center gap-2 flex">
      <div className="w-4 h-4 relative" />
      <div className="text-white text-sm font-medium font-['Aeonik'] leading-none">Create User</div>
    </div>
  </div>
</div>
     <Card bordered={false} style={{ width: 1080 }}>

     <div className="flex justify-between">
<div className="w-[373px]">
<Input placeholder="Basic usage" className="w-full"/>;
</div>
<div>
<Button type="primary" icon={<SearchOutlined />} iconPosition={"start"}>
            Filter
          </Button>
</div>
    </div>

     <Table columns={columns} dataSource={data}  pagination={{position: ["bottomLeft"],showSizeChanger: true,
        showQuickJumper: true, pageSizeOptions:[10, 20, 50, 1000]
         }} />;
  </Card>
       

    </>
)
}
export default User;