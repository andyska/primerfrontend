import './App.css';
import React , { useState} from 'react';
import CardList from './components/Cardlist/CardList';
import MyForm from './components/Form/Form';


function CardPage() {
  const  [profiles, setProfiles] = useState([])

  const addNewProfile = (profileData) => {
    setProfiles ([...profiles , profileData])
  }

    return (
    <div>
      <div className="header">GitHub Card App</div>
        <MyForm onChangeList={addNewProfile}/>
        <CardList data={profiles}/>
     
    </div>
  );
}

export default CardPage;
