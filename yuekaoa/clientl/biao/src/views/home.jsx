import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [
				{
					title: '姓名',
					dataIndex: 'name',
					key: 'name',
					render: text => <a>{text}</a>
				},
				{
					title: '年龄',
					dataIndex: 'age',
					key: 'age'
				},
				{
					title: '地址',
					dataIndex: 'address',
					key: 'address'
				},
				{
					title: '电话',
					key: 'tags',
					dataIndex: 'tags',
					render: tags => (
						<span>
							{tags.map(tag => {
								let color =
									tag.length > 5 ? 'geekblue' : 'green';
								if (tag === 'loser') {
									color = 'volcano';
								}
								return (
									<Tag color={color} key={tag}>
										{tag.toUpperCase()}
									</Tag>
								);
							})}
						</span>
					)
				},
				{
					title: '操作',
					key: 'action',
					render: (text, record) => (
						<span>
							<a>Invite {record.name}</a>
							<Divider type='vertical' />
							<a>Delete</a>
						</span>
					)
				}
			],

			data: [
				{
					key: '1',
					name: 'John Brown',
					age: 32,
					address: 'New York No. 1 Lake Park',
					tags: ['nice', 'developer']
				},
				{
					key: '2',
					name: 'Jim Green',
					age: 42,
					address: 'London No. 1 Lake Park',
					tags: ['loser']
				},
				{
					key: '3',
					name: 'Joe Black',
					age: 32,
					address: 'Sidney No. 1 Lake Park',
					tags: ['cool', 'teacher']
				}
			]
		};
	}
	render() {
		let { columns, data } = this.state;
		return (
			<div>
				<Table columns={columns} dataSource={data} />
			</div>
		);
	}
}
export default Home;
