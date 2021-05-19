import React, {  useState } from 'react'
import { Modal , Button, Form , Input} from 'antd'
import axios from 'axios'

const {Item}=Form

const BookModal =({bookmodal, setModal , getAllBooks}) =>{
    console.log('dentro del book modal- modal', bookmodal)
    const [newbook, setNewbook] = useState({
        title: '',
        author: '',
        genre: '',
        read:  '' 
    } )
    
    const closeModal = ()=>{
        setModal(false)
    }
    const handleNewbook=e=>{
        const {name, value } = e.target ;
        setNewbook({...newbook,
            [name]: value});
            console.log('handlenewbook',newbook)
        }
    const saveModal = async ()=>{
        console.log('save modal - newbook', newbook)
        const response = await axios.post('http://localhost:8080/api/books/' , newbook )
        //validar que salio ok el post para refrescar la tabla
        console.log('despues de dar de alta',response)
        closeModal()
        getAllBooks()
    }
        
    const formview={
        labelCol:{
            span:4},
        wrapperCol:{
            span:16
        },
        }
           
return (
    <div>
      <Modal title='Book details' 
        visible={bookmodal}
        width={1000}
        footer={[
            <Button onClick={closeModal}>Cancel</Button>,
            <Button type="primary" onClick={saveModal}>Save</Button>
        ]}>
         <Form {...formview}>
             <Item label="Title">
                 <Input name="title" onChange={handleNewbook}/>
             </Item>
             <Item label="Author">
                 <Input name="author" onChange={handleNewbook}/>
             </Item>
             <Item label="Genre">
                 <Input name="genre" onChange={handleNewbook}/>
             </Item>
             <Item label="Read">
                 <Input name="read" onChange={handleNewbook}/>
             </Item>
         </Form>
      </Modal>
    </div>
)
}

export default BookModal;