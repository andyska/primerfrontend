import React from 'react'
//import './Card.css'
import { Card } from 'antd';
import 'antd/dist/antd.css';

const { Meta } = Card;

const MyCard = (props) =>  {
  const profile = props.profile
//console.log(Meta.props)
  return (
    <Card
    hoverable
    style={{ width: 100 }}
    cover={<img alt={""} src={profile.avatar_url}/>}
    size={"default"}
    title={profile.login}
  >
    <Meta title={profile.name} description={profile.company} />
  </Card> )
}
/*
 <div style={ {backgroundColor: 'lightblue' , border: '1px solid gray', margin:'5px' }} > 
      <div className="githug-profile" style = {{float: 'left' , margin:'5px'}}>        
        <img  src={profile.avatar_url} alt={""} width="80px" height="80px"/>
      </div>
      <div className="info" style={{width: '30%' }}>
        <div className="name" style = {{textAlign: 'left'}}>{profile.name}</div>
        <div className="company" style = {{textAlign: 'left'}}>{profile.company}</div>
      </div>
    </div>
*/
/*
<div style={ {backgroundColor: 'lightblue' , border: '1px solid gray', margin:'5px' }} > 
      <div className="githug-profile" style = {{float: 'left' , margin:'5px'}}>        
        <img  src={profile.vatar_url} alt={""} width="80px" height="80px"/>
      </div>
      <div className="info" style={{width: '30%' }}>
        <div className="name" style = {{textAlign: 'left'}}>{profile.name}</div>
        <div className="company" style = {{textAlign: 'left'}}>{profile.company}</div>
      </div>
    </div>
   
*/
export default MyCard;