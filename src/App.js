import React, {useContext,createContext, useEffect, useState} from 'react';


function App() {
  // useState
  const [age,setAge]= useState(24)
  const handleChangeAge =()=> {
    setAge(age+1)
  }
  // multiple state
  const [age1,setAge1]= useState(23)
  const [siblings,setSiblings]= useState(13)
  const handleAge =()=> {
    setAge1(age1+1)
  }
  const handleChangeSibling =()=> {
    setSiblings(siblings+1)
  }

  // Object state
  const[state,setState]= useState({age2:20,siblings1:4})
    const handleClick=val=>
    setState({
      ...state,[val]:state[val]+1
    })
    const {age2,siblings1}=state


    // state from function

    const[count,setCount]=useState(8)

    // useEffect

    const [age3, setAge2] = useState(0)
    const handleClick1 = () => setAge2(age3 + 1)
    useEffect(() => {
      document.title = 'You are ' + age3 + ' years old!'
    })
    
  return (
    <div>
      <h1>useState</h1>
      <h3>Today I am {age} Years of Age</h3>
      <button onClick={handleChangeAge}>Get older!</button>



      <h1>multiple state</h1>
      <h3>Today I am {age1} Years of Age</h3>
      <h3>I have {siblings} siblings</h3>
      <button onClick={handleAge}>Get older!</button>
      <button onClick={handleChangeSibling}>More siblings!</button>


      <h1>Object state</h1>
      <h3>Today I am {age2} Years of Age</h3>
      <h3>I have {siblings1} siblings</h3>
      <button onClick={handleClick.bind(null, 'age2')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblings1')}>
          More siblings!
        </button>

      <h1>state from function</h1>
      <h3>Count value is:{count}</h3>
      <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount=>prevCount+1)}>Plus(+)</button>
      <button onClick={() => setCount(prevCount=>prevCount-1)}>Minus(-)</button>

      <h1>useEffect</h1>
      <h3> Look at the title of the current tab in your browser </h3>
    <button onClick={handleClick1}>Update Title!! </button>
    </div>
  );
}

export default App;
