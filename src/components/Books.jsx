import React, { useEffect , useState } from 'react'
import { Table , Button} from 'antd'
import {DeleteTwoTone, EditTwoTone, PlusCircleOutlined } from '@ant-design/icons'
import axios from 'axios'
import BookModal from './Modal/BookModal'
import ModalConfirm from './Modal/ModalConfirm'

const Books = () =>{
    const [books,setBooks] = useState([])  

    const getAllBooks = async () => {
        const response = await axios.get('http://localhost:8080/api/books')
        //console.log(response)
        setBooks (response.data) //guarda en books el array de datos
    }

    useEffect( () => {
        getAllBooks()
   }, [] ) //corchetes vacios se ejcuta una sola vez
   
   const [bookmodal, setModal] = useState(false)
   const openModal = ()=>{
       setModal(true)
    }

    const [ isModalVisible, setIsModalVisible] = useState(false)
    
    const [ bookdetails, setBookdetails]  = useState({})
    
    const handleOnDelete = (event) => {
        //antes de borrar llamar a un modal que confirme que quiere borrar ese libro
        setBookdetails (event)
       // console.log('books-handleOnDelete', bookdetails)
        setIsModalVisible(true)
        const deleteId = event._id
          /*  const response = await axios.delete('http://localhost:8080/api/books/' + deleteId)
            //validar que salio ok el delete para refrescar la tabla
            console.log(response)
            getAllBooks()*/
    } 
    
    const columns =[
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title'
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author'
        },
        {
            title: 'Genre',
            dataIndex:'genre',
            key:'genre'
        },
        {
            title:'Read',
            dataIndex:'read',
            key:'read'
        },
        {
            title: 'Del',
            dataIndex: '',
            key: 'd',
           // render: (text, row) => <DeleteTwoTone onClick={()=>handleOnDelete(row)}/>     
           render: (text, row) => <DeleteTwoTone onClick={()=>handleOnDelete(row)}/>     
        },
        {
            title: 'Edit',
            dataIndex: '',
            key: 'e',
            render: () => <EditTwoTone onClick={(record) => console.log('record', record)}/>
        },
    ]
       
    return (
        <div>
            <h1>Books</h1>
            <Button type="primary" icon={<PlusCircleOutlined/>} onClick={ openModal} >Add Book</Button>
            <BookModal bookmodal={bookmodal} setModal={setModal} getAllBooks={getAllBooks} />
            <ModalConfirm isModalVisible={isModalVisible} setIsModalVisible={setIsModalVisible} getAllBooks={getAllBooks} bookdetails={bookdetails} />
            <Table dataSource={books} columns={columns} rowKey='_id' />
        </div>
    )
}

export default Books;