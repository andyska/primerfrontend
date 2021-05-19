import React from 'react';
import {Modal} from 'antd';
import axios from 'axios'

const ModalConfirm = ({isModalVisible ,setIsModalVisible ,  getAllBooks , bookdetails}) => {
  console.log('ModalConfirm-bookdetails - 1', bookdetails)
  const bookid =  'http://localhost:8080/api/books/' + bookdetails._id
  console.log('ModalConfirm-bookdetails -2 ',bookid)
  const handleCancel = () => {
    setIsModalVisible(false)
  };

  const handleOnDelete = async (bookid) => {
    console.log('ModalConfirm-bookdetails -3 ',bookid)
    try{
      const response = await axios.delete(bookid)
      //validar que salio ok el delete para refrescar la tabla
      console.log('despues de borrar',response)
      getAllBooks()
      setIsModalVisible(false)
    } catch (error){
      console.log('handleOndelete-error', error)
      throw error
    }
  } 
  return (
      <Modal title="Confirm Delete this book ?" visible={isModalVisible} onOk={handleOnDelete} onCancel={handleCancel}>
        <p>{bookdetails.title}</p>
        <p>{bookdetails.author}</p>
        <p>{bookdetails.genre}</p>
      </Modal>
  );
};

export default ModalConfirm;
