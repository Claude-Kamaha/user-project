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
<Input placeholder="Basic usage" className="w-full"/>
</div>
<div   className='bg-[#F2F3F4]'>
<Button  icon={<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="white" className='bg-[#F2F3F4]'>
  <path d="M1.69197 2.83343C1.3138 2.41077 1.12471 2.19944 1.11758 2.01984C1.11139 1.86382 1.17843 1.71386 1.29884 1.61444C1.43744 1.5 1.72102 1.5 2.28816 1.5H9.70963C10.2768 1.5 10.5603 1.5 10.699 1.61444C10.8194 1.71386 10.8864 1.86382 10.8802 2.01984C10.8731 2.19944 10.684 2.41077 10.3058 2.83344L7.4527 6.02222C7.37732 6.10647 7.33963 6.14859 7.31275 6.19654C7.28891 6.23906 7.27142 6.28484 7.26084 6.33242C7.2489 6.38607 7.2489 6.4426 7.2489 6.55565V9.22919C7.2489 9.32697 7.2489 9.37586 7.23313 9.41813C7.21919 9.45548 7.19653 9.48895 7.16702 9.51576C7.13363 9.54611 7.08824 9.56426 6.99745 9.60058L5.29745 10.2806C5.11368 10.3541 5.02179 10.3908 4.94803 10.3755C4.88353 10.3621 4.82692 10.3238 4.79052 10.2689C4.7489 10.2061 4.7489 10.1071 4.7489 9.90919V6.55565C4.7489 6.4426 4.7489 6.38607 4.73696 6.33242C4.72637 6.28484 4.70888 6.23906 4.68504 6.19654C4.65817 6.14859 4.62047 6.10647 4.54509 6.02222L1.69197 2.83343Z" stroke="#4D5D63" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>} iconPosition={"start"}>
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