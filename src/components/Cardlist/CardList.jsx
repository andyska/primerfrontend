import MyCard from '../Card/Card';
  
const CardList = (props) => {
  return (
    <div>
      {props.data.map( profile => <MyCard profile = {profile} key={profile.name} />)}
    </div>
     )
}

export default CardList;