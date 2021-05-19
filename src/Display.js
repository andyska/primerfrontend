import React , {useState,useEffect} from 'react'

function Display(props) {
    const [textcolor, setColor] = useState('blue')
     useEffect( () => {
      if(props.message %2 === 0){
        setColor ('blue')
      } else {
        setColor('violet')
      }
    }, [props.message])
    
    return (
      <div style={{color : textcolor}} >la suma es :{props.message}</div>
    )
  }

  export default Display;