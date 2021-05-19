import React, { useEffect , useState } from 'react'
import { Table } from 'antd'
import axios from 'axios'
import 'antd/dist/antd.css';

const Users = () =>{
    const [users,setUsers] = useState([])

    const getAllUsers = async () => {
        const response = await axios.get('http://localhost:8080/api/users')
        console.log(response)
        setUsers (response.data) //guarda en books el array de datos
      
    }

    useEffect( () => {
        getAllUsers()
   }, [] ) //corchetes vacios se ejcuta una sola vez
   
  /*
  firstName: {type: String, required: true},
    lastName: {type: String , required: true},
    userName: {type: String},
    password: {type: String , required: true},
    email: {type: String , required: true},
    address: {type: String},
    phone: {type: String},
    birthYear : 
  */
    const columns =[
        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstName'
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastName'
        },
        {
            title: 'UserName',
            dataIndex:'userName',
            key:'userName'
        },
        {
            title:'Email',
            dataIndex:'email',
            key:'email'
        },
        {
            title:'Address',
            dataIndex:'address',
            key:'address'
        },
        {
            title:'Phone',
            dataIndex:'phone',
            key:'phone'
        }
    ]

    
    return (
        <div>
            <h1>Users</h1>
            <Table dataSource={users} columns={columns} rowKey='_id' />
        </div>
    )
}

export default Users;