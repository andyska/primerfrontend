function Button(props) {
  const handleClick = () => props.onClickFunction(props.increment)
  return (
    <button onClick={handleClick}>
      +{props.increment}
    </button>
  )
}
function Button2(props) {
  const handleClick = () => props.onClickFunction()
  return (
    <button onClick={handleClick}> Now </button>
  )
}
​
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
​
function App() {
  const [counter, setCounter] = useState(0)
  const [test, setTest] = useState(0)
  const incrementCounter = (incrementValue) => setCounter(counter + incrementValue)
  
  const getHour = () => {
    const today = new Date()
    let hour = today.getHours()+':'+ today.getMinutes()+':'+today.getSeconds()
    console.log('hour' , hour)
    return hour
  }
  
  useEffect(()=>{
  document.title = 'Your result is ' + counter  + '-'+ test
  }, [counter, test])
  
  return (
    <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter} increment={2}/>
      <Button onClickFunction={incrementCounter} increment={5}/>
      <Button onClickFunction={incrementCounter} increment={50}/>
      <Button onClickFunction={incrementCounter} increment={100}/>
      <Display message={counter}/>
      <Button2 onClickFunction={getHour}/>
    </div>
  )
}
​


ReactDOM.render(
  <App />,
  document.getElementById('mountNode')