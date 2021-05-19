import './Form.css'
import React , {useState} from 'react'
import axios from 'axios'

const MyForm = (props) => {
    const [userName, setUserName]= useState('')

    const handleSubmit = async (event) =>{
        event.preventDefault() //siempre usaremos asi
        const response = await axios.get( `https://api.github.com/users/${userName}`)
        props.onChangeList(response.data)
      //  console.log('userName: ', userName)
    }
    const handleOnChange = (data) => {
       // console.log(data.target.value)
        setUserName(data.target.value)
    }

    return (
           <form onSubmit ={handleSubmit}>
                <label>git user</label><br></br>
                <input  type="text"
                placeholder="Github username"
                value={userName}
                onChange={handleOnChange}
                required
                />
                <button>Add Card</button>
            </form>
    )
}

export default MyForm;
